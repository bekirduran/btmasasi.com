/**
 * Cloudflare Turnstile Sunucu Tarafı Doğrulama Yardımcısı
 */

export interface TurnstileVerifyResult {
  success: boolean;
  errorCodes?: string[];
}

export async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteIp?: string | null
): Promise<TurnstileVerifyResult> {
  // Test anahtarı doğrudan geçebilir veya resmi Cloudflare endpoint'ine gönderilir
  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);
  if (remoteIp) {
    formData.append('remoteip', remoteIp);
  }

  try {
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = (await result.json()) as {
      success: boolean;
      'error-codes'?: string[];
    };

    return {
      success: Boolean(outcome.success),
      errorCodes: outcome['error-codes'],
    };
  } catch (error) {
    // Ağ veya servis hatasında güvenli loglama
    console.error('Turnstile verification request failed');
    return {
      success: false,
      errorCodes: ['internal-error'],
    };
  }
}
