# BT Masası — Antigravity Web Sitesi Master Promptu

> Bu dosyanın tamamını Google Antigravity agent aracına ver. Agent bu belgeyi projenin tek ana ürün gereksinimi ve uygulama talimatı olarak kabul etsin.

---

## 1. Rolün ve temel görevin

Sen; kıdemli bir ürün tasarımcısı, içerik stratejisti, teknik SEO uzmanı, erişilebilirlik uzmanı ve Cloudflare üzerinde üretim tecrübesi olan senior full-stack geliştiricisin.

`btmasasi.com` alan adı için sıfırdan, production kalitesinde, sade, güven veren, hızlı ve satış odaklı bir kurumsal web sitesi oluştur.

İşletmenin görünen marka adı:

**BT Masası**

Marka açıklaması:

**Bilgi Teknolojileri ve Danışmanlık**

Ana marka vaadi:

**İşletmenizin BT departmanı.**

İş modeli; Aksaray'daki KOBİ'lere yerinde, Türkiye genelindeki işletmelere uzaktan yönetilen BT hizmeti sunmaktır. Firma klasik bir bilgisayar tamircisi gibi değil; işletmelerin bilgisayarlarını, kullanıcılarını, ağlarını, sunucularını, bulut servislerini, yedekleme ve güvenlik süreçlerini düzenli şekilde yöneten dış kaynak BT departmanı olarak konumlandırılacaktır.

Bu projeyi yalnızca görsel bir landing page olarak değil; çalışan iletişim ve ön değerlendirme formları, doğru içerik modeli, teknik SEO, yapılandırılmış veri, güvenlik kontrolleri, testler ve Cloudflare deployment belgeleriyle birlikte tamamla.

### Çalışma biçimin

1. Önce mevcut klasörü ve dosyaları incele.
2. Var olan ve kullanışlı kullanıcı dosyalarını silme veya üzerine düşünmeden yazma.
3. Proje boşsa aşağıdaki mimariyle sıfırdan kur.
4. Güncel ve birbiriyle uyumlu kararlı paket sürümlerini kullan. Tahmin ederek eski sürüm sabitleme.
5. Uygulamayı aşamalar halinde geliştir; her ana aşamadan sonra lint, type-check, test ve build çalıştır.
6. Hata alırsan nedeni bulup düzelt; hatalı veya eksik build teslim etme.
7. Sonunda bütün kabul kriterlerini tek tek doğrula ve kısa bir sonuç raporu ver.
8. Kullanıcıdan telefon, şirket unvanı veya açık adres gibi henüz verilmemiş bilgiler gerekiyorsa projeyi durdurma. Bunları tek merkezi yapılandırma dosyasında açık `TODO` değerleri olarak tut ve production kontrolünün eksik değerleri yakalamasını sağla.

---

## 2. İş hedefleri

Web sitesinin öncelikleri sırasıyla şunlardır:

1. İşletme sahibinde güven oluşturmak.
2. BT Masası'nın bilgisayar tamiri yapan bir dükkân değil, sürekli hizmet veren dış kaynak BT departmanı olduğunu anlatmak.
3. Aksaray'daki işletmelerden ön değerlendirme ve teklif talebi toplamak.
4. İşletme sahibinin görüşmeden sonra kartvizitteki QR kod üzerinden siteyi inceleyerek yeniden iletişime geçmesini sağlamak.
5. “Aksaray kurumsal IT destek”, “Aksaray bilgi işlem hizmetleri”, “kurumsal bakım anlaşması”, “yönetilen BT hizmetleri” ve ilgili uzun kuyruklu sorgular için sağlam bir içerik ve teknik SEO temeli kurmak.
6. Arama motorlarının ve yapay zekâ sistemlerinin işletmenin kimliğini, sunduğu hizmetleri, çalışma bölgesini ve iletişim kanallarını çelişkisiz biçimde anlayabilmesini sağlamak.
7. İleride müşteri portalı, admin paneli, R2 medya yönetimi ve daha gelişmiş satış otomasyonu eklenebilecek temiz bir kod tabanı oluşturmak.

### Ana dönüşümler

- “Ücretsiz BT Ön Değerlendirmesi” formunun tamamlanması
- Telefon araması
- WhatsApp görüşmesi
- Kurumsal e-posta gönderimi
- Hizmet/teklif sayfasına geçiş

Telefon ve WhatsApp numarası doğrulanmadan tıklanabilir sahte bağlantı oluşturma. Eksik iletişim kanallarını merkezi konfigürasyonda `null` tut ve arayüzde göstermeme yaklaşımını kullan.

---

## 3. Hedef kitle

### Birincil hedef kitle

- Aksaray Merkez ve Aksaray Organize Sanayi Bölgesi'ndeki 8-60 kullanıcılı işletmeler
- Tam zamanlı BT personeli olmayan KOBİ'ler
- Mevcut teknik servisten yalnızca arıza çıktığında destek alan firmalar
- Birden fazla bilgisayarı, yazıcısı, ağı, e-posta hesabı veya bulut uygulaması olan işletmeler
- İnternet, e-posta, dosya erişimi veya ticari yazılım kesintisinde para ve zaman kaybeden şirketler

### Öncelikli sektörler

- Üretim ve sanayi işletmeleri
- Muhasebe ve mali müşavirlik büroları
- Toptan satış ve distribütör firmaları
- Lojistik ve nakliye firmaları
- Özel eğitim kurumları
- Otel ve konaklama işletmeleri
- Mühendislik, hukuk ve diğer profesyonel hizmet ofisleri
- Çok şubeli yerel işletmeler

### İkincil hedef kitle

- Türkiye genelinde uzaktan BT desteği alabilecek küçük ve orta ölçekli firmalar
- Kendi BT personeli bulunan fakat ikinci seviye sistem, bulut veya yazılım desteğine ihtiyaç duyan şirketler

### Hedeflenmeyecek algı

Site, ev kullanıcılarına format atan veya yalnızca parça satan bir bilgisayar dükkânı gibi görünmemelidir. “Format atma”, “ucuz bilgisayar tamiri”, “oyuncu bilgisayarı”, “telefon tamiri” gibi tüketici odaklı hizmetleri ön plana çıkarma.

---

## 4. İlk sürüm kapsamı

### Bu sürümde bulunacaklar

- Çok sayfalı kurumsal web sitesi
- Hizmet sayfaları
- Aksaray'a özel, özgün ve kapsamlı yerel hizmet sayfası
- Sektörler sayfası
- Paketler/fiyatlandırma yaklaşımı sayfası
- Hakkımızda ve iletişim sayfaları
- Ücretsiz BT ön değerlendirme formu
- Normal iletişim formu
- Blog/rehber altyapısı ve başlangıç yazıları
- D1 üzerinde lead kaydı
- Turnstile koruması ve sunucu tarafı doğrulama
- İsteğe bağlı e-posta bildirimi
- Teknik SEO, sitemap, robots.txt, canonical URL'ler
- JSON-LD yapılandırılmış verileri
- `llms.txt`
- Open Graph görseli ve favicon seti
- Cloudflare Worker deployment yapılandırması
- Otomatik testler ve kurulum dokümantasyonu

### Bu sürümde bulunmayacaklar

- Admin paneli
- Müşteri giriş ekranı veya müşteri portalı
- Online ödeme
- Canlı destek botu
- Otomatik teklif hesaplama motoru
- R2 tabanlı medya kütüphanesi
- CRM
- E-posta pazarlama otomasyonu
- Sahte müşteri yorumları veya referans logoları
- Gereksiz yapay zekâ sohbet ekranı

Blog içerikleri ilk aşamada Git tarafından sürümlenen Markdown/MDX dosyalarında yönetilsin. Admin paneli gerçek ihtiyaç doğrulandıktan sonra ikinci faz olarak eklenebilir.

---

## 5. Teknik mimari

### Tercih edilen stack

- Güncel kararlı **Astro**
- **TypeScript**, strict mode
- **Tailwind CSS** veya eşdeğer şekilde küçük ve sürdürülebilir bir CSS mimarisi
- İçerik için Astro Content Collections ve Markdown/MDX
- Cloudflare **Workers + Static Assets**
- API yönlendirmeleri için küçük, bağımsız Worker kodu; gerekirse Hono kullan, fakat gereksiz framework ekleme
- Lead saklama için **Cloudflare D1**
- Spam koruması için **Cloudflare Turnstile**
- Şema doğrulaması için hafif bir çözüm; Zod kullanılabilir
- Unit test için Vitest
- Kritik akışlar için Playwright
- Erişilebilirlik testi için `@axe-core/playwright` veya eşdeğeri

### Neden SSR değil?

Pazarlama ve içerik sayfalarını build zamanında statik üret. İlk sürümde kullanıcıya özel içerik veya sürekli değişen bir panel olmadığı için bütün siteyi SSR yapmak gereksizdir. Dinamik yalnızca `/api/leads` gibi API uç noktalarında çalışsın.

### Cloudflare deployment modeli

Tek deployment içinde:

- Astro'nun ürettiği `dist/` statik dosyalarını Cloudflare Workers Static Assets üzerinden sun.
- Worker, `/api/*` yollarını karşılasın.
- Diğer bütün istekleri `ASSETS` binding üzerinden statik çıktıya yönlendirsin.
- Güvenlik başlıklarını hem statik hem API yanıtlarına uygula.

`wrangler.jsonc` veya güncel Cloudflare tarafından desteklenen eşdeğer yapılandırmayı kullan. Örnek kavramsal binding'ler:

```text
ASSETS              -> static assets binding
LEADS_DB             -> D1 database binding
TURNSTILE_SECRET_KEY -> secret
RESEND_API_KEY       -> optional secret
CONTACT_TO_EMAIL     -> environment variable
CONTACT_FROM_EMAIL   -> environment variable
SITE_URL             -> https://btmasasi.com
```

Node.js'e özel API'lere gereksiz şekilde bağımlı olma. Cloudflare Workers runtime ile uyumlu Web API'lerini tercih et.

### Önerilen dizin yapısı

```text
/
├── public/
│   ├── brand/
│   │   ├── logo.svg
│   │   ├── logo-mark.svg
│   │   └── README.md
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-default.png
│   └── robots.txt
├── migrations/
│   └── 0001_create_leads.sql
├── worker/
│   ├── index.ts
│   ├── env.ts
│   ├── routes/
│   │   └── leads.ts
│   └── lib/
│       ├── security-headers.ts
│       ├── turnstile.ts
│       ├── validation.ts
│       └── notification.ts
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── seo/
│   │   └── sections/
│   ├── config/
│   │   ├── site.ts
│   │   └── navigation.ts
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── types/
├── tests/
│   ├── unit/
│   └── e2e/
├── astro.config.mjs
├── wrangler.jsonc
├── tsconfig.json
├── package.json
├── README.md
├── DEPLOYMENT.md
├── CONTENT_GUIDE.md
├── LEGAL_REVIEW_REQUIRED.md
└── .env.example
```

