# BT Masası — Kurumsal Web Sitesi & Altyapısı

> **Marka:** BT Masası — Bilgi Teknolojileri ve Danışmanlık  
> **Ana Vaat:** İşletmenizin BT departmanı.  
> **Alan Adı:** `btmasasi.com`  
> **Kurucu:** Bekir Duran, Bilgisayar Mühendisi  
> **Hizmet Bölgesi:** Aksaray'da yerinde, Türkiye genelinde uzaktan yönetilen BT hizmetleri.

Bu proje; Aksaray'daki KOBİ'ler ve Türkiye genelindeki işletmeler için modern, hızlı, erişilebilir ve satış odaklı bir kurumsal web sitesidir.

---

## Teknoloji Mimarisi

*   **Frontend / SSG:** [Astro 5](https://astro.build) (Static output, zero-JS default)
*   **Stil & Tasarım:** [Tailwind CSS](https://tailwindcss.com) (Özel kurumsal renk paleti: Navy 900, Blue 600, Teal 500)
*   **İçerik:** Astro Content Collections (Markdown/MDX tabanlı, tip güvenli blog rehberleri)
*   **İkonlar:** Erişilebilir ve optimize edilmiş SVG ikonları
*   **Backend:** [Cloudflare Workers](https://developers.cloudflare.com/workers/) + Static Assets
*   **Veritabanı:** [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite tabanlı serverless lead saklama)
*   **Bot Koruması:** [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) (Sunucu tarafı doğrulama)
*   **Şema & Doğrulama:** [Zod](https://zod.dev)
*   **Test:** [Vitest](https://vitest.dev)

---

## Gereksinimler

*   **Node.js:** 22 LTS veya 24 LTS (`.nvmrc` dosyası 24 olarak tanımlanmıştır)
*   **npm:** 10+ veya 11+
*   **Cloudflare Hesabı:** Worker, D1 ve Turnstile için

---

## Hızlı Başlangıç

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Ortam Değişkenlerini Tanımlayın
`.env.example` dosyasını `.env` olarak kopyalayın:
```bash
cp .env.example .env
```
*(Geliştirme aşamasında Cloudflare resmi test anahtarları varsayılan olarak çalışır).*

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda `http://localhost:4321` adresini açın.

---

## Proje Komutları

| Komut | Açıklama |
|---|---|
| `npm run dev` | Astro yerel geliştirme sunucusunu başlatır |
| `npm run build` | Üretim (production) statik dosyalarını ve sitemap'i `dist/` dizinine derler |
| `npm run preview` | Derlenmiş `dist/` çıktısını yerel olarak önizler |
| `npm run test` | Vitest birim testlerini (Zod doğrulama, security headers, turnstile) çalıştırır |
| `npm run typecheck` | TypeScript derleme ve tip kontrollerini yürütür (`tsc --noEmit`) |
| `npm run validate:production` | Canlı yayına çıkış öncesi eksik şirket/iletişim bilgilerini raporlar |
| `npm run db:migrate:local` | Yerel D1 veritabanı şemasını uygular |
| `npm run db:migrate:remote` | Cloudflare üzerindeki gerçek D1 veritabanına şemayı uygular |
| `npm run deploy` | Statik siteyi derler ve Cloudflare Worker olarak canlıya alır |

---

## Canlıya Çıkış Öncesi Kontrol Listesi

Canlı yayına geçmeden önce aşağıdaki komutu çalıştırın:
```bash
npm run validate:production
```

Bu script; `src/config/site.ts` dosyasında henüz girilmemiş telefon numarası, doğrulanmış açık adres veya resmi şirket unvanı olup olmadığını kontrol eder.

Detaylı Cloudflare kurulum ve alan adı adımları için [DEPLOYMENT.md](./DEPLOYMENT.md) belgesini inceleyin.
