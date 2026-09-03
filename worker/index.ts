import type { Env } from './env';
import { handleLeadSubmission } from './routes/leads';
import { withSecurityHeaders } from './lib/security-headers';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. API Rotaları
    if (url.pathname === '/api/leads') {
      try {
        const response = await handleLeadSubmission(request, env);
        return withSecurityHeaders(response);
      } catch (err) {
        console.error('Unhandled API error');
        const errResponse = new Response(
          JSON.stringify({ success: false, message: 'Beklenmedik bir hata oluştu.' }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
          }
        );
        return withSecurityHeaders(errResponse);
      }
    }

    // 2. Statik Varlıklar (Cloudflare Workers Static Assets)
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      return withSecurityHeaders(assetResponse);
    } catch {
      return new Response('Not Found', { status: 404 });
    }
  },
};
