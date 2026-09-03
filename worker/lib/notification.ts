import type { LeadInput } from './validation';

/**
 * Yeni lead oluşturulduğunda isteğe bağlı e-posta bildirimi gönderimi
 */
export async function sendLeadNotification(
  lead: LeadInput,
  apiKey?: string,
  toEmail?: string,
  fromEmail?: string
): Promise<boolean> {
  if (!apiKey || !toEmail || !fromEmail) {
    // E-posta servisi yapılandırılmamışsa sessizce atla (D1 zaten kaydetti)
    return false;
  }

  try {
    const textContent = [
      `Yeni Talep: ${lead.formType === 'risk_assessment' ? 'Ücretsiz BT Ön Değerlendirmesi' : 'İletişim Formu'}`,
      `İsim: ${lead.name}`,
      `Firma: ${lead.company}`,
      `Telefon: ${lead.phone}`,
      `E-posta: ${lead.email || 'Belirtilmedi'}`,
      lead.employeeRange ? `Çalışan Sayısı: ${lead.employeeRange}` : '',
      lead.deviceRange ? `Cihaz Sayısı: ${lead.deviceRange}` : '',
      lead.services ? `Seçilen Hizmetler: ${lead.services.join(', ')}` : '',
      `Mesaj: ${lead.message}`,
    ]
      .filter(Boolean)
      .join('\n');

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
        subject: `[BT Masası] Yeni Talep: ${lead.company} - ${lead.name}`,
        text: textContent,
      }),
    });

    return res.ok;
  } catch {
    // PII loglamadan güvenli hata kaydı
    console.error('Email notification delivery failed');
    return false;
  }
}
