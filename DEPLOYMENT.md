# BT Masası — Cloudflare ve Canlı Dağıtım (Deployment) Kılavuzu

Bu belge, `btmasasi.com` alan adının ve Cloudflare Workers + D1 + Turnstile altyapısının sıfırdan canlıya alınması için adım adım teknik talimatları içerir.

---

## 1. Alan Adı ve DNS Yapılandırması

1.  **Alan Adı:** `btmasasi.com` alan adını Cloudflare Registrar üzerinden tescil edin veya mevcut alan adınızın NS (Nameserver) kayıtlarını Cloudflare'a yönlendirin.
2.  **DNSSEC:** Cloudflare Dashboard > DNS > Ayarlar altından DNSSEC'i etkinleştirin.
3.  **Apex / WWW Yönlendirmesi:**
    *   Birincil ana adresimiz `https://btmasasi.com` (apex) olacaktır.
    *   `www.btmasasi.com` adresini kalıcı 301 yönlendirmesiyle ana adrese yönlendirmek için Cloudflare Dashboard > Rules > Redirect Rules altında şu kuralı oluşturun:
        *   Koşul: `Hostname eq "www.btmasasi.com"`
        *   Hedef: `https://btmasasi.com` (Status code: 301 Permanent)

---

## 2. Cloudflare D1 Veritabanı Kurulumu

Lead'lerin ve form başvurularının güvenle kaydedilmesi için D1 veritabanı oluşturulmalıdır:

```bash
# 1. Cloudflare oturumu açın
npx wrangler login

# 2. Veritabanını oluşturun
npx wrangler d1 create btmasasi-leads
```

Bu komutun çıktısında size verilen `database_id` değerini kopyalayın ve `wrangler.jsonc` dosyasındaki ilgili alana yapıştırın:

```jsonc
"d1_databases": [
  {
    "binding": "LEADS_DB",
    "database_name": "btmasasi-leads",
    "database_id": "BURAYA_GERCEK_D1_DATABASE_ID_GELECEK"
  }
]
```

Veritabanı tablolarını oluşturmak için migrasyonu çalıştırın:
```bash
# Yerel test için:
npm run db:migrate:local

# Cloudflare üzerindeki gerçek veritabanı için:
npm run db:migrate:remote
```

---

## 3. Cloudflare Turnstile Kurulumu

1.  Cloudflare Dashboard > **Turnstile** bölümüne gidin.
2.  **Add Site** butonuna tıklayın:
    *   Site name: `BT Masası Web`
    *   Domains: `btmasasi.com`, `www.btmasasi.com`, `localhost`
    *   Widget Mode: **Managed** (Önerilen)
3.  Oluşan **Site Key**'i `.env` dosyanıza veya ortam değişkenlerine ekleyin:
    ```bash
    PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAA...
    ```
4.  Oluşan **Secret Key**'i Cloudflare Worker'a secret olarak yükleyin:
    ```bash
    npx wrangler secret put TURNSTILE_SECRET_KEY
    ```
    (İstendiğinde secret key değerini yapıştırın).

---

## 4. İsteğe Bağlı: E-posta Bildirimi (Resend)

Form gönderildiğinde kurumsal e-postanıza anlık bildirim gelmesini isterseniz:
1.  [Resend](https://resend.com) üzerinde bir API anahtarı oluşturun.
2.  Worker'a secret olarak yükleyin:
    ```bash
    npx wrangler secret put RESEND_API_KEY
    ```

---

## 5. Dağıtım (Deploy)

Aşağıdaki komut Astro statik build'ini tamamlar ve Worker'ı Cloudflare ağına dağıtır:

```bash
npm run deploy
```

Dağıtım tamamlandıktan sonra:
1.  Cloudflare Dashboard > Workers & Pages > `btmasasi` worker'ını seçin.
2.  **Settings > Domains & Routes** bölümüne gelin.
3.  **Add > Custom Domain** seçeneğiyle `btmasasi.com` ekleyin.

---

## 6. Kurumsal E-posta ve Güvenlik (SPF, DKIM, DMARC)

`iletisim@btmasasi.com` adresinin güvenle çalışması ve maillerin spam'e düşmemesi için Cloudflare DNS sekmesinde şu kayıtları yapılandırın:

1.  **MX Kayıtları:** E-posta servis sağlayıcınızın (Microsoft 365, Google Workspace veya Yandex) MX sunucu adresleri.
2.  **SPF (TXT):**
    ```text
    v=spf1 include:spf.protection.outlook.com ~all
    ```
3.  **DKIM (CNAME):** E-posta sağlayıcınızın ürettiği 2 adet DKIM anahtarı.
4.  **DMARC (TXT):**
    *   Ad: `_dmarc.btmasasi.com`
    *   Değer: `v=DMARC1; p=none; rua=mailto:dmarc-reports@btmasasi.com`

---

## 7. Search Console ve Doğrulama

Siteniz canlıya çıktıktan sonra:
1.  [Google Search Console](https://search.google.com/search-console)'a gidin.
2.  Alan adı mülkü (Domain property) olarak `btmasasi.com` ekleyin ve DNS TXT kaydı ile doğrulayın.
3.  **Sitemaps** sekmesinden `https://btmasasi.com/sitemap-index.xml` adresini gönderin.
4.  Ana sayfa ve `/aksaray-kurumsal-it-destek` sayfaları için "URL Denetimi" (URL Inspection) çalıştırıp dizine ekleme isteğinde bulunun.
