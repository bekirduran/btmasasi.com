# BT Masası ulusal hizmet mimarisi

14 Eylül 2026. Veri: 81 il, 973 ilçe, 6 hizmet, 6 sektör. Toplam 13.702 konum sayfası: 1.054 merkez sayfası + 6.324 hizmet sayfası + 6.324 sektör sayfası. Astro her derlemede veri üzerinden statik HTML üretir; tarayıcı JavaScript'i sayfa üretimi için gerekli değildir.

## URL yöntemi

- `/hizmet-bolgeleri/nigde`
- `/hizmet-bolgeleri/nigde/bor`
- `/hizmet-bolgeleri/nigde/hizmetler/network-sunucu`
- `/hizmet-bolgeleri/nigde/bor/hizmetler/network-sunucu`
- `/hizmet-bolgeleri/nigde/bor/sektorler/uretim-osb`

İlçe URL'si il slug'ını da içerir; farklı illerdeki Merkez gibi adlar çakışmaz. Hizmet ve sektör ayrı yol önekleri kullanır. İl sayfaları ilçelere, hizmet sayfaları il hizmetlerine ve ilçe hizmetlerine bağlanır. Başvuru formu il/ilçe/hizmet/sektörü doğrulanmış seçeneklerle gösterir ve gönderilen mesajda korur. Kullanıcı seçimleri değiştirebilir. KVKK ve Turnstile korunur; otomatik gönderim yoktur.

## İndeksleme politikası

Benzersiz URL, benzersiz yerel araştırma anlamına gelmez. Başlangıçta 81 il merkezi ile Aksaray, Niğde, Nevşehir, Kayseri, Konya ve Ankara'nın 72 hizmet/sektör sayfası indekslemeye açıktır: toplam 153 konum URL'si. Kalan 13.549 sayfa erişilebilir fakat `noindex, follow` içerir ve XML site haritasına alınmaz. Google'ın gerçekten indeksleyeceği sayfa sayısı garanti edilmez.

Yerel içerik doğrulandıkça `src/data/location-editorial.json` dosyasına URL anahtarıyla title, summary, en az üç ayrıntılı paragraph (`paragraphs`), reviewedAt (YYYY-MM-DD), evidenceUrls eklenir. Alan ve uzunluk kontrolü editör incelemesinin yerine geçmez. Kaynakların iddiaları desteklediği, başka konumların metninin kopyalanmadığı ve hizmet kapsamının gerçek olduğu kontrol edilmelidir. Ardından build ilgili sayfayı site haritasına otomatik alır. Bilinmeyen URL veya eksik editoryal kayıt derlemeyi durdurur.

Aksaray gerçek hizmet merkezidir. Diğer illerde şube/ofis adresi üretilmez. Yerinde ziyaret; açık adres, ulaşım, kapsam ve ekip uygunluğuna bağlıdır. 1–2 saat veya tüm il genelinde yerinde müdahale garantisi yoktur. Gerçek vaka mevcut olmadığından sektör sayfaları açıkça örnek çözüm senaryoları kullanır, ölçülmüş müşteri sonucu iddia etmez.

## Bakım ve doğrulama

`src/data/turkiye.json` il/ilçe verisi, `services.ts` hizmetler, `sectors.ts` sektörel içerikler, `src/lib/locations.ts` URL ve kapsam üreticisidir. Veri kaynağı/revizyonu `turkiye-source.json`, lisansı `docs/TURKIYE-DATA-LICENSE.txt` içindedir. Sabitlenmiş 2025 veri seti kullanılır; idari değişiklikler doğrulanmadan otomatik canlıya aktarılmaz. İlçe sayısı değiştiğinde doğrulama beklentileri ve görünen kapsam sayıları birlikte güncellenir.

- `npm run build`: üretim + tüm konum dosyaları, benzersiz başlıklar, canonical, JSON-LD, iç bağlantılar, robots/sitemap uyumu ve form açıklamalarının kontrolü.
- `npm run typecheck`: TypeScript kontrolü (ilk kez build/sync sonrası).
- `npm test`: mevcut API testleri ve konum yönlendirme/şema testleri.
- `npm run seo:inventory`: `docs/location-inventory.csv` URL ve indeksleme durumu envanteri.
- `npm run deploy`: doğrulanan derlemeden sonra mevcut Cloudflare Worker'a yayın.

`/hizmet-rehberi.json` ajanlar için makine okunur kapsam ve bağlantı kataloğudur. `llms.txt` rehberdir; SEO/GEO sıralama garantisi değildir. Organization, Person, WebSite, WebPage ve Service kimlikleri tutarlıdır; doğrulanmamış adres ve şirket unvanı eklenmez.

Yayın sonrası ana sayfa ve bir il/ilçe hizmet sayfasında HTTP 200, slash yönlendirmesi, canonical, JSON-LD ve form seçimleri doğrulanmalıdır. Yeni PageSpeed sonucu alınmadan performans puanı arttı denmemelidir. Search Console üzerinden site haritası ve zaman içindeki indeksleme/dönüşüm izlenmelidir.
