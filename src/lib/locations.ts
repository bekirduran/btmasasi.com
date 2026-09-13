import provinceData from '../data/turkiye.json';
import editorialData from '../data/location-editorial.json';
import { sectors, type Sector } from '../data/sectors';
import { services, type Service } from '../data/services';

export interface District { id: number; name: string; slug: string }
export interface Province { id: number; name: string; slug: string; districts: District[] }
export interface LocalEditorial { title: string; summary: string; paragraphs: string[]; reviewedAt: string; evidenceUrls: string[] }
export const provinces: Province[] = provinceData;
export const districtCount = provinces.reduce((sum, province) => sum + province.districts.length, 0);
export const regionalOnsiteSlugs = ['nigde', 'nevsehir', 'kayseri', 'konya', 'ankara'];
export const onsiteNames = ['Aksaray', 'Niğde', 'Nevşehir', 'Kayseri', 'Konya', 'Ankara'];
const regionalNotes: Record<string, string> = {
  aksaray: 'Aksaray merkezli hizmet modelimizde Merkez ve OSB işletmelerinin uzaktan destek talepleri ile yerinde keşif ihtiyacı birlikte değerlendirilir. Üretim alanı, depo veya ofisin tam konumu ziyaret kapsamını belirler; ziyaret öncesinde yetkili kişi ve bakım aralığı netleştirilir.',
  nigde: 'Niğde için öncelikle uzaktan arıza ayrıştırması yapılır. Merkez veya ilçedeki tam adres, gerekli ekipman ve işin fiziksel müdahale ihtiyacı belirlendikten sonra Aksaray çıkışlı planlı ziyaret teklifi hazırlanabilir.',
  nevsehir: 'Nevşehir işletmelerinde uzaktan çözülebilen hesap, bilgisayar ve bulut işleri ile yerinde ağ/cihaz incelemesi ayrı planlanır. İlçe ve tesisin çalışma saatleri öğrenilerek ziyaretin operasyonu en az etkileyeceği zaman üzerinde anlaşılır.',
  kayseri: 'Kayseri için sürekli uzaktan destek ve ihtiyaç halinde planlı yerinde çalışma birlikte değerlendirilebilir. Birden fazla bina veya lokasyon varsa keşif listesi önce çıkarılır; yol, ekipman ve bakım süresi teklif kapsamına ayrı yansıtılır.',
  konya: 'Konya ilindeki yerinde hizmet uygunluğu il adıyla değil, işletmenin bulunduğu ilçe ve açık konumla değerlendirilir. Ön incelemede uzaktan çözülebilecek işler tamamlanır; fiziksel çalışma gerekiyorsa ziyaret günü ve kapsamı birlikte belirlenir.',
  ankara: 'Ankara taleplerinde uzaktan destek ilk çalışma yöntemidir. Yerinde proje veya keşif ihtiyacında lokasyon, çalışma süresi ve erişim izinleri önceden değerlendirilir. Planlı ziyaret uygunluğu ayrıca teyit edilir; il geneli sabit ulaşım süresi taahhüt edilmez.',
};
export function serviceMode(province: Province) {
  return province.slug === 'aksaray' ? 'local' : regionalOnsiteSlugs.includes(province.slug) ? 'regional' : 'remote';
}
export function coverageText(province: Province, district?: District): string {
  const place = district ? `${district.name}, ${province.name}` : province.name;
  const mode = serviceMode(province);
  if (mode === 'local') return `${place} için uzaktan destek ve kapsamı önceden belirlenen yerinde hizmet sunuyoruz. Ziyaret zamanı, bakım aralığı ve müdahale koşulları ön değerlendirmede netleştirilir.`;
  if (mode === 'regional') return `${place} için uzaktan destek sunuyoruz. Aksaray çıkışlı planlı yerinde hizmet; tam adres, iş kapsamı, ulaşım ve ekip uygunluğuna göre ayrıca tekliflendirilir.`;
  return `${place} işletmelerine Türkiye geneli uzaktan destek modelimizle hizmet veriyoruz. Fiziksel cihaz, kablo veya internet hattı müdahalesi gerektiğinde işletmenizin yetkilisi ve mevcut yerel tedarikçisiyle koordinasyon planlanır.`;
}
export function locationPath(province: Province, district?: District, sector?: Sector) {
  return `/hizmet-bolgeleri/${province.slug}${district ? `/${district.slug}` : ''}${sector ? `/sektorler/${sector.slug}` : ''}`;
}
export function serviceLocationPath(province: Province, district: District | undefined, service: Service) {
  return `${locationPath(province, district)}/hizmetler/${service.slug}`;
}
export interface LocationPage {
  path: string; province: Province; district?: District; sector?: Sector; service?: Service;
  title: string; description: string; indexable: boolean; editorial?: LocalEditorial;
}
export const locationEditorial = editorialData as Record<string, LocalEditorial>;
for (const [path, entry] of Object.entries(locationEditorial)) {
  if (!entry.title?.trim() || !entry.summary?.trim() || entry.paragraphs?.length < 3 || entry.paragraphs.some(p => p.trim().length < 100) || !/^\d{4}-\d{2}-\d{2}$/.test(entry.reviewedAt) || !entry.evidenceUrls?.length || entry.evidenceUrls.some(url => !/^https:\/\//.test(url))) {
    throw new Error(`Yayıma uygun yerel içerik eksik: ${path}`);
  }
}
export function createLocationPage(province: Province, district?: District, sector?: Sector, service?: Service): LocationPage {
  const path = service ? serviceLocationPath(province, district, service) : locationPath(province, district, sector);
  const editorial = locationEditorial[path];
  const place = district ? `${district.name}, ${province.name}` : province.name;
  const indexable = !district && !sector && !service || Boolean(editorial) || (!district && Boolean(regionalNotes[province.slug]));
  return {
    path, province, district, sector, service, editorial, indexable,
    title: editorial?.title || `${place} ${service ? service.name : sector ? `${sector.name} İçin BT Desteği` : 'Kurumsal IT ve Uzaktan BT Desteği'}`,
    description: editorial?.summary || (service ? `${place} için ${service.name.toLocaleLowerCase('tr-TR')}. ${service.summary} ${serviceMode(province) === 'remote' ? 'Türkiye geneli uzaktan destek.' : 'Planlı yerinde hizmet uygunluğu ayrıca değerlendirilir.'}` : `${place} ${sector ? `${sector.name.toLocaleLowerCase('tr-TR')} işletmeleri` : 'işletmeleri'} için kullanıcı, bilgisayar, ağ ve bulut desteği. ${serviceMode(province) === 'remote' ? 'Uzaktan hizmet kapsamını birlikte belirleyelim.' : 'Uzaktan destek ve uygun lokasyonlarda planlı yerinde hizmet.'}`),
  };
}
export const locationPages: LocationPage[] = provinces.flatMap(province => [
  createLocationPage(province), ...sectors.map(sector => createLocationPage(province, undefined, sector)), ...services.map(service => createLocationPage(province, undefined, undefined, service)),
  ...province.districts.flatMap(district => [createLocationPage(province, district), ...sectors.map(sector => createLocationPage(province, district, sector)), ...services.map(service => createLocationPage(province, district, undefined, service))]),
]);
export const indexableLocationPaths = new Set(locationPages.filter(page => page.indexable).map(page => page.path));
export function localNote(province: Province) { return regionalNotes[province.slug]; }
export function leadUrl(province?: Province, district?: District, sector?: Sector, service?: Service) {
  const query = new URLSearchParams();
  if (province) query.set('il', province.slug);
  if (district) query.set('ilce', district.slug);
  if (sector) query.set('sektor', sector.slug);
  if (service) query.set('hizmet', service.slug);
  return `/ucretsiz-bt-kontrolu${query.size ? `?${query}` : ''}`;
}
