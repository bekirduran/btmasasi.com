# BT Masası — Hukuki İnceleme ve Doğrulama Notları

Bu belge, `btmasasi.com` üzerinde yayınlanan yasal sayfaların (`/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi`, `/kullanim-kosullari`) yayına alınmadan önce bir bilişim hukuku uzmanı veya hukuk danışmanı tarafından gözden geçirilmesi gereken maddelerini listeler.

---

## 1. Hukuk Danışmanı Tarafından Doğrulanacak Maddeler

### A. Veri Sorumlusu ve Şirket Unvanı
*   **Mevcut Durum:** Web sitesinde kurucu olarak **Bekir Duran** ve ticari marka adı olarak **BT Masası** kullanılmaktadır.
*   **Hukuki Gereklilik:** Şirket resmi olarak şahıs şirketi veya limited şirket statüsünde tescil edildiğinde, MERSİS numarası, vergi dairesi ve tam resmi ticaret unvanı `src/config/site.ts` dosyasına girilmeli ve aydınlatma metnine eklenmelidir.

### B. Yurt Dışı Veri Aktarımı Değerlendirmesi
*   **Altyapı:** Web sitesi formu ve veritabanı Cloudflare (Workers & D1) altyapısında çalışmaktadır.
*   **Hukuki Gereklilik:** KVKK'nın 9. maddesinde yapılan güncel değişiklikler (standart sözleşmeler, bağlayıcı şirket kuralları vb.) doğrultusunda, form üzerinden alınan verilerin global bulut sağlayıcıları üzerindeki işlenme statüsü hukukçu tarafından teyit edilmelidir.

### C. Veri Saklama ve İmha Süresi (Retention Period)
*   **Mevcut Durum:** Yasal metinlerde kesin bir yıl belirtilmemiş, genel saklama prensipleri yazılmıştır.
*   **Hukuki Gereklilik:** Şirketin veri saklama ve imha politikası hazırlanmalı; teklif aşamasında kalan lead'lerin ne kadar süre sonra D1 üzerinden silineceği netleştirilmelidir (`TODO_LEGAL_RETENTION_PERIOD`).

### D. Hizmet Seviyesi Taahhütleri (SLA) ve Sözleşmeler
*   **Mevcut Durum:** Web sitesindeki P1-P4 öncelik seviyeleri ve yanıt süreleri açıklayıcı model olarak sunulmuş, mutlak bir hukuki garanti içermediği belirtilmiştir.
*   **Hukuki Gereklilik:** Müşterilerle imzalanacak ıslak imzalı veya güvenli e-imzalı "Yönetilen BT Hizmet Sözleşmesi" şablonu bir avukat tarafından hazırlanmalıdır.

---

## 2. Eksik Bilgi Tamamlama Yolu

Hukuki inceleme tamamlandığında ve resmi şirket kuruluşu gerçekleştiğinde:
1.  `src/config/site.ts` dosyasını açın.
2.  `legalCompanyName`, `address`, `phoneDisplay`, `phoneE164` alanlarını doldurun.
3.  `npm run validate:production` komutunu çalıştırarak tüm alanların doğrulandığını teyit edin.
