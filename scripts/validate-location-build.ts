import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { provinces, districtCount, locationPages, indexableLocationPaths, locationEditorial } from '../src/lib/locations';
import { services } from '../src/data/services';
import { sectors } from '../src/data/sectors';
assert.equal(provinces.length,81);
assert.equal(districtCount,973);
assert.equal(new Set(provinces.map(p=>p.id)).size,81);
assert.equal(new Set(provinces.flatMap(p=>p.districts.map(d=>d.id))).size,973);
const paths=new Set(locationPages.map(p=>p.path));
assert.equal(paths.size,(81+973)*(1+services.length+sectors.length));
assert.equal(paths.size,locationPages.length);
for(const path of Object.keys(locationEditorial)) assert(paths.has(path),`Unknown editorial path: ${path}`);
for(const p of provinces) {
  assert.equal(new Set(p.districts.map(d=>d.slug)).size,p.districts.length);
  for(const d of [undefined,...p.districts]) {
    const group=locationPages.filter(page=>page.province.id===p.id && page.district?.id===d?.id);
    assert.equal(group.length,1+services.length+sectors.length);
  }
}
if(process.argv.includes('--inventory')) {
  writeFileSync('docs/location-inventory.csv','path,type,indexable\n'+locationPages.map(p=>`${p.path},${p.service?'service':p.sector?'sector':'hub'},${p.indexable}`).join('\n'));
} else {
  const sitemap = readdirSync('dist').filter(f=>/^sitemap-\d+\.xml$/.test(f)).map(f=>readFileSync(join('dist',f),'utf8')).join('');
  const linked = new Set<string>();
  const titles = new Set<string>();
  for(const page of locationPages) {
    const file=join('dist',page.path,'index.html');
    assert(existsSync(file),`Missing ${page.path}`);
    const html=readFileSync(file,'utf8');
    assert.equal((html.match(/<h1\b/g)||[]).length,1,page.path);
    const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
    assert(title && !titles.has(title),`Duplicate/empty title ${page.path}`); titles.add(title);
    assert(html.includes(`href="https://btmasasi.com${page.path}"`),`Canonical ${page.path}`);
    assert.equal(html.includes('noindex'),!page.indexable,`Robots ${page.path}`);
    assert.equal(sitemap.includes(`<loc>https://btmasasi.com${page.path}</loc>`),page.indexable,`Sitemap ${page.path}`);
    for(const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(match[1]);
    assert(html.includes('https://btmasasi.com/#organization'),`Organization ${page.path}`);
    for(const match of html.matchAll(/<a\b[^>]*href="([^"#]+)"/g)) {
      if(match[1].startsWith('/')) linked.add(match[1].split(/[?#]/)[0]);
    }
  }
  for(const path of linked) assert(existsSync(join('dist',path)) || existsSync(join('dist',path,'index.html')) || existsSync(join('dist',path+'.html')),`Broken link ${path}`);
  const form=readFileSync('dist/ucretsiz-bt-kontrolu/index.html','utf8');
  assert(form.includes('toolname="prepare_bt_assessment_request"'));
  assert(form.includes('id="lead-service"') && form.includes('id="lead-district"'));
  assert(!form.includes('toolautosubmit'));
}
console.log(JSON.stringify({provinces:provinces.length,districts:districtCount,locationPages:paths.size,indexable:indexableLocationPaths.size,noindex:paths.size-indexableLocationPaths.size,services:services.length,sectors:sectors.length}));