Bu yapı birebir zorunlu değildir; aynı sorumluluk ayrımını koruyan daha güncel bir yapı tercih edilebilir.

---

## 6. Merkezi işletme konfigürasyonu

Bütün NAP ve işletme bilgilerini tek bir `src/config/site.ts` dosyasında tut. Bileşenlerin içinde iletişim bilgisi hard-code etme.

Örnek veri modeli:

```ts
export const siteConfig = {
  brandName: "BT Masası",
  descriptor: "Bilgi Teknolojileri ve Danışmanlık",
  legalCompanyName: null,
  founderName: "Bekir Duran",
  founderTitle: "Bilgisayar Mühendisi",
  domain: "https://btmasasi.com",
  email: "iletisim@btmasasi.com",
  phoneDisplay: null,
  phoneE164: null,
  whatsappE164: null,
  city: "Aksaray",
  country: "Türkiye",
  address: null,
  primaryServiceArea: ["Aksaray Merkez", "Aksaray Organize Sanayi Bölgesi"],
  remoteServiceArea: "Türkiye geneli",
  businessHours: "Hafta içi, mesai saatlerinde",
  socialLinks: {},
  googleBusinessProfileUrl: null,
  showPrices: false,
} as const;
```

Kurallar:

- Şirket henüz resmen limited şirket olarak kurulmadıysa sitede “Limited Şirketi” yazma.
- Açık adres verilmediyse adres uydurma ve harita embed etme.
- Telefon verilmediyse sahte numara gösterme.
- `iletisim@btmasasi.com` hesabı aktif edilmeden production iletişim adresi olarak göstermeye karşı build kontrolü ekle veya README'de zorunlu yayın kontrolü olarak belirt.
- Sosyal medya hesabı yoksa ikon veya boş bağlantı gösterme.
- Google Business Profile bağlantısı yoksa ekleme.
- Production öncesi zorunlu alanlar için `npm run validate:production` komutu oluştur. Eksikler anlaşılır hata mesajıyla raporlansın.

---

## 7. Görsel kimlik ve tasarım sistemi

### Genel tasarım yönü

Kurumsal, sade, modern ve güven veren bir görünüm oluştur. Arayüz; banka kadar katı, startup kadar oyuncak veya bilgisayar tamircisi kadar kalabalık görünmemeli. BT yöneticiliği, düzen, takip ve süreklilik hissi vermeli.

### Renkler

```text
Navy 900:   #102A43  — ana metin ve güçlü kurumsal alanlar
Blue 600:   #2563EB  — ana CTA ve bağlantılar
Teal 500:   #14B8A6  — yalnızca küçük vurgu ve başarılı durumlar
Slate 700:  #334155
Slate 500:  #64748B
Slate 200:  #E2E8F0
Slate 100:  #F1F5F9
White:      #FFFFFF
```

Renk kontrastları WCAG AA düzeyini karşılasın. Açık mavi zemin üzerinde açık renk metin kullanma.

### Tipografi

- Birincil font: Manrope, Inter veya Plus Jakarta Sans
- Font dosyalarını mümkünse projede self-host et; zorunlu olmayan üçüncü taraf font isteği oluşturma.
- Gövde metni mobilde en az 16 px.
- Uzun paragrafları yaklaşık 65-75 karakter satır uzunluğunda tut.
- Başlıklarda aşırı dar, fütüristik veya gaming font kullanma.

### Logo

- Kullanıcı daha sonra gerçek logoyu `public/brand/logo.svg` konumuna ekleyebilsin.
- Logo dosyası yoksa geçici olarak yalnızca düzgün dizilmiş “BT Masası” kelime markasını göster.
- Eksik logo yerine yapay zekâyla rastgele ikon üretme.
- Header'da logo yüksekliği masaüstünde yaklaşık 32-40 px, mobilde 28-34 px olsun.
- Favicon için ayrı, sade `logo-mark.svg` kullanılabilsin.

### Bileşen stili

- Büyük beyaz alanlar
- İnce sınırlar
- Hafif ve sınırlı gölgeler
- 12-16 px genel köşe yarıçapı
- Tutarlı 8 px spacing sistemi
- Lucide gibi sade, tek tip stroke ikonlar
- Her kartta farklı renk kullanma
- Hero bölümünde ağır video, slider veya otomatik carousel kullanma
- Animasyonlar 150-250 ms ile sınırlı olsun ve `prefers-reduced-motion` durumunda kapansın

### Görseller

İlk sürüm, düşük kaliteli stok fotoğrafa bağımlı olmasın. Ağ düğümleri, cihaz envanteri, güvenli yedekleme ve destek akışını anlatan sade SVG illüstrasyonlar kullanılabilir. Aşağıdaki klişelerden kaçın:

- Kapüşonlu hacker
- Rastgele sunucu odası fotoğrafı
- El sıkışan takım elbiseli insanlar
- Aşırı neon devre çizgileri
- Robot veya yapay zekâ beyni
- Her bölümde kalkan ve kilit ikonu

---

## 8. Navigasyon ve genel yerleşim

### Ana menü

```text
Hizmetler
Kimler İçin
Nasıl Çalışır?
Paketler
Rehber
Hakkımızda
[Teklif Al]
```

“Hizmetler” masaüstünde erişilebilir dropdown olabilir:

- Yönetilen BT Hizmetleri
- Kurumsal IT Destek
- Network ve Sunucu
- Siber Güvenlik ve Yedekleme
- Microsoft 365 ve Bulut

Mobil menü klavye ve ekran okuyucu ile kullanılabilir olmalı; açıldığında focus yönetimi doğru yapılmalı.

### Sabit CTA

Masaüstü menüde “Teklif Al” butonu bulunsun. Mobilde alt ekranı sürekli kaplayan agresif bar kullanma. Gerekirse sayfa sonunda ve ana bölümlerde CTA tekrarı yap.

### Footer

Footer dört bölümden oluşsun:

1. Marka ve kısa tanım
2. Hizmet bağlantıları
3. Kurumsal ve yasal bağlantılar
4. İletişim ve hizmet bölgesi

Footer metni:

> BT Masası, işletmelerin bilgisayar, kullanıcı, ağ, bulut, yedekleme ve güvenlik süreçlerini düzenli olarak yönetmesine yardımcı olan dış kaynak bilgi teknolojileri hizmetidir.

Alt satır:

> Aksaray'da yerinde, Türkiye genelinde uzaktan hizmet.

Yıl otomatik üretilebilir. Resmî şirket unvanı yalnızca konfigürasyonda doğrulanmışsa gösterilsin.

---

## 9. URL ve sayfa haritası

Aşağıdaki rotaları oluştur:

| URL | H1 | Ana amaç |
|---|---|---|
| `/` | İşletmenizin BT departmanı. | Marka ve dönüşüm |
| `/hizmetler` | İşletmeniz için yönetilen BT hizmetleri | Hizmet özeti |
| `/hizmetler/yonetilen-bt-hizmetleri` | Yönetilen BT hizmetleri | Ana ürün |
| `/hizmetler/kurumsal-it-destek` | Kurumsal IT destek | Kullanıcı desteği |
| `/hizmetler/network-sunucu` | Network ve sunucu yönetimi | Altyapı hizmeti |
| `/hizmetler/siber-guvenlik-yedekleme` | Siber güvenlik ve yedekleme | Güvenlik hizmeti |
| `/hizmetler/microsoft-365-bulut` | Microsoft 365 ve bulut yönetimi | Bulut hizmeti |
| `/aksaray-kurumsal-it-destek` | Aksaray kurumsal IT destek ve dış kaynak bilgi işlem | Yerel yüksek niyetli trafik |
| `/kimler-icin` | Hangi işletmeler için uygundur? | Hedef sektörler |
| `/nasil-calisir` | BT Masası nasıl çalışır? | Süreç ve güven |
| `/paketler` | İhtiyacınıza uygun BT hizmet modeli | Paketler |
| `/ucretsiz-bt-kontrolu` | İşletmenizin BT risklerini birlikte inceleyelim | Lead formu |
| `/hakkimizda` | BT Masası hakkında | Kurucu ve yaklaşım |
| `/rehber` | İşletmeler için BT rehberi | İçerik merkezi |
| `/iletisim` | BT Masası ile iletişim | İletişim |
| `/kvkk-aydinlatma-metni` | Kişisel verilerin işlenmesine ilişkin aydınlatma metni | Yasal |
| `/gizlilik-politikasi` | Gizlilik politikası | Yasal |
| `/cerez-politikasi` | Çerez politikası | Yasal |
| `/kullanim-kosullari` | Kullanım koşulları | Yasal |
| `/404` | Aradığınız sayfa bulunamadı | Hata sayfası |

Gereksiz etiket ve kategori arşivleri oluşturma. Boş veya ince içerikli ilçe sayfaları üretme.

---

## 10. Sayfa içerikleri

Bu bölümdeki metinleri temel al. Dilbilgisini düzeltebilirsin fakat anlamı, dürüstlük sınırlarını ve marka konumlandırmasını değiştirme. “En iyi”, “lider”, “kusursuz”, “kesintisiz garanti”, “%100 güvenli” gibi doğrulanamayacak ifadeler ekleme.

### 10.1 Ana sayfa `/`

#### Hero üst etiketi

> Aksaray'da yerinde · Türkiye genelinde uzaktan BT desteği

#### H1

> İşletmenizin BT departmanı.

#### Hero açıklaması

> Bilgisayarlarınızı, kullanıcılarınızı, ağ altyapınızı, bulut servislerinizi, yedekleme ve güvenlik süreçlerinizi tek noktadan yönetiyoruz. Tam zamanlı bir BT personeli istihdam etmeden, planlı ve ölçülebilir teknik destek alın.

#### CTA'lar

- Birincil: **Ücretsiz BT Ön Değerlendirmesi** → `/ucretsiz-bt-kontrolu`
- İkincil: **Hizmetleri İncele** → `/hizmetler`

#### Güven satırı

- Aylık öngörülebilir hizmet modeli
- Uzaktan ve yerinde destek
- Kayıtlı, raporlanabilir süreç

Bu ifadeleri sertifika rozeti gibi göstermeden sade üçlü bir bilgi satırı halinde sun.

#### Problem bölümü

Başlık:

> BT sorunları yalnızca bilgisayar bozulduğunda başlamaz.

Giriş:

> Güncellenmeyen cihazlar, kontrol edilmeyen yedekler, açık kalan kullanıcı hesapları ve belgesiz ağ yapıları çoğu zaman arıza oluşana kadar fark edilmez. BT Masası, günlük desteğin yanında bu risklerin düzenli biçimde takip edilmesini sağlar.

Problem kartları:

