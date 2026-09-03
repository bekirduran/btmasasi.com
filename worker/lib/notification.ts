import type { LeadInput } from './validation';
import { createMimeMessage } from 'mimetext';
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
  toEmail: string = 'bekirduran2@gmail.com',
  fromEmail: string = 'info@btmasasi.com'
): Promise<boolean> {
  try {
    const { subject, text } = formatLeadEmailContent(lead);

    const msg = createMimeMessage();
    msg.setSender({ name: 'BT Masası Sistem', addr: fromEmail });
    msg.setRecipient(toEmail);
    msg.setSubject(subject);
    if (lead.email) {
      msg.setHeader('Reply-To', lead.email);
    }
    msg.addMessage({
      contentType: 'text/plain',
      data: text,
    });

    const emailMessage = new EmailMessage(fromEmail, toEmail, msg.asRaw());
    await sendEmailBinding.send(emailMessage);
    console.log(`Notification successfully sent to ${toEmail}`);
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
