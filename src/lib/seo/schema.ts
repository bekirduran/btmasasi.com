import { siteConfig } from '../../config/site';
import { canonicalUrl } from './urls';

type SchemaNode = Record<string, unknown>;
export const organizationId = `${siteConfig.domain}/#organization`;
export const websiteId = `${siteConfig.domain}/#website`;
export const founderId = `${siteConfig.domain}/#founder`;

export function createPageGraph(path: string, title: string, custom?: SchemaNode | SchemaNode[]) {
  const url = canonicalUrl(path);
  const organization: SchemaNode = {
    '@type': 'Organization', '@id': organizationId,
    name: siteConfig.brandName, url: siteConfig.domain,
    logo: { '@type': 'ImageObject', url: `${siteConfig.domain}/brand/logo.png` },
    description: 'Türkiye genelinde uzaktan kurumsal IT desteği; Aksaray ve uygun çevre lokasyonlarda planlı yerinde BT hizmeti.',
    founder: { '@id': founderId },
    sameAs: [siteConfig.socialLinks.instagram, siteConfig.googleBusinessProfileUrl].filter(Boolean),
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    ...(siteConfig.legalCompanyName ? { legalName: siteConfig.legalCompanyName } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phoneE164 ? { telephone: siteConfig.phoneE164 } : {}),
    ...(siteConfig.address ? { address: { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressLocality: siteConfig.city, addressCountry: 'TR' } } : {}),
  };
  const page: SchemaNode = {
    '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title,
    isPartOf: { '@id': websiteId }, about: { '@id': organizationId }, inLanguage: 'tr-TR',
  };
  const supplied = custom ? (Array.isArray(custom) ? custom : [custom]) : [];
  const extra = supplied.flatMap(node => Array.isArray(node['@graph']) ? node['@graph'] as SchemaNode[] : [node])
    .map((node, index) => {
      const { '@context': _context, ...rest } = node;
      const result: SchemaNode = { ...rest, '@id': rest['@id'] || `${url}#${String(rest['@type'] || 'entity').toLowerCase()}-${index}` };
      if (rest['@type'] === 'Service') result.provider = { '@id': organizationId };
      if (rest['@type'] === 'BlogPosting' || rest['@type'] === 'Article') {
        result.publisher = { '@id': organizationId };
        result.author = { '@id': founderId };
        result.mainEntityOfPage = { '@id': `${url}#webpage` };
      }
      if (rest['@type'] === 'FAQPage') result.isPartOf = { '@id': `${url}#webpage` };
      return result;
    });
  return { '@context': 'https://schema.org', '@graph': [
    organization,
    { '@type': 'Person', '@id': founderId, name: siteConfig.founderName, jobTitle: siteConfig.founderTitle,
      url: canonicalUrl('/hakkimizda'), worksFor: { '@id': organizationId },
      sameAs: siteConfig.socialLinks.linkedin ? [siteConfig.socialLinks.linkedin] : [] },
    { '@type': 'WebSite', '@id': websiteId, url: `${siteConfig.domain}/`, name: siteConfig.brandName,
      publisher: { '@id': organizationId }, inLanguage: 'tr-TR' },
    page, ...extra,
  ] };
}