1. **Sorun çıkınca müdahale**  
   Sistemler yalnızca bir çalışan işini yapamaz hale geldiğinde kontrol ediliyorsa kesinti süresi uzar.

2. **Test edilmemiş yedekler**  
   “Yedek alınıyor” bilgisi tek başına yeterli değildir. Geri yükleme yapılabildiği düzenli olarak doğrulanmalıdır.

3. **Dağınık kullanıcı erişimleri**  
   İşe giriş, görev değişikliği ve işten ayrılma süreçleri yönetilmezse gereksiz erişimler açık kalabilir.

4. **Belirsiz cihaz ve lisans envanteri**  
   Hangi cihazın, lisansın ve garanti süresinin kime ait olduğu bilinmediğinde satın alma ve yenileme kararları zorlaşır.

5. **Çok sayıda farklı muhatap**  
   İnternet, yazıcı, e-posta, ağ ve ticari yazılım sorunları farklı firmalar arasında kalabilir.

#### Hizmet özeti

Başlık:

> Günlük destekten altyapı yönetimine kadar tek muhatap

Kartlar:

1. **Yönetilen BT Hizmetleri**  
   Cihaz, kullanıcı, lisans, güncelleme ve destek süreçlerinin düzenli yönetimi.

2. **Kurumsal IT Destek**  
   Çalışanların bilgisayar, e-posta, yazıcı ve uygulama sorunlarına uzaktan veya yerinde müdahale.

3. **Network ve Sunucu**  
   Kablolu/kablosuz ağ, firewall, NAS ve sunucu altyapısının kurulumu, belgelenmesi ve takibi.

4. **Siber Güvenlik**  
   Çok faktörlü doğrulama, uç nokta güvenliği, erişim kontrolleri ve temel güvenlik iyileştirmeleri.

5. **Yedekleme ve İş Sürekliliği**  
   Yedekleme işlerinin izlenmesi, hata takibi ve planlı geri yükleme kontrolleri.

6. **Microsoft 365 ve Bulut**  
   Kullanıcı, lisans, e-posta, dosya paylaşımı ve temel bulut yapılandırmalarının yönetimi.

Her kart ilgili hizmet sayfasına bağlansın.

#### Teknik servis karşılaştırması

Başlık:

> Arıza servisi değil, yönetilen BT yaklaşımı

| Konu | Arıza çıktığında servis | BT Masası yaklaşımı |
|---|---|---|
| Çalışma şekli | Sorun oluştuktan sonra | Düzenli takip ve önleyici bakım |
| Müdahale | Müsaitliğe bağlı olabilir | Sözleşmede tanımlanan öncelik ve yanıt süreleri |
| Sistem bilgisi | Her işlemde yeniden incelenebilir | Envanter ve teknik dokümantasyon tutulur |
| Güncellemeler | Genellikle talep üzerine | Planlı şekilde takip edilir |
| Yedekleme | Yedek alınması varsayılabilir | Sonuçlar ve geri yükleme kabiliyeti kontrol edilir |
| Raporlama | Çoğu zaman yoktur | Yapılan işler ve riskler düzenli raporlanır |

Tablo mobilde yatay taşmamalı; kart yapısına dönüşebilir.

#### Nasıl çalışır özeti

Başlık:

> Beş adımda kontrol altına alınmış BT operasyonu

1. **Tanışma ve ihtiyaç analizi** — Kullanıcı, cihaz, lokasyon ve kritik iş süreçlerini öğreniriz.
2. **Envanter ve risk tespiti** — Mevcut cihaz, ağ, hesap ve yedekleme yapısını inceleriz.
3. **Hizmet planı ve kapsam** — Sorumlulukları, istisnaları ve müdahale önceliklerini yazılı hale getiririz.
4. **Geçiş ve düzenli yönetim** — İzleme, dokümantasyon, güncelleme ve destek süreçlerini devreye alırız.
5. **Raporlama ve iyileştirme** — Yapılan işlemleri, tekrar eden sorunları ve sonraki önerileri paylaşırız.

CTA: **Nasıl çalıştığımızı görün** → `/nasil-calisir`

#### Kimler için bölümü

Başlık:

> Özellikle BT personeli bulunmayan büyüyen işletmeler için

Metin:

> BT Masası; teknik sorunların çalışanların üzerine kaldığı, sistem bilgisinin tek kişide toplandığı veya farklı tedarikçiler arasında sorumluluğun belirsiz olduğu işletmeler için tasarlanmıştır.

Sektör kartları:

- Üretim ve OSB işletmeleri
- Muhasebe ve mali müşavirlik
- Lojistik ve toptan satış
- Özel eğitim kurumları
- Otel ve konaklama
- Profesyonel hizmet ofisleri

#### Ücretsiz kontrol bölümü

Başlık:

> BT altyapınızın mevcut durumunu birlikte değerlendirelim.

Metin:

> Kısa ön görüşmede kullanıcı ve cihaz yapınızı, en sık yaşadığınız sorunları, yedekleme durumunuzu ve öncelikli risklerinizi ele alalım. Görüşme sonunda hangi hizmet modelinin uygun olduğunu açıkça paylaşalım.

CTA: **Ücretsiz ön değerlendirme isteyin**

“Ücretsiz sızma testi”, “tam güvenlik denetimi” veya kapsamı aşan başka bir vaat kullanma.

#### Ana sayfa SSS

1. **BT Masası tam olarak ne yapar?**  
   BT Masası, işletmelerin kullanıcı desteği, bilgisayarları, ağı, e-posta ve bulut hesapları, yedekleme ve temel güvenlik süreçleri için dış kaynak BT hizmeti sunar. Kesin kapsam, işletmenin altyapısı incelendikten sonra sözleşmede belirlenir.

2. **Tam zamanlı bilgi işlem personeli yerine geçebilir mi?**  
   Küçük ve orta ölçekli birçok işletmede günlük kullanıcı desteği ve temel sistem yönetimini üstlenebilir. Büyük, karmaşık veya 7/24 çalışan yapılarda ise mevcut BT ekibini destekleyen ortak çalışma modeli daha doğru olabilir.

3. **Destek yalnızca uzaktan mı veriliyor?**  
   Hayır. Aksaray'daki sözleşmeli müşterilere ihtiyaç ve hizmet kapsamına göre yerinde destek sağlanabilir. Türkiye genelindeki müşterilere uzaktan hizmet verilebilir.

4. **Donanım ve lisanslar aylık hizmete dahil mi?**  
   Aksi yazılı olarak belirtilmedikçe donanım, yedek parça, lisans ve üçüncü taraf hizmet bedelleri aylık hizmetten ayrıdır.

5. **7/24 destek veriliyor mu?**  
   İlk hizmet modeli mesai saatleri içinde çalışır. Mesai dışı veya kritik sistem desteği, kaynak ve kapsam uygun olduğunda ayrıca sözleşmelendirilir. Sitede genel 7/24 vaadi verme.

6. **Mevcut bilgisayarcımız veya yazılım firmamızla çalışmaya devam edebilir miyiz?**  
   Evet. Gerektiğinde mevcut donanım, internet, yazıcı, ERP ve diğer yazılım tedarikçileriyle koordineli çalışılabilir.

#### Son CTA

Başlık:

> BT sorunlarını kişilere değil, tanımlı bir sürece bağlayın.

Metin:

> İşletmenizin kullanıcı, cihaz ve altyapı yapısını öğrenelim; ihtiyacınıza uygun hizmet kapsamını birlikte belirleyelim.

Buton: **Ön değerlendirme talebi oluştur**

---

### 10.2 Hizmetler `/hizmetler`

Hero:

> **İşletmeniz için yönetilen BT hizmetleri**  
> Günlük kullanıcı desteğinden ağ, sunucu, bulut, yedekleme ve güvenlik süreçlerine kadar ihtiyaç duyduğunuz BT hizmetlerini tek bir operasyon planında birleştiriyoruz.

Hizmet sayfalarındaki kartları burada daha ayrıntılı göster. Ayrıca aşağıdaki bölümü ekle:

Başlık:

> Her şeyi pakete eklemek yerine doğru kapsamı belirliyoruz.

Metin:

> Beş kullanıcılı bir ofis ile üretim yapan çok lokasyonlu bir işletmenin destek ihtiyacı aynı değildir. Teklif öncesinde kullanıcı, cihaz, sunucu, lokasyon, kritik uygulama ve beklenen müdahale seviyesini değerlendirir; kapsamı ve hariç tutulan işleri açıkça yazarız.

“Hizmete dahil”, “ihtiyaca göre eklenebilir” ve “ayrı proje olarak fiyatlandırılır” şeklinde üçlü açıklama alanı oluştur.

Genel olarak hizmete dahil olabilecekler:

- Uzaktan kullanıcı desteği
- Cihaz ve lisans envanteri
- Güncelleme ve temel sağlık kontrolü
- Kullanıcı hesabı açma/kapatma süreçleri
- Yedekleme işlerinin izlenmesi
- Dokümantasyon ve periyodik raporlama

İhtiyaca göre eklenebilecekler:

- Planlı yerinde ziyaret
- Sunucu ve firewall yönetimi
- Microsoft 365 yönetimi
- Uç nokta güvenliği lisansları
- Çok lokasyon desteği
- Mesai dışı kritik olay desteği

Ayrı proje olarak fiyatlandırılacaklar:

- Yeni ofis veya sistem odası kurulumu
- Büyük network yenilemesi
- Donanım ve lisans satın alımı
- Veri kurtarma
- Özel yazılım geliştirme
- Kablolama ve kamera projeleri

---

### 10.3 Yönetilen BT Hizmetleri

URL: `/hizmetler/yonetilen-bt-hizmetleri`

Hero:

> **Yönetilen BT hizmetleri**  
> BT altyapınızı yalnızca arıza oluştuğunda değil, düzenli olarak izlenen, belgelenen ve raporlanan bir iş süreci olarak yönetin.

Problem metni:

> Bir işletmenin BT bilgisi tek bir çalışanın hafızasında veya farklı servislerin mesaj geçmişinde kaldığında, her yeni sorun yeniden keşif gerektirir. Yönetilen BT hizmeti; envanter, destek, güncelleme, hesap, yedekleme ve tedarikçi süreçlerini tek çatı altında toplar.

Kapsam:

- Bilgisayar ve kullanıcı envanteri
- İşletim sistemi ve temel uygulama güncellemelerinin takibi
- Uzak destek ve ticket yönetimi
- Kullanıcı işe giriş/çıkış kontrol listeleri
- Lisans ve garanti tarihlerinin kaydı
- Ağ ve kritik cihaz dokümantasyonu
- Yedekleme sonuçlarının izlenmesi
- Tekrar eden sorunların analizi
- Aylık hizmet ve risk raporu
- Yıllık teknoloji yenileme önerileri

Teslim edilen çıktılar:

