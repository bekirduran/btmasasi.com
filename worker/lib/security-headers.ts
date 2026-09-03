/**
 * Güvenlik Başlıkları Yardımcısı
 * Cloudflare Worker üzerinden dönen tüm yanıtlara (statik varlıklar ve API)
 * endüstri standardı modern HTTP güvenlik başlıklarını ekler.
 */

export function applySecurityHeaders(headers: Headers): Headers {
  const newHeaders = new Headers(headers);

  // Content Security Policy: Turnstile betik ve frame'lerine izin verir, diğer kaynakları sınırlandırır
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
    "frame-src https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "connect-src 'self' https://challenges.cloudflare.com",
    "font-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
  ].join('; ');

  newHeaders.set('Content-Security-Policy', csp);
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'DENY');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

  return newHeaders;
}

export function withSecurityHeaders(response: Response): Response {
  const newHeaders = applySecurityHeaders(response.headers);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
