export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  LEADS_DB: D1Database;
  SITE_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}