- Güncel varlık envanteri
- Yetkili kullanıcı ve yönetici hesap listesi
- Basit ağ diyagramı
- Açık riskler ve önerilen aksiyonlar
- Aylık ticket ve sistem durum raporu

Hariç tutma metni:

> Donanım, lisans, yedek parça, üçüncü taraf abonelikler ve kapsamlı kurulum projeleri aksi yazılı olarak belirtilmedikçe hizmet bedeline dahil değildir.

CTA:

> İşletmeniz için yönetilen BT kapsamını belirleyelim.

---

### 10.4 Kurumsal IT Destek

URL: `/hizmetler/kurumsal-it-destek`

Hero:

> **Kurumsal IT destek**  
> Çalışanların bilgisayar, e-posta, yazıcı, bağlantı ve uygulama sorunlarını kayıt altına alınan, önceliklendirilen bir destek süreciyle yönetin.

Kapsam:

- Windows ve temel masaüstü uygulamaları desteği
- E-posta ve kullanıcı hesabı sorunları
- Yazıcı ve ağ bağlantısı desteği
- Uzak bağlantıyla arıza tespiti
- Kapsama göre yerinde müdahale
- Yeni bilgisayar ve kullanıcı hazırlığı
- İşten ayrılan kullanıcıların erişimlerinin kapatılması
- Yetkili üçüncü taraf yazılım sağlayıcılarıyla koordinasyon
- Ticket durumu ve çözüm kayıtları

Önceliklendirme açıklaması:

> Her talep aynı aciliyette değildir. İşletmenin tamamını etkileyen kesintiler, tek kullanıcıyı etkileyen sorunlardan önce ele alınır. İlk yanıt, çalışmaya başlama ve çözüm süreleri birbirinden farklı kavramlardır; uygulanacak hedefler sözleşmede açıkça belirtilir.

Örnek öncelikler, garanti olarak değil açıklayıcı model olarak gösterilsin:

- P1 Kritik: İşletmenin veya kritik sürecin tamamen durması
- P2 Yüksek: Birden fazla kullanıcının veya önemli işlevin etkilenmesi
- P3 Normal: Tek kullanıcılı günlük destek talebi
- P4 Planlı: Kurulum, değişiklik veya iyileştirme talebi

---

### 10.5 Network ve Sunucu

URL: `/hizmetler/network-sunucu`

Hero:

> **Network ve sunucu yönetimi**  
> Kablolu ve kablosuz ağınızı, internet erişiminizi, firewall, NAS ve sunucu bileşenlerinizi belgeli ve yönetilebilir hale getirin.

Kapsam:

- Mevcut ağ yapısının incelenmesi
- Modem, router, switch ve access point envanteri
- Temel ağ diyagramı ve IP planı
- Kurumsal Wi-Fi yapılandırması
- Misafir ve personel ağlarının ayrılması
- Firewall kural ve erişim gözden geçirmeleri
- NAS ve dosya paylaşımı desteği
- Sunucu sağlık kontrolleri
- Depolama kapasitesi ve kritik uyarı takibi
- İnternet sağlayıcısı ve altyapı firmalarıyla koordinasyon

Sorumluluk sınırı:

> İnternet servis sağlayıcısının altyapısından, elektrik kesintisinden veya garanti dışı donanım arızasından kaynaklanan süreler BT Masası tarafından garanti edilemez. Ancak arıza tespiti ve ilgili tedarikçiyle koordinasyon hizmet kapsamına alınabilir.

---

### 10.6 Siber Güvenlik ve Yedekleme

URL: `/hizmetler/siber-guvenlik-yedekleme`

Hero:

> **Siber güvenlik ve yedekleme**  
> Tek bir ürüne güvenmek yerine hesap, cihaz, ağ ve yedekleme katmanlarında uygulanabilir güvenlik kontrolleri oluşturun.

Kapsam:

- Çok faktörlü doğrulama planı
- Yönetici hesaplarının ayrıştırılması
- Uç nokta güvenliği ve antivirüs durum takibi
- İşletim sistemi ve uygulama güncellemeleri
- Temel yetki ve erişim gözden geçirmesi
- Yedekleme kapsamı ve saklama planı
- Yedekleme işi sonuçlarının izlenmesi
- Planlı geri yükleme kontrolü
- Olay anında ilk teknik koordinasyon
- Çalışanlar için temel güvenlik farkındalığı önerileri

Önemli dürüstlük metni:

> Hiçbir hizmet veya ürün sıfır risk ve mutlak güvenlik sağlayamaz. Amaç; olasılığı ve etkisi azaltmak, olayları daha erken fark etmek ve geri dönüş kabiliyetini geliştirmektir.

Yedekleme yaklaşımı:

> Yedekleme yalnızca dosya kopyalamak değildir. Hangi verinin, ne sıklıkla, kaç sürüm ve ne kadar süre saklanacağı; kopyalardan birinin üretim ortamından ayrıştırılması ve gerektiğinde geri yükleme yapılabildiğinin doğrulanması gerekir.

“Ücretsiz sızma testi” veya uzmanlık/yetki gerektiren ileri güvenlik hizmetlerini mevcut değilse teklif etme.

---

### 10.7 Microsoft 365 ve Bulut

URL: `/hizmetler/microsoft-365-bulut`

Hero:

> **Microsoft 365 ve bulut yönetimi**  
> Kullanıcı, lisans, e-posta, dosya paylaşımı ve temel güvenlik ayarlarını işletmenizin çalışma düzenine göre yönetin.

Kapsam:

- Kullanıcı ve lisans yönetimi
- E-posta hesaplarının kurulumu
- Grup ve dağıtım listeleri
- OneDrive ve SharePoint temel yapılandırmaları
- Çok faktörlü doğrulama
- İşe giriş ve işten ayrılma süreçleri
- Alan adı ve DNS kayıt koordinasyonu
- E-posta güvenliği için SPF, DKIM ve DMARC yapılandırma desteği
- Lisans kullanım raporu
- Temel veri paylaşım yetkileri

Lisansların Microsoft veya ilgili sağlayıcı tarafından ayrıca ücretlendirildiğini açıkça belirt.

---

### 10.8 Aksaray yerel hizmet sayfası

URL: `/aksaray-kurumsal-it-destek`

Title:

> Aksaray Kurumsal IT Destek ve Bilgi İşlem Hizmetleri | BT Masası

Meta description:

> BT Masası, Aksaray'daki işletmelere kurumsal IT destek, network, sunucu, Microsoft 365, yedekleme ve yönetilen BT hizmetleri sunar.

H1:

> Aksaray kurumsal IT destek ve dış kaynak bilgi işlem hizmetleri

Giriş:

> BT Masası, Aksaray'da tam zamanlı bilgi işlem personeli bulunmayan veya mevcut ekibine dışarıdan destek almak isteyen işletmeler için uzaktan ve yerinde BT hizmetleri sunar. Kullanıcı desteğini, cihaz envanterini, ağ altyapısını, bulut hesaplarını, yedekleme ve temel güvenlik süreçlerini tek bir hizmet planında toplar.

Yerel hizmet alanı:

> Birincil saha hizmeti Aksaray Merkez ve Aksaray Organize Sanayi Bölgesi'ne yöneliktir. Diğer ilçe ve lokasyonlar için yerinde destek, mesafe ve sözleşme kapsamına göre planlanır.

Başlık:

> Aksaray'daki işletmeler neden dış kaynak BT desteği alır?

Maddeler:

- Tam zamanlı personel istihdam etmeden birden fazla BT disiplinine erişmek
- Arıza anında rastgele servis aramak yerine belirlenmiş bir muhataba ulaşmak
- Kullanıcı ve cihaz envanterini güncel tutmak
- Yedekleme ve güncelleme kontrollerini günlük iş yükünün dışına çıkarmak
- İnternet, yazıcı, ERP ve diğer tedarikçilerin koordinasyonunu tek noktadan yürütmek
- Teknoloji harcamalarını önceden planlamak

Başlık:

> Kurumsal bakım anlaşmasından farkımız

Metin:

> Klasik bakım anlaşmaları çoğu zaman arızaya müdahale ve periyodik cihaz kontrolüyle sınırlı kalabilir. BT Masası'nın yönetilen hizmet yaklaşımı; destek kayıtlarını, envanteri, kullanıcı hesaplarını, güncellemeleri, yedekleme sonuçlarını, dokümantasyonu ve düzenli raporlamayı aynı süreçte ele alır. Kesin kapsam, işletmenin ihtiyacına göre sözleşmede tanımlanır.

Bu sayfada “Aksaray IT firması”, “Aksaray bilgi işlem hizmetleri”, “Aksaray kurumsal bilgisayar desteği” gibi ifadeleri yalnızca doğal ve okunabilir bağlamda kullan. Anahtar kelime tekrarı yapma. Ağaçören, Eskil, Gülağaç gibi ilçeler için ayrı ince sayfalar üretme.

Yerel CTA:

> Aksaray'daki işletmeniz için yerinde BT ön değerlendirmesi planlayın.

---

### 10.9 Kimler İçin `/kimler-icin`

Hero:

> **Hangi işletmeler için uygundur?**  
> BT Masası, teknolojinin iş için gerekli olduğu fakat ayrı bir BT departmanı kurmanın henüz verimli olmadığı işletmelere yöneliktir.

#### Uygunluk işaretleri

- Sekiz veya daha fazla aktif bilgisayar/kullanıcı bulunması
- Sorunların şirket içindeki teknik bilgisi olan tek kişiye kalması
- Yedekleme yapıldığının düşünülmesi fakat geri yüklemenin test edilmemesi
- Çalışan hesaplarının standart bir süreçle açılıp kapatılmaması
- Birden fazla şube veya çalışma noktası olması
- E-posta, internet, dosya paylaşımı veya ERP kesintisinin gelir kaybına neden olması
- Farklı tedarikçiler arasında sorumluluk belirsizliği yaşanması

#### Sektör bölümleri

Her sektör için sorun → yaklaşım → beklenen operasyonel çıktı düzenini kullan:

1. **Üretim ve OSB işletmeleri**  
   Ofis kullanıcıları, üretimle bağlantılı iş istasyonları, ağ ve dosya erişimi için belgeli altyapı ve tedarikçi koordinasyonu.

2. **Muhasebe ve mali müşavirlik büroları**  
   E-posta, e-imza bileşenleri, kullanıcı erişimleri, güncelleme ve yedekleme süreçlerinin dikkatli yönetimi. Mevzuat veya özel veri güvenliği konusunda hukuki garanti verme.

3. **Lojistik, toptan satış ve distribütörler**  
   İnternet, yazıcı, barkod, dosya paylaşımı ve ticari yazılım erişimindeki kesintilere öncelikli yaklaşım.

4. **Özel eğitim kurumları**  
   Personel hesapları, ortak cihazlar, kablosuz ağ ve kullanıcı erişimlerinin rol bazlı yönetimi.

