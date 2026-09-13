import { siteConfig } from '../../config/site';

/** One canonical form for HTML, schema, internal links and sitemap. */
export function canonicalUrl(path: string): string {
  const url = new URL(path, siteConfig.domain);
  url.search = '';
  url.hash = '';
  if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '');
  return url.href;
}
