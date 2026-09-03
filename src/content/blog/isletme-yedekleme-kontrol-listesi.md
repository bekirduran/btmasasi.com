---
title: "İşletme Yedekleri Gerçekten Çalışıyor mu? 10 Maddelik Kontrol Listesi"
description: "Yedekleme ile bulut senkronizasyonu arasındaki farkı öğrenin, veri kaybına karşı 10 maddelik uygulanabilir kontrol listesiyle işletmenizi koruyun."
pubDate: 2025-02-20
author: "Bekir Duran"
readTime: "8 dk"
tags: ["Yedekleme", "Veri Güvenliği", "İş Sürekliliği"]
relatedService: "/hizmetler/siber-guvenlik-yedekleme"
---

Birçok işletme yöneticisi "Bizim Google Drive / OneDrive'ımız var, her şey yedekleniyor" ya da "Bilgisayarcımız bir harici disk bağlamıştı" diyerek verilerinin güvende olduğunu düşünür. Ancak fidye yazılımı (ransomware) saldırısı veya bir disk bozulması yaşandığında acı gerçek ortaya çıkar: Senkronizasyon bir yedekleme değildir.

Bu rehberde, işletmenizin kritik muhasebe, teklif ve müşteri verilerini korumak için uygulayabileceğiniz temel prensipleri ve 10 maddelik pratik kontrol listesini bulabilirsiniz.

---

## 1. Bulut Senkronizasyonu ile Yedekleme Arasındaki Kritik Fark

OneDrive, Google Drive veya Dropbox gibi servisler dosyalarınızı birden fazla cihaz arasında **senkronize** eder. Yani bir bilgisayardaki dosya silindiğinde veya fidye yazılımı tarafından şifrelendiğinde, bu şifrelenmiş bozuk hali anında buluta da yansır.

Gerçek bir yedekleme ise:

*   Üretim ortamından bağımsız, değiştirilemez (immutable) veya çevrimdışı bir alanda tutulur.
*   Zaman içinde geriye dönük sürümleri (snapshot) saklar.
*   Kullanıcıların doğrudan silme yetkisine kapalıdır.

---

## 2. RPO ve RTO: İşletmeniz Ne Kadar Veri Kaybını Kaldırabilir?

Yedekleme stratejisi belirlerken iki teknik terimi işletme diliyle anlamak gerekir:

*   **RPO (Kurtarma Noktası Hedefi):** Ne kadarlık veri kaybını kabul edebilirsiniz? Örneğin, yedekler günde bir kez gece 23:00'te alınıyorsa, öğleden sonra saat 15:00'te yaşanan bir çökmede o günkü tüm fatura ve irsaliyeler kaybolur. Bu kayıp sizin için tolere edilebilir mi?
*   **RTO (Kurtarma Süresi Hedefi):** Sistem çöktükten sonra yeniden çalışır hale gelmesi kaç saat sürebilir? 4 saat mi, 2 gün mü?

---

## 10 Maddelik İşletme Yedekleme Kontrol Listesi

Aşağıdaki kontrol listesini teknik ekibinizle veya dış kaynak BT sağlayıcınızla birlikte gözden geçirebilirsiniz:

| No | Kontrol Maddesi | Durum | Öncelik |
|---|---|---|---|
| 1 | **Kritik Veri Envanteri:** Muhasebe (LOGO, Mikro, Zirve vb.), CAD çizimleri ve şirket sözleşmelerinin nerede tutulduğu net mi? | ☐ Evet / ☐ Hayır | Yüksek |
| 2 | **3-2-1 Kuralı:** Verinin 3 kopyası, 2 farklı ortamda (örneğin sunucu + NAS) ve 1 kopyası şirket dışı/bulutta mı? | ☐ Evet / ☐ Hayır | Yüksek |
| 3 | **Fidye Yazılımı İzolasyonu:** Yedek diski veya NAS cihazı ağdaki tüm kullanıcıların erişimine açık mı yoksa özel yetkili bir hesapla mı korunuyor? | ☐ Evet / ☐ Hayır | Kritik |
| 4 | **Otomatik Hata Bildirimi:** Yedekleme başarısız olduğunda sistem yetkiliye derhal e-posta/SMS uyarısı gönderiyor mu? | ☐ Evet / ☐ Hayır | Yüksek |
| 5 | **Sürümleme (Retention):** Yanlışlıkla silinen veya bozulan bir dosyanın 30 gün önceki haline dönülebiliyor mu? | ☐ Evet / ☐ Hayır | Orta |
| 6 | **Geri Yükleme (Restore) Testi:** Son 3 ay içinde yedekten gerçek bir geri yükleme denemesi yapıldı mı? | ☐ Evet / ☐ Hayır | Kritik |
| 7 | **Yedeklerin Şifrelenmesi:** Dışarıya alınan yedekler çalınma veya sızıntı riskine karşı şifrelenmiş (AES-256 vb.) mi? | ☐ Evet / ☐ Hayır | Yüksek |
| 8 | **Yazılım & Donanım Güncelliği:** Yedekleme yazılımı ve kullanılan NAS cihazlarının güvenlik yamaları güncel mi? | ☐ Evet / ☐ Hayır | Orta |
| 9 | **Sorumlu Belirleme:** Şirket içinde yedeklerin başarılı olduğunu günlük kontrol eden isim belirlenmiş mi? | ☐ Evet / ☐ Hayır | Yüksek |
| 10 | **Acil Durum Planı:** Ana sunucu yandığında veya çalındığında yeni bir bilgisayara ne kadar sürede kurulum yapılacağı yazılı mı? | ☐ Evet / ☐ Hayır | Kritik |

---

## Geri Yükleme Testi Neden Hayatidir?

"Yedek başarıyla tamamlandı" ibaresi, verinin sağlam bir şekilde geri yüklenip çalıştırılabileceğini tek başına kanıtlamaz. Bazen bozuk bir veritabanı dosyası sağlammış gibi yedeklenebilir. Bu yüzden periyodik olarak rastgele seçilen bir yedek dosyasının test sunucusunda açılarak kontrol edilmesi gerekir.

BT Masası olarak, müşterilerimizin yedekleme operasyonlarını günlük izler ve sözleşme kapsamında periyodik geri yükleme testleri gerçekleştiririz.

Yedekleme ve iş sürekliliği çözümlerimiz hakkında bilgi almak için [Siber Güvenlik ve Yedekleme](/hizmetler/siber-guvenlik-yedekleme) sayfamızı ziyaret edebilirsiniz.