5. **Otel ve konaklama işletmeleri**  
   Ofis ağı, personel cihazları, misafir ağı ayrımı ve ilgili teknoloji tedarikçileriyle koordinasyon.

6. **Profesyonel hizmet ofisleri**  
   Küçük ekiplerde kullanıcı desteği, Microsoft 365, dosya erişimi, yedekleme ve cihaz yenileme planı.

#### Kimler için uygun olmayabilir?

> Yalnızca tek seferlik, en düşük fiyatlı bilgisayar tamiri arayan ev kullanıcıları; kapsam tanımlamadan sınırsız hizmet bekleyen işletmeler veya tek kişilik ekiple gerçekçi olmayan 7/24 yerinde destek isteyen kritik tesisler için bu model uygun olmayabilir.

---

### 10.10 Nasıl Çalışır `/nasil-calisir`

H1:

> BT Masası nasıl çalışır?

Giriş:

> Sağlıklı bir dış kaynak BT hizmeti, uzaktan bağlantı programı kurmakla başlamaz. Önce mevcut sistem, sorumluluklar ve işletme açısından kritik süreçler anlaşılır; ardından ölçülebilir hizmet kapsamı oluşturulur.

#### Aşama 1 — Ön görüşme

> Çalışan, kullanıcı, cihaz, lokasyon, kullanılan yazılımlar ve en sık yaşanan sorunlar hakkında temel bilgi toplarız. Bu aşamada erişim parolası istemeyiz ve izinsiz teknik tarama yapmayız.

#### Aşama 2 — Envanter ve risk değerlendirmesi

> Yetkilendirme sonrasında bilgisayarları, ağ bileşenlerini, hesapları, lisansları, yedekleme yöntemini ve kritik tedarikçileri inceleriz. Bulguları önceliklerine göre sınıflandırırız.

#### Aşama 3 — Teklif, kapsam ve SLA

> Dahil edilen kullanıcı, cihaz, lokasyon, ziyaret, destek zamanı ve yönetilecek sistemleri yazılı hale getiririz. Donanım, lisans, proje ve mesai dışı hizmet gibi ayrı ücretlendirilecek konuları açıkça belirtiriz.

#### Aşama 4 — Onboarding

> Yönetim hesaplarını güvenli hale getirir, varlıkları belgeler, destek kanallarını tanımlar ve kritik eksikler için geçiş planı oluştururuz. Mevcut tedarikçilerden gerekli teknik bilgilerin kontrollü biçimde devralınmasını koordine ederiz.

#### Aşama 5 — Düzenli operasyon

> Destek talepleri kayıt altına alınır; güncellemeler, yedekleme sonuçları ve kritik uyarılar takip edilir. Tekrar eden sorunlar yalnızca geçici olarak kapatılmaz, mümkün olduğunda kök nedenleri değerlendirilir.

#### Aşama 6 — Raporlama ve iyileştirme

> Aylık raporda destek talepleri, dikkat gerektiren cihazlar, yedekleme durumu, açık riskler ve önerilen yatırımlar özetlenir.

“Örnek aylık rapor” kartı ekle. Henüz gerçek PDF yoksa çalışan olmayan indirme butonu koyma. Bunun yerine raporda bulunacak alanları önizleme kartıyla göster.

---

### 10.11 Paketler `/paketler`

H1:

> İhtiyacınıza uygun BT hizmet modeli

Giriş:

> Aylık hizmet bedeli yalnızca bilgisayar sayısına göre belirlenmez. Kullanıcı, cihaz, lokasyon, sunucu, firewall, bulut hesabı, yerinde destek ihtiyacı ve beklenen müdahale seviyesi birlikte değerlendirilir.

İlk sürümde `showPrices: false` olsun. Fiyat yerine “Kapsama göre teklif” göster. Fiyatlar yalnızca kullanıcı doğrulanmış tutarları konfigürasyona girdikten sonra görünür hale getirilebilsin.

#### Paket 1 — Temel BT

Hedef:

> 5-10 kullanıcılı, temel kullanıcı desteği ve düzenli cihaz takibi isteyen küçük ofisler.

İçerik:

- Mesai saatlerinde uzaktan destek
- Kullanıcı ve cihaz envanteri
- Temel güncelleme takibi
- Ticket kayıtları
- Periyodik sistem özeti
- İhtiyaca göre planlı yerinde ziyaret

CTA: **Temel BT için teklif alın**

#### Paket 2 — Yönetilen BT

“En çok tercih edilen” gibi doğrulanmamış rozet kullanma. Bunun yerine “Büyüyen işletmeler için” etiketi kullanılabilir.

Hedef:

> 10-25 kullanıcılı, kullanıcı desteğinin yanında hesap, yedekleme, bulut ve tedarikçi süreçlerini tek noktadan yönetmek isteyen işletmeler.

İçerik:

- Uzaktan ve kapsam dahilinde yerinde destek
- Cihaz, kullanıcı ve lisans envanteri
- Güncelleme ve uç nokta durumu takibi
- Microsoft 365 temel yönetimi
- Yedekleme işi izleme
- Tedarikçi koordinasyonu
- Aylık raporlama

CTA: **Yönetilen BT kapsamını görüşün**

#### Paket 3 — Kurumsal BT

Hedef:

> 25 ve üzeri kullanıcıya, sunucuya, firewall'a veya birden fazla lokasyona sahip işletmeler.

İçerik:

- Önceliklendirilmiş destek modeli
- Sunucu ve network yönetimi
- Çok lokasyonlu envanter
- Gelişmiş yedekleme ve geri dönüş planı
- Yönetim değerlendirme toplantısı
- Teknoloji bütçesi ve yenileme yol haritası
- İhtiyaca göre mevcut BT ekibiyle ortak çalışma

CTA: **Kurumsal kapsam oluşturun**

#### Fiyatlandırma açıklaması

> Donanım, yedek parça, yazılım lisansları, bulut abonelikleri, kablolama, büyük kurulumlar ve veri kurtarma çalışmaları aksi belirtilmedikçe aylık hizmet bedeline dahil değildir. İlk kurulum ve mevcut altyapının düzenlenmesi için tek seferlik onboarding bedeli uygulanabilir.

---

### 10.12 Ücretsiz BT Kontrolü `/ucretsiz-bt-kontrolu`

H1:

> İşletmenizin BT risklerini birlikte inceleyelim.

Giriş:

> Bu ön değerlendirme; mevcut yapınızı ve ihtiyaçlarınızı anlamaya yönelik kısa bir görüşmedir. İzinsiz sistem taraması, sızma testi veya ayrıntılı güvenlik denetimi değildir.

#### Ön görüşmede ele alınacak konular

- Kullanıcı ve bilgisayar sayısı
- Şube veya lokasyon sayısı
- Kullanılan e-posta ve bulut hizmetleri
- Sunucu, NAS ve ağ altyapısı
- Yedekleme yöntemi
- En sık yaşanan teknik sorunlar
- Kritik uygulamalar ve kabul edilebilir kesinti süresi
- Mevcut destek modeli

#### Form alanları

- Ad soyad — zorunlu, 2-80 karakter
- Firma adı — zorunlu, 2-120 karakter
- Telefon — zorunlu
- Kurumsal e-posta — opsiyonel ama tavsiye edilir
- Çalışan sayısı — aralık seçimi
- Bilgisayar/aktif kullanıcı sayısı — aralık seçimi
- Lokasyon sayısı — sayı veya aralık
- İlgilenilen hizmetler — çoklu seçim
- En sık yaşanan sorun — 20-1500 karakter
- Tercih edilen iletişim yöntemi — telefon/e-posta/WhatsApp; yalnızca mevcut kanalları göster
- KVKK aydınlatma metnini okudum ve talebimin yanıtlanması amacıyla bilgilerimin işlenmesini kabul ediyorum — zorunlu
- Kampanya ve pazarlama iletişimi izni — ayrı, opsiyonel; ilk sürümde gerekli değilse hiç ekleme

Form CTA:

> Ön değerlendirme talebi gönder

Başarı mesajı:

> Talebiniz alındı. Paylaştığınız iletişim bilgisi üzerinden size dönüş yapılacaktır.

Kesin süre sözü verme. Hata mesajları kullanıcıya teknik detay veya servis anahtarı göstermesin.

#### Kartvizit QR kullanımı

Bu sayfa, kartvizitteki QR kodun hedefi olacaktır. URL kısa ve kalıcı kalsın. Kampanya kaynağını ölçmek için `?utm_source=business_card&utm_medium=qr&utm_campaign=aksaray_outreach` parametrelerini kabul et ve form kaydında güvenli biçimde `source` alanına ekle. Bilinmeyen query parametrelerini veri tabanına topluca kaydetme.

---

### 10.13 Hakkımızda `/hakkimizda`

H1:

> BT Masası hakkında

Ana metin:

> BT Masası, küçük ve orta ölçekli işletmelerin bilgi teknolojileri süreçlerini daha düzenli, güvenli ve ölçülebilir hale getirmek amacıyla Aksaray'da kurulmaktadır. Yaklaşımımız; yalnızca arızaya müdahale etmek değil, kullanıcı, cihaz, ağ, hesap ve yedekleme süreçlerini işletmenin günlük operasyonunun bir parçası olarak yönetmektir.

Kurucu bölümü:

> **Bekir Duran — Bilgisayar Mühendisi**  
> Yazılım geliştirme, bulut sistemleri ve teknik altyapı tecrübesini KOBİ'lerin günlük ihtiyaçlarına uygulanabilir bir hizmet modeline dönüştürmek üzere BT Masası'nı kurmaktadır. Amaç; teknik konuları gereksiz jargonla büyütmeden, sorumlulukları açık ve sonuçları takip edilebilir bir BT hizmeti sunmaktır.

Kullanıcı daha sonra doğrulanmış mesleki özgeçmişini ekleyebilsin. Bu aşamada sertifika, müşteri sayısı, ekip büyüklüğü veya deneyim yılı uydurma.

Değerler:

1. **Açık kapsam** — Nelerin dahil ve hariç olduğunu iş başlamadan belirtmek.
2. **Güvenli erişim** — Yönetici erişimlerini kişiye özel, kayıtlı ve çok faktörlü doğrulamayla korumak.
3. **Dokümantasyon** — Kritik sistem bilgisini kişilerin hafızasına bırakmamak.
4. **Ölçülebilir hizmet** — Talepleri, riskleri ve yapılan işleri raporlamak.
5. **Gerçekçi taahhüt** — Sağlanamayacak yanıt veya çözüm sürelerini vaat etmemek.

“Neden biz?” başlığını kullanabilirsin fakat doğrulanmamış üstünlük iddiası ekleme.

---

### 10.14 Rehber `/rehber`

H1:

> İşletmeler için BT rehberi

Giriş:

