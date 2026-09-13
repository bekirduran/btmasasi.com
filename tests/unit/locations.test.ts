import { describe,it,expect } from 'vitest';
import { provinces, locationPath, serviceLocationPath, leadUrl, serviceMode, createLocationPage } from '../../src/lib/locations';
import { services } from '../../src/data/services';
import { canonicalUrl } from '../../src/lib/seo/urls';
import { createPageGraph, organizationId } from '../../src/lib/seo/schema';
describe('national service routing',()=>{
 it('keeps same district names in separate provinces',()=>{
  const withMerkez=provinces.filter(p=>p.districts.some(d=>d.slug==='merkez'));
  expect(withMerkez.length).toBeGreaterThan(1);
  const urls=withMerkez.map(p=>locationPath(p,p.districts.find(d=>d.slug==='merkez')));
  expect(new Set(urls).size).toBe(urls.length);
 });
 it('preserves service and location in the enquiry',()=>{
  const p=provinces.find(p=>p.slug==='nigde')!; const d=p.districts.find(d=>d.slug==='bor')!;
  const s=services.find(s=>s.slug==='network-sunucu')!;
  expect(serviceLocationPath(p,d,s)).toBe('/hizmet-bolgeleri/nigde/bor/hizmetler/network-sunucu');
  expect(leadUrl(p,d,undefined,s)).toContain('hizmet=network-sunucu');
  expect(leadUrl(p,d,undefined,s)).toContain('ilce=bor');
  expect(createLocationPage(p,d,undefined,s).indexable).toBe(false);
  expect(serviceMode(p)).toBe('regional');
 });
 it('normalizes canonical URLs and links service to the real business',()=>{
  expect(canonicalUrl('/hizmet-bolgeleri/nigde/?utm_source=x')).toBe('https://btmasasi.com/hizmet-bolgeleri/nigde');
  const graph=createPageGraph('/test','Test',{'@type':'Service',provider:{name:'old'}})['@graph'];
  expect(graph.find(n=>n['@type']==='Service')?.provider).toEqual({'@id':organizationId});
  expect(graph.find(n=>n['@type']==='Organization')).not.toHaveProperty('address');
 });
});
