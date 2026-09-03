import { describe, it, expect } from 'vitest';
import { applySecurityHeaders, withSecurityHeaders } from '../../worker/lib/security-headers';

describe('Security Headers', () => {
  it('should attach required security headers', () => {
    const originalHeaders = new Headers({ 'Content-Type': 'text/html' });
    const secured = applySecurityHeaders(originalHeaders);

    expect(secured.get('X-Content-Type-Options')).toBe('nosniff');
    expect(secured.get('X-Frame-Options')).toBe('DENY');
    expect(secured.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(secured.get('Permissions-Policy')).toContain('camera=()');
    expect(secured.get('Content-Security-Policy')).toContain('challenges.cloudflare.com');
  });

  it('should preserve response body and status code while attaching headers', async () => {
    const rawResponse = new Response('Hello World', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });

    const securedResponse = withSecurityHeaders(rawResponse);
    expect(securedResponse.status).toBe(200);
    expect(await securedResponse.text()).toBe('Hello World');
    expect(securedResponse.headers.get('X-Frame-Options')).toBe('DENY');
  });
});