> Bilgisayar, ağ, bulut, güvenlik ve yedekleme kararlarını teknik ayrıntılar arasında kaybolmadan değerlendirmenize yardımcı olan uygulanabilir rehberler.

Filtre ve arama ilk sürümde zorunlu değil. İçerikler kartlar halinde tarih, başlık, özet, okuma süresi ve güncellenme tarihiyle gösterilsin.

#### Başlangıç yazısı 1

Slug: `/rehber/dis-kaynak-bt-hizmeti-nedir`

Başlık:

> Dış Kaynak BT Hizmeti Nedir? KOBİ'ler İçin Uygun mu?

Meta açıklama:

> Dış kaynak BT hizmetinin kapsamını, teknik servisten farkını, avantajlarını, sınırlamalarını ve doğru sağlayıcıyı seçerken sorulması gerekenleri öğrenin.

İçerik yapısı:

1. Kısa ve doğrudan tanım
2. Teknik servis ile yönetilen BT hizmeti farkı
3. Hangi işler kapsama alınabilir?
4. Hangi işletmeler için uygundur?
5. Tam zamanlı çalışan ile dış kaynak modelinin farkları
6. Hizmet alınırken karşılaşılabilecek riskler
7. Sözleşmede bulunması gereken maddeler
8. Sağlayıcıya sorulması gereken 10 soru
9. Sonuç ve ön değerlendirme CTA'sı

Makale aşağıdaki noktaları açıkça anlatsın:

- Dış kaynak hizmet her işletme için otomatik olarak daha ucuz değildir.
- 7/24 kritik operasyonu bulunan şirketler yedekli ekip gerektirebilir.
- İlk yanıt süresi ile çözüm süresi aynı şey değildir.
- Donanım, lisans ve proje maliyetleri genellikle aylık hizmetten ayrıdır.
- Yetkili erişim, parola yönetimi ve sözleşme sonu devir süreci sorgulanmalıdır.

#### Başlangıç yazısı 2

Slug: `/rehber/isletme-yedekleme-kontrol-listesi`

Başlık:

> İşletme Yedekleri Gerçekten Çalışıyor mu? 10 Maddelik Kontrol Listesi

İçerik yapısı:

1. Yedekleme ile senkronizasyon arasındaki fark
2. Kritik verilerin belirlenmesi
3. RPO ve RTO'nun sade açıklaması
4. Birden fazla kopya ve ayrıştırılmış yedek
5. Fidye yazılımına karşı değiştirilemez/offline kopya yaklaşımı
6. Yedekleme başarısızlık bildirimleri
7. Saklama ve sürüm politikası
8. Şifreleme ve erişim kontrolü
9. Geri yükleme testi
10. Sorumlu kişi ve raporlama

Kullanıcıya indirilebilir kontrol listesi sunulmayacaksa sahte indirme butonu koyma. Makalenin içinde yazdırılabilir HTML kontrol listesi oluştur.

#### Başlangıç yazısı 3

Slug: `/rehber/aksaray-kurumsal-it-destek-firmasi-secimi`

Başlık:

> Aksaray'da Kurumsal IT Destek Firması Seçerken Sorulması Gereken 12 Soru

İçerik yapısı:

1. Hizmet kapsamı yazılı mı?
2. İlk yanıt ve çözüm hedefleri ayrı mı?
3. Yerinde destek koşulları neler?
4. Destek talepleri kayıt altına alınıyor mu?
5. Yönetici erişimleri nasıl korunuyor?
6. Parolalar nasıl saklanıyor?
7. Yedekler yalnızca izleniyor mu, geri yükleme de test ediliyor mu?
8. Donanım ve lisans maliyetleri dahil mi?
9. Mevcut ERP/internet/yazıcı firmasıyla kim koordinasyon kuracak?
10. Aylık raporda neler var?
11. Sözleşme bittiğinde hesaplar ve dokümantasyon nasıl devredilecek?
12. Sağlayıcının ulaşamadığı durumda yedek kişi veya çözüm var mı?

Rakip firma adı verme, karalama yapma veya doğrulanmamış yerel pazar iddiaları ekleme.

#### Başlangıç yazısı 4

Slug: `/rehber/tam-zamanli-it-personeli-mi-dis-kaynak-bt-mi`

Başlık:

> Tam Zamanlı IT Personeli mi, Dış Kaynak BT Hizmeti mi?

Karşılaştırma boyutları:

- Kullanıcı ve cihaz sayısı
- Sistem karmaşıklığı
- 7/24 operasyon ihtiyacı
- Uzmanlık çeşitliliği
- Yerinde bulunma gerekliliği
- Maliyet öngörülebilirliği
- İzin ve tek kişiye bağımlılık riski
- Kurumsal hafıza ve dokümantasyon

Sonuçta tek bir modelin herkese uygun olduğunu iddia etme. Bazı işletmelerde hibrit/co-managed modelin daha doğru olabileceğini belirt.

#### Blog kalite kuralları

- Her yazı gerçek bir soruya cevap versin.
- 900-1600 kelime aralığı hedeflenebilir ancak sırf uzunluk için tekrar yapma.
- İlk 100 kelimede doğrudan cevap ver.
- H2/H3 yapısı anlamlı olsun.
- Görünür içeriğe dayanmayan schema ekleme.
- Yazar, yayın tarihi ve güncellenme tarihi göster.
- Sağlık, hukuk veya mevzuat konusunda uzmanlık iddiası ekleme.
- İstatistik kullanılacaksa kaynağını bağlantıyla belirt; kaynak yoksa sayı uydurma.
- Makaleler birbirine ve ilgili hizmet sayfasına doğal iç bağlantı versin.

---

### 10.15 İletişim `/iletisim`

H1:

> BT Masası ile iletişim

Giriş:

> İşletmenizin kullanıcı, cihaz, ağ ve destek ihtiyacını kısaca paylaşın. Mevcut yapınızı anlamak ve uygun sonraki adımı belirlemek için sizinle iletişime geçelim.

İletişim bilgileri yalnızca merkezi konfigürasyonda gerçek değer bulunduğunda gösterilsin.

Form alanları:

- Ad soyad
- Firma adı
- Telefon
- E-posta
- Konu
- Mesaj
- Zorunlu KVKK onayı
- Turnstile

Form başarı mesajı:

> Mesajınız alındı. Paylaştığınız iletişim bilgisi üzerinden dönüş yapılacaktır.

Harita yalnızca doğrulanmış fiziksel müşteri kabul adresi verildikten sonra eklenebilir. Ev adresi veya sanal ofis bilgisi uydurma.

Alternatif CTA:

> Daha kapsamlı bir değerlendirme için ücretsiz BT kontrol formunu doldurun.

---

### 10.16 404 sayfası

H1:

> Aradığınız sayfa bulunamadı.

Metin:

> Bağlantı değişmiş veya adres hatalı yazılmış olabilir. Ana sayfaya dönebilir ya da hizmetlerimizi inceleyebilirsiniz.

Butonlar:

- Ana sayfaya dön
- Hizmetleri incele

---

## 11. Form ve lead sistemi

### API

Tek bir same-origin endpoint kullan:

```text
POST /api/leads
```

`formType` alanı:

- `contact`
- `risk_assessment`

Yalnızca `POST` kabul et. Diğer metotlarda `405 Method Not Allowed` ve doğru `Allow` başlığı dön.

### Sunucu tarafı doğrulama

Client-side doğrulama kullanıcı deneyimi içindir; bütün alanları Worker tarafında yeniden doğrula.

Önerilen sınırlar:

- `name`: 2-80
- `company`: 2-120
- `email`: boş veya geçerli format, en fazla 254
- `phone`: normalize edilmiş makul Türkiye/uluslararası format, en fazla 30
- `message`: 20-1500
- `employeeRange`, `deviceRange`: izin verilen enum değerleri
- `services`: yalnızca izin verilen enum değerleri ve en fazla 8 seçim
- `consent`: kesinlikle `true`
- Body boyutu: küçük ve kontrollü, örneğin en fazla 32 KB

HTML/JavaScript içeriğini çalıştırma. E-posta bildirimi oluştururken tüm kullanıcı girdilerini düz metin olarak ele al ve header injection'a karşı koru.

### Turnstile

- Widget'ı formda göster.
- Token'ı backend'e gönder.
- Worker içinde Cloudflare Siteverify endpoint'iyle sunucu tarafında doğrula.
- Yalnız client-side token varlığına güvenme.
- Token başarısız, süresi dolmuş veya tekrar kullanılmışsa formu kaydetme.
- Local ve otomatik testlerde Cloudflare'ın resmî test anahtarlarını kullan; production secret'ını repoya yazma.

### D1 şeması

`migrations/0001_create_leads.sql` ile aşağıdaki alanları kapsayan tablo oluştur:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  form_type TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  employee_range TEXT,
  device_range TEXT,
  location_count TEXT,
  services TEXT,
  preferred_contact TEXT,
  message TEXT NOT NULL,
  source TEXT,
  consent_version TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
