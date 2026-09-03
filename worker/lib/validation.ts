import { z } from 'zod';

export const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;

export const leadSchema = z.object({
  formType: z.enum(['contact', 'risk_assessment']),
  name: z.string().trim().min(2, 'İsim en az 2 karakter olmalıdır.').max(80, 'İsim en fazla 80 karakter olabilir.'),
  company: z.string().trim().min(2, 'Firma adı en az 2 karakter olmalıdır.').max(120, 'Firma adı en fazla 120 karakter olabilir.'),
  email: z
    .string()
    .trim()
    .email('Lütfen geçerli bir e-posta adresi girin.')
    .max(254, 'E-posta adresi çok uzun.')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .min(7, 'Geçerli bir telefon numarası giriniz.')
    .max(30, 'Telefon numarası en fazla 30 karakter olabilir.')
    .refine((val) => phoneRegex.test(val.replace(/\s+/g, '')), {
      message: 'Geçersiz telefon formatı.',
    }),
  employeeRange: z.string().max(40).optional().or(z.literal('')),
  deviceRange: z.string().max(40).optional().or(z.literal('')),
  locationCount: z.string().max(40).optional().or(z.literal('')),
  services: z.array(z.string().max(60)).max(8).optional(),
  preferredContact: z.enum(['phone', 'email', 'whatsapp']).optional(),
  message: z.string().trim().min(10, 'Mesajınız en az 10 karakter olmalıdır.').max(1500, 'Mesajınız en fazla 1500 karakter olabilir.'),
  consent: z.literal(true, {
    message: 'KVKK aydınlatma metnini onaylamanız gerekmektedir.',
  }),
  // Honeypot field for anti-bot
  website_url_hp: z.string().max(0, 'Spam algılandı.').optional().or(z.literal('')),
  // Turnstile token
  token: z.string().min(1, 'Doğrulama belirteci eksik.'),
  // Optional tracking source (e.g. business_card_qr)
  source: z.string().max(120).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

/**
 * UTM ve kampanya parametrelerini güvenli formata indirger
 */
export function sanitizeSource(rawSource?: string | null): string | null {
  if (!rawSource) return null;
  // Sadece alfanümerik, altçizgi, tire ve eşittir işaretlerine izin ver
  const cleaned = rawSource.replace(/[^a-zA-Z0-9_\-=&]/g, '').slice(0, 120);
  return cleaned.length > 0 ? cleaned : null;
}
