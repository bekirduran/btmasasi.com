import type { LeadInput } from './validation';
import { EmailMessage } from 'cloudflare:email';

/**
 * Lead bildirim metnini oluşturur
 */
export function formatLeadEmailContent(lead: LeadInput): { subject: string; text: string } {
  const preferredText = lead.preferredContact === 'phone'
    ? 'Telefon Görüşmesi'
    : lead.preferredContact === 'whatsapp'
    ? 'WhatsApp Mesajı'
    : 'Kurumsal E-posta';

  const formName = lead.formType === 'risk_assessment'
    ? 'Ücretsiz BT Ön Değerlendirmesi'
    : 'İletişim Formu';

  const text = [
    `🔔 BT Masası Web Sitesinden Yeni Talep Geldi!\n`,
    `📋 Form Türü: ${formName}`,
    `👤 Ad Soyad: ${lead.name}`,
    `🏢 Firma: ${lead.company}`,
    `📞 Telefon: ${lead.phone}`,
    `✉️ E-posta: ${lead.email || 'Belirtilmedi'}`,
    `💬 Tercih Ettiği İletişim Kanalı: ${preferredText}`,
    lead.employeeRange ? `👥 Çalışan Sayısı: ${lead.employeeRange}` : '',
    lead.deviceRange ? `💻 Cihaz Sayısı: ${lead.deviceRange}` : '',
    lead.locationCount ? `📍 Lokasyon: ${lead.locationCount}` : '',
    lead.services && lead.services.length > 0 ? `🛠️ İlgilenilen Hizmetler: ${lead.services.join(', ')}` : '',
    `\n📝 Mesaj:`,
    lead.message,
    `\n───────────────────────────`,
    `Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}`,
  ]
    .filter(Boolean)
    .join('\n');

  const subject = `[BT Masası] Yeni Talep: ${lead.company} (${lead.name})`;

  return { subject, text };
}

/**
 * Cloudflare Worker yerel Send Email servisi üzerinden anlık bildirim gönderimi
 */
export async function sendCloudflareEmailNotification(
  sendEmailBinding: SendEmail,
  lead: LeadInput,
  toEmail: string,
  fromEmail: string = 'bildirim@btmasasi.com'
): Promise<boolean> {
  try {
    const { subject, text } = formatLeadEmailContent(lead);

    const rawEmail = [
      `From: BT Masası Sistem <${fromEmail}>`,
      `To: <${toEmail}>`,
      lead.email ? `Reply-To: <${lead.email}>` : '',
      `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      `Content-Transfer-Encoding: base64`,
      ``,
      Buffer.from(text).toString('base64'),
    ]
      .filter(Boolean)
      .join('\r\n');

    const msg = new EmailMessage(fromEmail, toEmail, rawEmail);
    await sendEmailBinding.send(msg);
    return true;
  } catch (error) {
    console.error('Cloudflare email notification failed:', error);
    return false;
  }
}

/**
 * Resend API üzerinden isteğe bağlı bildirim gönderimi
 */
export async function sendLeadNotification(
  lead: LeadInput,
  apiKey?: string,
  toEmail?: string,
  fromEmail?: string
): Promise<boolean> {
  if (!apiKey || !toEmail || !fromEmail) {
    return false;
  }

  try {
    const { subject, text } = formatLeadEmailContent(lead);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: lead.email || undefined,
        subject,
        text,
      }),
    });

    return res.ok;
  } catch {
    console.error('Resend email notification delivery failed');
    return false;
  }
}