```

`services` alanı sınırlı bir JSON dizisi olarak saklanabilir. SQL sorgularında D1 prepared statements kullan.

Ham IP adresini D1'e kaydetme. Worker loglarına form alanlarını topluca yazma. Hata loglarında isim, telefon, e-posta ve mesaj içeriğini gösterme.

### E-posta bildirimi

İsteğe bağlı olarak Resend veya Cloudflare Workers ile uyumlu doğrulanmış bir e-posta sağlayıcısı üzerinden bildirim gönder.

Kurallar:

- API anahtarı secret olarak tutulmalı.
- Gönderen domain SPF, DKIM ve DMARC ile doğrulanmalı.
- Formu gönderen kişinin e-posta adresini `From` alanı yapma; yalnızca güvenilir şirket domainini kullan.
- Kullanıcının adresini güvenli biçimde `Reply-To` olarak ekleyebilirsin.
- E-posta servisi geçici olarak hata verse bile lead D1'e başarıyla kaydedildiyse kullanıcıya kaydın alındığını söyle; bildirim hatasını PII içermeden logla.
- Bildirim devre dışıysa sistem D1 kayıtlarıyla çalışmaya devam etsin.

### Spam ve kötüye kullanım

- Turnstile
- Görünmez honeypot alanı
- Küçük body limiti
- Sıkı enum/uzunluk doğrulaması
- Aynı origin dışında API kullanımına izin verme; CORS'u gereksiz açma
- Uygun Cloudflare planında `/api/leads` için rate limiting rule kurulmasını `DEPLOYMENT.md` içinde anlat
- Kullanıcıya saldırganın işine yarayacak ayrıntılı hata mesajı dönme

---

## 12. SEO gereksinimleri

### Temel teknik SEO

- Her sayfada tek ve anlamlı H1
- Benzersiz `<title>` ve meta description
- Mutlak canonical URL
- Semantic HTML5
- Gerçek `<a href>` bağlantıları
- Statik olarak oluşturulan, JavaScript olmadan okunabilen ana içerik
- Otomatik sitemap.xml
- Geçerli robots.txt
- 404 için doğru HTTP durumu
- Eski veya alternatif URL oluşursa 301 yönlendirme
- Trailing slash politikasını tek biçimde uygula
- Türkçe sayfalarda `<html lang="tr">`
- Open Graph ve Twitter/X metadata
- Her paylaşılabilir sayfa için anlamlı OG title/description
- Breadcrumb görünümü ve şeması
- Blog için RSS feed
- Görsellerde açıklayıcı dosya adı ve alt metni; dekoratif görsellerde boş alt

### Başlık şablonu

```text
{Sayfa Başlığı} | BT Masası
```

Ana sayfa özel title:

> BT Masası | Aksaray Kurumsal IT Destek ve Yönetilen BT Hizmetleri

Ana sayfa meta description:

> BT Masası, Aksaray'daki işletmelere kurumsal IT destek, network, sunucu, Microsoft 365, yedekleme ve yönetilen BT hizmetleri sunar.

### Yapılandırılmış veri

JSON-LD kullan. Yalnızca görünür ve doğru bilgiler ekle.

Ana sayfa:

- `Organization`
- Fiziksel işletme bilgileri doğrulandığında uygun `LocalBusiness`/`ProfessionalService` türü
- `WebSite`

Hizmet sayfaları:

- `Service`
- `BreadcrumbList`

Blog:

- `Article` veya `BlogPosting`
- `BreadcrumbList`

SSS:

- Yalnızca sayfada kullanıcıya görünür aynı sorular ve yanıtlar varsa `FAQPage`
- FAQ zengin sonucunun Google tarafından gösterileceğini vaat etme

Şema kuralları:

- Logo URL'si gerçek ve crawl edilebilir olsun.
- Adres yoksa postal address uydurma.
- Telefon yoksa ekleme.
- `sameAs` yalnızca gerçek ve doğrulanmış hesapları içersin.
- Sahte puan, `aggregateRating`, yorum veya müşteri sayısı ekleme.
- Aksaray yerinde, Türkiye geneli uzaktan hizmet ayrımını `areaServed` ve görünür içerikte tutarlı biçimde anlat.

### Yerel SEO

- NAP bilgilerini merkezi konfigürasyondan ve her yerde aynı biçimde üret.
- Aksaray sayfası gerçekten özgün ve faydalı içerik taşısın.
- İlçeler için kopyalanmış doorway page oluşturma.
- Google Business Profile bağlantısı verildiğinde `sameAs`/footer alanına ekle.
- İletişim sayfasında hizmet bölgesi açıkça gösterilsin.
- Yerel sorgular için metne anlamsız anahtar kelime listesi yerleştirme.

### GEO ve yapay zekâ okunabilirliği

- Her hizmet sayfasının başında 1-2 cümlelik doğrudan tanım bulunmalı.
- Şirket adı, hizmet, konum ve kapsam aynı ifadelerle tutarlı kullanılmalı.
- Karşılaştırma tabloları, kapsam listeleri, SSS ve süreç adımları açık HTML olarak bulunmalı.
- Hakkımızda sayfasında kurucu ve marka ilişkisi net olmalı.
- Tarihe duyarlı blog yazılarında yayın/güncelleme tarihi gösterilmeli.
- Kaynağı olmayan istatistik üretme.
- `public/llms.txt` oluştur. İçeriği kısa ve olgusal tut:

```text
# BT Masası

> BT Masası, Aksaray'daki işletmelere yerinde ve Türkiye genelinde uzaktan yönetilen bilgi teknolojileri hizmetleri sunan bir kurumsal BT destek markasıdır.

## Core services
- Yönetilen BT hizmetleri
- Kurumsal IT destek
- Network ve sunucu yönetimi
- Siber güvenlik ve yedekleme
- Microsoft 365 ve bulut yönetimi

## Primary service area
- Aksaray Merkez
- Aksaray Organize Sanayi Bölgesi
- Türkiye genelinde uzaktan destek

## Important pages
- https://btmasasi.com/hizmetler
- https://btmasasi.com/aksaray-kurumsal-it-destek
- https://btmasasi.com/nasil-calisir
- https://btmasasi.com/ucretsiz-bt-kontrolu
- https://btmasasi.com/iletisim

## Contact
- https://btmasasi.com/iletisim
```

`llms.txt` dosyasını bir sıralama garantisi olarak anlatma; yalnızca makinece okunabilir kısa işletme özeti olarak kullan.

---

## 13. Erişilebilirlik

WCAG 2.2 AA hedefle.

- “İçeriğe geç” bağlantısı
- Doğru heading sırası
- Klavyeyle kullanılabilir menü ve accordion
- Görünür focus stilleri
- Form alanlarında gerçek `<label>`
- Hataları yalnız renk ile anlatmama
- Hata özetini ve alan bazlı mesajı ekran okuyucuya duyurma
- `aria-live` başarı/hata durumları
- Modal gerekiyorsa focus trap ve Escape ile kapatma
- Dokunma hedefleri en az yaklaşık 44×44 px
- Kontrast oranları AA
- Reduced motion desteği
- Dekoratif SVG'lerde `aria-hidden`
- Mobilde yatay kaydırma oluşturmama
- JavaScript kapalıyken içerik ve navigasyonun büyük ölçüde çalışması

---

## 14. Performans hedefleri

Ana pazarlama sayfaları için üretim build'inde hedefler:

- Lighthouse Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- LCP: 2.5 saniyenin altında
- INP: 200 ms veya altında
- CLS: 0.1'in altında

Bu değerler test ortamı ve cihaz koşullarına göre değişebilir; yine de kod ve asset bütçesini bu hedeflerle oluştur.

Kurallar:

- Astro islands kullanımını minimumda tut.
- Hero için ağır client-side framework yükleme.
- Görselleri AVIF/WebP olarak ve uygun boyutlarla üret.
- `width`/`height` veya aspect-ratio belirt.
- Above-the-fold ana görsel varsa optimize/preload et; diğerlerini lazy-load yap.
- Üçüncü taraf scriptleri varsayılan olarak kullanma.
- Harita iframe'i ekleme.
- Font subset ve preload kullanımını ölçülü yap.
- Kullanılmayan ikon setini komple bundle etme.
- CSS ve JS boyutlarını build raporunda kontrol et.

---

## 15. Güvenlik ve gizlilik

### Güvenlik başlıkları

Worker yanıtlarına uygun başlıkları ekle:

- `Content-Security-Policy`
- `Strict-Transport-Security` — production domain ve HTTPS kararlı hale geldikten sonra etkinleştirme notuyla
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — kullanılmayan kamera, mikrofon, konum vb. kapalı
- `frame-ancestors 'none'` veya eşdeğer clickjacking koruması
- Uygun `Cross-Origin-Opener-Policy` değerlendirmesi

CSP, Turnstile'ın resmî originlerini çalıştıracak kadar izinli; bunun dışında sıkı olmalı. `unsafe-eval` kullanma. Inline script gerekiyorsa Astro'nun güvenli üretim yöntemini veya hash/nonce yaklaşımını değerlendir.

### Secret yönetimi

- Hiçbir secret'ı git'e commit etme.
- `.env.example` yalnızca anahtar adları ve sahte açıklayıcı değerler içersin.
- Local secret dosyaları `.gitignore` içinde olsun.
- Production secret kurulumu `wrangler secret put ...` veya güncel Cloudflare yöntemiyle anlatılsın.
- Loglarda secret veya form içeriği gösterilmesin.

### Gizlilik yaklaşımı

- Yalnızca gerekli lead verilerini topla.
- Pazarlama izni ile talebe cevap verme iznini birbirine bağlama.
- Verilerin ne kadar tutulacağı hukuk danışmanı ve gerçek iş süreciyle netleştirilene kadar yasal metinde sahte süre belirtme; `TODO_LEGAL_RETENTION_PERIOD` işareti kullan.
- Kullanılmayan analytics, reklam pikseli veya fingerprinting ekleme.
- Sadece zorunlu cookie/yerel depolama kullanılıyorsa agresif cookie banner gösterme. Analitik veya pazarlama araçları eklendiğinde rıza ihtiyacını yeniden değerlendir.

---

## 16. Yasal sayfalar

Yasal sayfalar için sade taslak oluştur fakat bunların hukukçu incelemesi gerektirdiğini `LEGAL_REVIEW_REQUIRED.md` dosyasında açıkça belirt. Kullanıcıya görünür sayfalara “bu metin geçersizdir” yazma; ancak gerçek olmayan şirket bilgisi de ekleme.

### KVKK aydınlatma metninde bulunacak başlıklar

- Veri sorumlusunun kimliği — resmî unvan doğrulanana kadar konfigürasyondan
- İşlenen veriler
- İşleme amaçları
- Hukuki sebepler — hukukçu tarafından doğrulanacak
- Aktarım yapılan hizmet sağlayıcıları ve olası yurt dışı aktarım değerlendirmesi — Cloudflare/e-posta sağlayıcısı gerçek yapılandırmaya göre hukukçu tarafından doğrulanacak
- Toplama yöntemi
- İlgili kişinin hakları
- Başvuru iletişim kanalı

### Gizlilik politikası

- Sunucu logları
- Form verileri
- Güvenlik doğrulaması
- E-posta bildirimi
- Saklama ve silme yaklaşımı
- Üçüncü taraf servisler
- Haklar ve iletişim

### Çerez politikası

İlk sürümde hangi cookie veya storage mekanizmasının gerçekten kullanıldığını koddan tespit edip yalnızca onları yaz. Olmayan analitik çerezlerini listeleme.

### Kullanım koşulları

- Sitedeki bilgilerin genel bilgilendirme amacı
- Web formunun hizmet sözleşmesi oluşturmadığı
- Hizmet kapsamının yazılı teklif ve sözleşmeyle belirlendiği
- İçerik hakları
- Dış bağlantılar
- İletişim

---

## 17. Analytics ve ölçüm

İlk sürümde analytics varsayılan olarak kapalı olsun. Cloudflare Web Analytics daha sonra etkinleştirilebilecek biçimde dokümante edilebilir.

Ölçülmesi gereken event isimlerini bir analytics adapter arayüzü altında hazırla fakat sağlayıcı bağlanmadan ağ isteği gönderme:

```text
cta_click
contact_click
form_start
form_submit_success
form_submit_error
service_page_view
business_card_qr_visit
```

UTM alanlarından yalnızca izin verilenleri al:

- `utm_source`
- `utm_medium`
- `utm_campaign`

Bunları uzunluk ve karakter seti açısından sınırla. Form dışı bütün query string'i saklama.

---

## 18. Cloudflare ve domain kurulum dokümantasyonu

`DEPLOYMENT.md` içinde, güncel Cloudflare ekranları ve CLI komutlarıyla aşağıdaki adımları açıkla. Gerçek account/database ID uydurma.

### Alan adı

1. `btmasasi.com` domainini Cloudflare Registrar üzerinden satın alma.
2. Domain zone'un aktif olduğunu doğrulama.
3. DNSSEC'i etkinleştirme.
4. Primary canonical host olarak `https://btmasasi.com` kullanma.
5. `www.btmasasi.com` için kalıcı 301 yönlendirme oluşturma.

