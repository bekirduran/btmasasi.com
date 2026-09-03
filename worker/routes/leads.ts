import type { Env } from '../env';
import { leadSchema, sanitizeSource } from '../lib/validation';
import { verifyTurnstileToken } from '../lib/turnstile';
import { sendLeadNotification, sendCloudflareEmailNotification } from '../lib/notification';

export async function handleLeadSubmission(request: Request, env: Env): Promise<Response> {
  // 1. HTTP Metot Kontrolü (Sadece POST kabul edilir)
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Yalnızca POST istekleri kabul edilir.' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Allow: 'POST',
      },
    });
  }

  // 2. Boyut Kontrolü (Maksimum 32 KB)
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > 32 * 1024) {
    return new Response(JSON.stringify({ success: false, message: 'İstek boyutu çok büyük.' }), {
      status: 413,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  // 3. JSON Ayrıştırma
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Geçersiz JSON verisi.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  // 4. Şema Doğrulama
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const errorMap: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] ? String(issue.path[0]) : 'form';
      errorMap[field] = issue.message;
    }
    return new Response(JSON.stringify({ success: false, message: 'Lütfen form alanlarını kontrol edin.', errors: errorMap }), {
      status: 422,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const data = parsed.data;

  // 5. Turnstile Doğrulama
  const turnstileSecret = env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
  const clientIp = request.headers.get('cf-connecting-ip');
  const turnstileCheck = await verifyTurnstileToken(data.token, turnstileSecret, clientIp);

  if (!turnstileCheck.success) {
    return new Response(JSON.stringify({ success: false, message: 'Güvenlik doğrulaması başarısız oldu. Lütfen sayfayı yenileyip tekrar deneyin.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  // 6. D1 Veritabanına Prepared Statement ile Kayıt
  const leadId = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const sanitizedSrc = sanitizeSource(data.source);
  const servicesJson = data.services && data.services.length > 0 ? JSON.stringify(data.services) : null;

  try {
    if (env.LEADS_DB) {
      await env.LEADS_DB.prepare(
        `INSERT INTO leads (
          id, created_at, form_type, name, company, email, phone,
          employee_range, device_range, location_count, services,
          preferred_contact, message, source, consent_version, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          leadId,
          createdAt,
          data.formType,
          data.name,
          data.company,
          data.email || null,
          data.phone,
          data.employeeRange || null,
          data.deviceRange || null,
          data.locationCount || null,
          servicesJson,
          data.preferredContact || null,
          data.message,
          sanitizedSrc,
          'v1.0',
          'new'
        )
        .run();
    } else {
      console.warn('LEADS_DB binding is not available in local simulation mode');
    }
  } catch (dbError) {
    console.error('Database insertion error');
    return new Response(
      JSON.stringify({ success: false, message: 'Kayıt sırasında teknik bir aksaklık oluştu. Lütfen daha sonra tekrar deneyin.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }

  // 7. Anlık E-posta Bildirimi (arka planda)
  const targetEmail = env.CONTACT_TO_EMAIL || 'bekirduran2@gmail.com';
  const senderEmail = env.CONTACT_FROM_EMAIL || 'info@btmasasi.com';

  if (env.EMAIL) {
    try {
      await sendCloudflareEmailNotification(env.EMAIL, data, targetEmail, senderEmail);
    } catch (e) {
      console.error('SendEmail notification error', e);
    }
  } else if (env.RESEND_API_KEY) {
    try {
      await sendLeadNotification(data, env.RESEND_API_KEY, targetEmail, senderEmail);
    } catch {
      // E-posta hatası kullanıcıya yansıtılmaz
    }
  }

  // 8. Başarı Yanıtı
  return new Response(
    JSON.stringify({
      success: true,
      message: 'Talebiniz alındı. Paylaştığınız iletişim bilgisi üzerinden size dönüş yapılacaktır.',
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }
  );
}
