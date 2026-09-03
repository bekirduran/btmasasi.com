import { describe, it, expect } from 'vitest';
import { leadSchema, sanitizeSource } from '../../worker/lib/validation';

describe('Lead Schema Validation', () => {
  it('should accept valid contact submission', () => {
    const validData = {
      formType: 'contact',
      name: 'Ahmet Yılmaz',
      company: 'Yılmaz Tekstil A.Ş.',
      email: 'ahmet@yilmaztekstil.com',
      phone: '05321234567',
      message: 'Aksaray OSB tesisimiz için 20 bilgisayarlık kurumsal IT destek teklifi istiyoruz.',
      consent: true,
      token: 'test-turnstile-token',
    };

    const result = leadSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject when consent is false', () => {
    const invalidData = {
      formType: 'contact',
      name: 'Mehmet Demir',
      company: 'Demir Lojistik',
      phone: '05551234567',
      message: 'Ağ altyapımızda sık sık kopmalar yaşıyoruz, teklif alabilir miyiz?',
      consent: false,
      token: 'valid-token',
    };

    const result = leadSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject when honeypot field is filled', () => {
    const botData = {
      formType: 'contact',
      name: 'Spam Bot',
      company: 'Spam Corp',
      phone: '05551234567',
      message: 'Burada bir spam mesaj bulunmaktadır test için.',
      consent: true,
      token: 'valid-token',
      website_url_hp: 'https://spam-site.com',
    };

    const result = leadSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it('should reject short messages under 10 chars', () => {
    const shortMsgData = {
      formType: 'contact',
      name: 'Ali Veli',
      company: 'Test Ltd',
      phone: '05331112233',
      message: 'Kısa',
      consent: true,
      token: 'valid-token',
    };

    const result = leadSchema.safeParse(shortMsgData);
    expect(result.success).toBe(false);
  });
});

describe('Sanitize Source Helper', () => {
  it('should sanitize query parameters and keep valid chars', () => {
    const dirty = 'business_card_qr?utm_source=qr&attack=<script>';
    const clean = sanitizeSource(dirty);
    expect(clean).not.toContain('<');
    expect(clean).not.toContain('>');
    expect(clean).toBe('business_card_qrutm_source=qr&attack=script');
  });

  it('should return null for empty or null source', () => {
    expect(sanitizeSource(null)).toBeNull();
    expect(sanitizeSource('')).toBeNull();
  });
});