### Worker ve D1

1. Cloudflare hesabında oturum açma veya `wrangler login`.
2. `btmasasi-leads` isimli D1 database oluşturma.
3. Dönen gerçek database ID'yi `wrangler.jsonc` binding'ine ekleme.
4. Migration'ı local ve production ortamında uygulama.
5. Turnstile widget oluşturma ve `btmasasi.com`, `www.btmasasi.com`, local test hostlarını uygun biçimde tanımlama.
6. Public site key'i frontend environment değerine; secret key'i Worker secret'ına ekleme.
7. İsteğe bağlı e-posta secret ve environment değişkenlerini ekleme.
8. `npm run build` ve testler.
9. `wrangler deploy` veya package script üzerinden deployment.
10. Worker ayarlarından Custom Domain olarak `btmasasi.com` ekleme.

### SSL ve güvenlik

- HTTPS yönlendirmesini doğrula.
- SSL/TLS ayarını uygun üretim modunda kullan.
- HSTS'i yalnızca HTTPS ve subdomain planı kesinleştikten sonra etkinleştir.
- WAF managed rules ve API rate limiting özelliklerini mevcut Cloudflare planına göre değerlendir.

### E-posta

- `iletisim@btmasasi.com` için gerçek gelen kutusu veya yönlendirme oluşturma.
- Bildirim gönderen servis için SPF ve DKIM kayıtlarını ekleme.
- DMARC'ı önce izleme yaklaşımıyla kurup sonuçları değerlendirme.
- İletişim formunu production domain üzerinde uçtan uca test etme.

### Search Console sonrası kontrol

- Domain property doğrulama
- Sitemap gönderme
- Ana sayfa ve Aksaray hizmet sayfası için URL Inspection
- Structured data testleri
- Canonical ve robots kontrolü

---

## 19. Geliştirme komutları

`package.json` içinde güncel araçlara uygun ve çalışan komutlar oluştur:

```text
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run validate:production
npm run db:migrate:local
npm run db:migrate:remote
npm run deploy
```

Komut isimleri kullanılan güncel araçlara göre küçük farklılık gösterebilir fakat README ile birebir tutarlı olmalıdır.

`README.md` sıfırdan başlayan bir geliştiricinin aşağıdakileri yapabilmesini sağlamalı:

- Gereksinimleri görmek
- Bağımlılıkları kurmak
- Siteyi local çalıştırmak
- Turnstile test anahtarlarını kullanmak
- D1'i local oluşturmak/migrate etmek
- Testleri çalıştırmak
- Production değerlerini tamamlamak
- Cloudflare'a deploy etmek

Node.js için güncel aktif LTS sürümünü belirt. Kullanıcının ortamında Node 24 LTS bulunabilir; kullanılan paketlerle uyumluysa bunu destekle. `.nvmrc` veya eşdeğer sürüm dosyası ekle.

---

## 20. Test gereksinimleri

### Unit testler

- Form schema validation
- UTM/source sanitization
- Telefon ve e-posta normalizasyonu
- Turnstile başarısız yanıt davranışı
- D1 insert parametrelerinin güvenli oluşturulması
- Güvenlik başlıkları
- Metadata/canonical üretimi

### E2E testler

- Ana menü ve mobil menü
- Ana CTA'dan ön değerlendirme sayfasına geçiş
- Geçersiz form alanlarının erişilebilir hata mesajları
- Turnstile test anahtarıyla başarılı form gönderimi
- API hatasında kullanıcı dostu mesaj
- 404 sayfası
- Temel sayfalarda tek H1
- Canonical, title ve description varlığı
- Klavye navigasyonu
- Axe kritik erişilebilirlik hatası bulunmaması
- 375 px mobil genişlikte yatay taşma olmaması

### Manuel doğrulama listesi

- Logo/kelime markası net
- Türkçe karakterler doğru
- Telefon/e-posta bağlantıları gerçek konfigürasyona bağlı
- Form production D1'e kayıt oluşturuyor
- E-posta bildirimi etkinse ulaşıyor
- Turnstile server-side doğrulanıyor
- Sitemap URL'leri 200 dönüyor
- robots.txt sitemap'i gösteriyor
- JSON-LD geçerli ve görünür içerikle tutarlı
- OG görseli doğru oran ve boyutta
- www → apex 301
- HTTP → HTTPS
- Hassas değer git geçmişinde yok

---

## 21. İçerik ve marka dili kuralları

### Kullanılacak dil

- Sade ve profesyonel Türkçe
- İşletme sahibinin anlayacağı sonuç odaklı açıklamalar
- Teknik terim gerekiyorsa kısa açıklama
- “Biz” dili ve doğrudan “siz” hitabı
- Kısa paragraf ve net başlıklar

### Kullanılmayacak dil

- “Sektörün lideri”
- “Aksaray'ın en iyi IT firması”
- “%100 güvenlik”
- “Kesintisiz çalışma garantisi”
- “Sorunlarınızı anında çözeriz”
- “7/24 destek” — gerçekten kurulu ekip ve sözleşme yoksa
- “Yüzlerce mutlu müşteri”
- “20 yıllık deneyim” veya doğrulanmamış herhangi bir süre
- “Ücretsiz sızma testi”

### Terminoloji

Metin içinde kullanıcıların aradığı “IT destek” ifadesini kullan; ancak Türkçe “BT” ve “bilgi teknolojileri” ifadeleriyle birlikte doğal biçimde geçir. Her paragrafta aynı anahtar kelimeyi tekrar etme.

Marka yazımı her yerde tam olarak:

> BT Masası

URL ve teknik isimlerde:

> btmasasi

---

## 22. Production kontrolü ve kabul kriterleri

Proje ancak aşağıdaki koşulların tamamı sağlandığında bitmiş sayılır:

1. Tüm belirtilen rotalar çalışıyor.
2. Site mobil, tablet ve masaüstünde düzgün görünüyor.
3. `npm run lint`, type-check, test ve production build başarılı.
4. Cloudflare Worker ve statik asset konfigürasyonu uyumlu.
5. Form endpoint'i D1'e prepared statement ile kayıt yapıyor.
6. Turnstile token'ı sunucu tarafında doğrulanmadan kayıt oluşturulmuyor.
7. Secret değerler repoda yok.
8. Henüz verilmemiş telefon, adres, resmî şirket unvanı veya sosyal bağlantı uydurulmamış.
9. Gerçek müşteri yokken referans, puan veya yorum gösterilmiyor.
10. Her sayfanın benzersiz title, description, canonical ve H1'i var.
11. Sitemap, robots.txt, RSS ve llms.txt çalışıyor.
12. Yapılandırılmış veriler gerçek görünür içerikle tutarlı.
13. Erişilebilir form hataları ve klavye navigasyonu çalışıyor.
14. Mobilde yatay taşma yok.
15. Ana sayfa ve hizmet sayfalarında JavaScript kapalıyken ana içerik okunabiliyor.
16. README ve DEPLOYMENT dokümanları gerçek komutlarla eşleşiyor.
17. `validate:production` eksik kritik iletişim/yayın değerlerini buluyor.
18. Kullanılmayan placeholder CTA veya bozuk indirme bağlantısı yok.
19. Tasarım bilgisayar tamircisi/oyuncu ekipmanı sitesi gibi görünmüyor.
20. Son raporda kullanılan mimari, test sonuçları, manuel tamamlanacak değerler ve deploy adımları özetleniyor.

---

## 23. İkinci faz için hazırlanacak fakat uygulanmayacak konular

Kod mimarisini aşağıdaki gelecek ihtiyaçlarını engellemeyecek biçimde kur; fakat bu fazda uygulama:

- Yetkili admin paneli
- R2 görsel yükleme
- Blog içerik yönetimi
- D1 lead yönetim ekranı
- Lead durum ve not takibi
- Müşteri portalı ve ticket görünümü
- Online sözleşme/onay
- Teklif dokümanı üretimi
- Çoklu şehir landing page sistemi
- CRM ve otomasyon entegrasyonu

YAGNI ilkesini koru. Gelecekte kullanılabilir diye mevcut sürüme gereksiz servis, ORM, auth sistemi veya büyük component library ekleme.

---

## 24. Uygulama sırası

Çalışmayı şu sırayla yürüt:

1. Proje analizi ve kısa plan
2. Astro/TypeScript/Cloudflare temel kurulumu
3. Merkezi konfigürasyon ve tasarım tokenları
4. Layout, header, footer ve ortak SEO bileşenleri
5. Ana sayfa
6. Hizmet ve kurumsal sayfalar
7. Blog content collection ve başlangıç içerikleri
8. Form bileşenleri
9. Worker API, Turnstile ve D1 migration
10. Güvenlik başlıkları
11. Sitemap, robots, RSS, llms.txt ve structured data
12. Unit/E2E testleri
13. Performans ve erişilebilirlik düzeltmeleri
14. README, deployment ve legal review belgeleri
15. Production build ve final doğrulama

Her adımda çalışan sistemi koru. Son ana kadar testleri erteleme.

---

## 25. Agent'ın final cevabında bulunması gerekenler

İş bittiğinde kullanıcıya şu bilgileri kısa ve açık şekilde ver:

1. Oluşturulan site ve temel mimari
2. Başarıyla çalıştırılan test/build komutları
3. Cloudflare'a deploy etmek için kalan adımlar
4. Kullanıcının doldurması gereken gerçek bilgiler:
   - Telefon
   - WhatsApp
   - Aktif e-posta
   - Resmî şirket unvanı
   - Adres varsa adres
   - Turnstile anahtarları
   - D1 database ID
   - E-posta gönderim servisi anahtarları
5. Bilinen sınırlamalar
6. Admin panelinin neden ilk faz dışında bırakıldığı

Kullanıcıya tamamlanmamış bir şeyi tamamlanmış gibi anlatma.

---

## 26. Teknik referanslar

Uygulama sırasında en güncel resmî belgeleri esas al:

- Cloudflare Workers + Astro: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Cloudflare Workers Static Assets: https://developers.cloudflare.com/workers/static-assets/
- Workers Custom Domains: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- Cloudflare D1: https://developers.cloudflare.com/d1/get-started/
- Turnstile server-side validation: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies

Bu dokümanlarla proje talimatı arasında teknik sürüm farkı varsa güncel resmî dokümanı uygula ve final raporunda değişikliği açıkla. İş hedeflerini ve dürüst içerik sınırlarını değiştirme.

