import { provinces, districtCount, serviceMode, locationPath } from '../lib/locations';
import { services } from '../data/services';
import { sectors } from '../data/sectors';
import { siteConfig } from '../config/site';
export function GET() {
  return new Response(JSON.stringify({ name: siteConfig.brandName, url: siteConfig.domain, remoteCoverage: 'Türkiye', hours: siteConfig.businessHours, districtCount,
    onsitePolicy: 'Aksaray merkezli; Niğde, Nevşehir, Kayseri, Konya ve Ankara ziyaretleri açık adres, kapsam ve uygunluğa göre planlanır.',
    provinces: provinces.map(p => ({name:p.name,slug:p.slug,path:locationPath(p),mode:serviceMode(p),districts:p.districts.map(d => ({name:d.name,slug:d.slug,path:locationPath(p,d)}))})),
    services: services.map(s=>({name:s.name,slug:s.slug,path:`/hizmetler/${s.slug}`,remote:s.remote,onsite:s.onsite})),
    sectors: sectors.map(s=>({name:s.name,slug:s.slug,path:`/sektorler/${s.slug}`})),
    routeTemplates: ['/hizmet-bolgeleri/{il}/hizmetler/{hizmet}', '/hizmet-bolgeleri/{il}/{ilce}/hizmetler/{hizmet}', '/hizmet-bolgeleri/{il}/{ilce}/sektorler/{sektor}'],
    assessment: '/ucretsiz-bt-kontrolu', submission: 'Kullanıcı incelemesi, KVKK onayı ve güvenlik doğrulaması gerektirir.'
  }), {headers:{'Content-Type':'application/json; charset=utf-8'}});
}
