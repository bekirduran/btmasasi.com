export interface Sector {
  slug: string; name: string; title: string; summary: string; audience: string;
  needs: { title: string; problem: string; approach: string }[];
  deliverables: string[]; exclusions: string[]; questions: { q: string; a: string }[];
  services: string[]; scenario: { title: string; problem: string; steps: string[]; measurement: string };
}
export const sectors: Sector[] = [
  {
    slug: 'uretim-osb', name: 'Üretim ve OSB', title: 'Üretim ve OSB İşletmeleri İçin BT Desteği',
    summary: 'Üretim ofisi, sevkiyat, depo ve yönetim ekiplerinin bilgisayar, ağ ve dosya erişimini kayıtlı bir destek süreciyle yönetin.',
    audience: 'Üretim yapan, depo ve sevkiyat yazılımları kullanan; ofis BT altyapısı ile makine sistemlerinin sorumluluklarını ayırmak isteyen işletmeler.',
    needs: [
      { title: 'Üretim ve ofis ağının ayrılması', problem: 'Ofis cihazındaki bir sorun üretim terminaline erişimi de etkileyebilir.', approach: 'Mevcut bağlantılar ve cihaz sorumluları belgelenir. Ağ ayrıştırması, yetkili makine/otomasyon tedarikçisiyle koordineli ve planlı bakım aralığında tasarlanır.' },
      { title: 'Sevkiyat ve etiketleme sürekliliği', problem: 'Barkod yazıcısı, paylaşımlı klasör veya kullanıcı hesabındaki kesinti sevkiyatı aksatabilir.', approach: 'Kesintinin cihaz, ağ veya uygulama katmanı ayrıştırılır; ERP tedarikçisiyle kayıt üzerinden koordinasyon kurulur. Kritik ekipman ve geri dönüş adımları belirlenir.' },
      { title: 'Yedeklerden geri dönebilme', problem: 'Yedekleme kaydı başarılı görünse de gerekli dosyanın geri getirilebildiği bilinmeyebilir.', approach: 'İşletmenin kabul ettiği veri kaybı ve toparlanma hedefleri kaydedilir; örnek dosya veya uygun test ortamında geri yükleme sonucu raporlanır.' },
    ],
    deliverables: ['Ofis/üretim BT cihaz envanteri ve sorumluluk matrisi', 'Ağ erişim şeması ve planlı bakım listesi', 'Yedekleme kontrol kaydı ve üzerinde anlaşılan geri yükleme testi'],
    exclusions: ['PLC programlama, makine emniyet sistemleri ve üretim reçetesi değişiklikleri', 'ERP geliştirme, üretim duruşu garantisi ve donanım/parça bedelleri'],
    questions: [{ q: 'Çalışan üretim sistemine uzaktan müdahale edilir mi?', a: 'İşletmenin yetkilendirmesi ve üretim sorumlusunun onayladığı bakım planı olmadan kritik sistemde değişiklik yapılmaz. İş güvenliği ve makine üreticisinin sınırları önceliklidir.' }, { q: 'Yerinde keşif gerekli mi?', a: 'Fiziksel ağ, kabinet, kablolama ve cihaz yerleşimi için yerinde keşif gerekebilir. Lokasyon ve ziyaret takvimi teklif öncesinde değerlendirilir.' }],
    services: ['network-sunucu', 'siber-guvenlik-yedekleme', 'yonetilen-bt-hizmetleri'],
    scenario: { title: 'Sevkiyat bilgisayarı ve paylaşımlı klasör kesintisi', problem: 'Örnek bir üretim işletmesinde sevkiyat ekibi etiket şablonlarına erişemiyor.', steps: ['Kullanıcı, paylaşım ve ağ erişimini ayrı ayrı kontrol etme', 'Uygulama tedarikçisi ile geri dönüş planını belirleme', 'Yetkileri belgeleme ve sonraki bakımda erişim testini tekrarlama'], measurement: 'Talebin açılış ve kapanış zamanı, etkilenen kullanıcı sayısı ve sonraki dönemde tekrar eden kesinti sayısı izlenir.' },
  },
  {
    slug: 'muhasebe-mali-musavirlik', name: 'Muhasebe ve Mali Müşavirlik', title: 'Muhasebe Ofisleri İçin Kurumsal IT Desteği',
    summary: 'Mükellef dosyaları, muhasebe uygulamaları, e-imza kullanılan bilgisayarlar ve yedekleri için düzenli teknik destek.',
    audience: 'Birden fazla çalışanın müşteri dosyalarına eriştiği muhasebe, mali müşavirlik ve finans operasyon ofisleri.',
    needs: [
      { title: 'Yoğun dönem öncesi hazırlık', problem: 'Tarayıcı, e-imza sürücüsü veya uygulama uyumsuzluğu son günlerde iş yükünü artırabilir.', approach: 'İşletmenin kullandığı uygulamalar ve sağlayıcıları listelenir. Güncellemeler yoğun dönemin dışına planlanır; desteklenen bileşenlerin uyumu örnek kullanıcıyla kontrol edilir.' },
      { title: 'Mükellef dosyalarının erişimi', problem: 'Ortak hesaplar ve herkese açık klasörler hangi dosyaya kimin eriştiğini belirsizleştirir.', approach: 'Kişiye özel hesaplar ve görevle sınırlı klasör yetkileri hazırlanır. İşe giriş/ayrılış adımları sorumlu kişiyle birlikte kayıt altına alınır.' },
      { title: 'Uygulama verilerinin yedeklenmesi', problem: 'Açık veritabanı dosyasının kopyalanması kullanılabilir bir yedek oluşturmayabilir.', approach: 'Muhasebe uygulaması sağlayıcısının desteklediği yedekleme yöntemi kullanılır. Yedek raporu incelenir ve uygun test ortamında geri yükleme doğrulanır.' },
    ],
    deliverables: ['Uygulama ve lisans sorumluları listesi', 'Klasör erişim matrisi ve ayrılan çalışan kontrol listesi', 'Yedekleme takvimi, kontrol kaydı ve geri yükleme test özeti'],
    exclusions: ['Vergi/mali danışmanlık ve beyanname işlemlerinin yürütülmesi', 'Mükellef adına imza atılması ve üçüncü taraf muhasebe lisansları'],
    questions: [{ q: 'Muhasebe yazılımımızın desteğini de siz mi verirsiniz?', a: 'Bilgisayar, ağ ve erişim tarafını inceleriz; uygulamaya özgü hata veya veritabanı işlemini yazılım sağlayıcısıyla koordine ederiz. Yetki ve kapsam teklif aşamasında ayrılır.' }, { q: 'Uzaktan destek sırasında hangi erişim gerekir?', a: 'İşlem için gerekli cihaz ve uygulamaya sınırlı, yetkili erişim gerekir. Kullanıcı parolası veya e-imza PIN bilgisi genel iletişim formuna yazılmamalıdır.' }],
    services: ['kurumsal-it-destek', 'siber-guvenlik-yedekleme', 'microsoft-365-bulut'],
    scenario: { title: 'Yoğun dönem öncesi yedek ve erişim kontrolü', problem: 'Örnek bir muhasebe ofisi yedeklerin geri yüklenebildiğinden ve eski çalışan hesaplarının kapatıldığından emin değil.', steps: ['Hesap ve uygulama envanterini yetkiliyle karşılaştırma', 'Yazılım sağlayıcısının desteklediği test yöntemiyle yedeği doğrulama', 'Eksik yetkileri ve bakım takvimini yazılı olarak bildirme'], measurement: 'Kontrol edilen hesaplar, başarılı geri yükleme testleri ve giderilmeyi bekleyen bulgular takip edilir.' },
  },
  {
    slug: 'lojistik-toptan', name: 'Lojistik ve Toptan Satış', title: 'Lojistik ve Toptan Satış İşletmeleri İçin BT Desteği',
    summary: 'Depo terminalleri, barkod yazıcıları, sipariş bilgisayarları ve şubeler arası bağlantılar için koordineli destek.',
    audience: 'Depo, saha veya satış ekiplerinin aynı sipariş ve stok sistemleri üzerinde çalıştığı işletmeler.',
    needs: [
      { title: 'Depo bağlantılarının kararlılığı', problem: 'Belirli raf veya çalışma alanındaki bağlantı kopmaları cihaz arızasıyla karıştırılabilir.', approach: 'Sorunun alan, cihaz ve erişim noktasıyla ilişkisi kaydedilir. Fiziksel kapsama ölçümü gerektiğinde yerinde çalışma planlanır.' },
      { title: 'Barkod ve yazdırma sorunları', problem: 'Yanlış yazıcı kuyruğu, sürücü veya ağ adresi sipariş hazırlamayı aksatabilir.', approach: 'Yazıcı envanteri ve standart kurulum bilgisi tutulur. Etiket tasarımı ve uygulama çıktısı yazılım sağlayıcısıyla birlikte ayrıştırılır.' },
      { title: 'Şubeler arası erişim', problem: 'VPN veya internet kesintisi şubelerin merkezi uygulamaya erişimini durdurabilir.', approach: 'İnternet, yönlendirici ve kullanıcı bağlantıları ayrı kontrol edilir. Tedarikçi iletişimi ve alternatif çalışma adımları dokümante edilir.' },
    ],
    deliverables: ['Depo/şube cihaz ve bağlantı listesi', 'Yazıcı kurulum standardı', 'VPN erişim ve tedarikçi eskalasyon planı'],
    exclusions: ['Stok doğruluğu ve sevkiyat süresi garantisi', 'WMS/ERP yazılım geliştirme ve saha kablolaması bedelleri'],
    questions: [{ q: 'Tüm şubeler tek sözleşmede olabilir mi?', a: 'Evet, kullanıcı ve cihaz sayıları ile her lokasyonun bağlantı ve ziyaret ihtiyacı ayrı belirtilerek tek hizmet kapsamı hazırlanabilir.' }, { q: 'El terminalleri uzaktan kontrol edilebilir mi?', a: 'Cihazın işletim sistemi, yönetim yazılımı ve ağ bağlantısı uygunsa destek verilebilir. Fiziksel arızalar ve kapsama ölçümleri için yerinde işlem gerekir.' }],
    services: ['network-sunucu', 'kurumsal-it-destek', 'yonetilen-bt-hizmetleri'],
    scenario: { title: 'Depoda tekrarlayan barkod yazdırma kesintisi', problem: 'Örnek bir depoda bazı sipariş bilgisayarları etiketi yazdıramıyor.', steps: ['Sorunlu cihaz ve yazıcı kuyruğunu karşılaştırma', 'Sürücü, ağ adresi ve uygulama çıktısını ayırma', 'Standart kurulum kaydını diğer yetkili cihazlara uygulama'], measurement: 'Tekrar açılan yazdırma talepleri ve etkilenen iş istasyonu sayısı üzerinden takip yapılır.' },
  },
  {
    slug: 'cok-subeli-isletmeler', name: 'Çok Şubeli İşletmeler', title: 'Çok Şubeli İşletmeler İçin Uzaktan BT Yönetimi',
    summary: 'Farklı şehirlerdeki kullanıcıları, cihazları, hesapları ve destek taleplerini ortak bir hizmet standardında birleştirin.',
    audience: 'Merkez ofisiyle birlikte farklı lokasyonlarda çalışan ekipleri bulunan satış, hizmet ve operasyon işletmeleri.',
    needs: [
      { title: 'Ortak cihaz ve hesap standardı', problem: 'Her şubenin farklı kurulumları destek süresini ve yetki karmaşasını artırabilir.', approach: 'Merkez ve şubeler için temel cihaz, güncelleme ve hesap standardı belirlenir. İstisnalar ve yerel sorumlular kaydedilir.' },
      { title: 'Merkezi destek takibi', problem: 'Telefon ve kişisel mesajlarda kalan taleplerin önceliği ve sonucu takip edilemeyebilir.', approach: 'Talepler lokasyon ve etkilenen kullanıcı bilgisiyle kayıt altına alınır. İş etkisine göre önceliklendirme ve aylık değerlendirme yapılır.' },
      { title: 'Yerel müdahalenin koordinasyonu', problem: 'Her fiziksel arıza uzaktan çözülemez ve her şehirde aynı ziyaret modeli uygulanamaz.', approach: 'Uzaktan çözülebilen işler ile yerel kişi/tedarikçi gerektiren adımlar ayrılır. Aksaray ve çevre illerde planlı ziyaret uygunluğu ayrıca değerlendirilir.' },
    ],
    deliverables: ['Lokasyon bazlı cihaz ve sorumlu kişi envanteri', 'Ortak hesap açma/kapatma ve cihaz kurulum standardı', 'Şube ve sorun türüne göre destek raporu'],
    exclusions: ['Türkiye genelinde garantili aynı gün yerinde müdahale', 'Şube internet abonelikleri, cihaz alımları ve uygulama lisansları'],
    questions: [{ q: 'Türkiye genelindeki şubelerimiz destek alabilir mi?', a: 'İnternet ve yetkili uzak erişim sağlanan şubeler uzaktan hizmet kapsamına alınabilir. Fiziksel müdahale yöntemi her lokasyon için ayrıca belirlenir.' }, { q: 'Fiyat yalnızca toplam bilgisayar sayısına mı bağlıdır?', a: 'Kullanıcı sayısının yanında şube sayısı, bağlantı yapısı, sunucular, mesai kapsamı ve yerinde ziyaret ihtiyacı değerlendirilir.' }],
    services: ['yonetilen-bt-hizmetleri', 'network-sunucu', 'microsoft-365-bulut'],
    scenario: { title: 'Farklı şehirlerde standart olmayan kullanıcı hesapları', problem: 'Örnek bir işletmede yeni çalışanlar her şubede farklı yöntemle sisteme ekleniyor.', steps: ['Şube sorumluları ve mevcut hesapları envantere alma', 'Yetki onayı ve cihaz teslim adımlarını standartlaştırma', 'Ayrılan çalışan kontrolünü düzenli rapora bağlama'], measurement: 'Eksik hesap kapatma kayıtları, standart dışı kurulumlar ve tekrar eden destek talepleri izlenir.' },
  },
  {
    slug: 'otel-konaklama', name: 'Otel ve Konaklama', title: 'Otel ve Konaklama İşletmeleri İçin BT Desteği',
    summary: 'Resepsiyon, yönetim ve misafir ağı arasındaki teknik ihtiyaçları ayrı ele alan destek ve bakım planı.',
    audience: 'Resepsiyon yazılımı, rezervasyon bilgisayarları, yazıcı ve misafir interneti kullanan konaklama işletmeleri.',
    needs: [
      { title: 'Resepsiyon cihazlarının önceliği', problem: 'Tek bir bilgisayar veya yazıcı arızası giriş/çıkış işlemlerini aksatabilir.', approach: 'Kritik cihazlar ve uygulama sağlayıcıları listelenir. İş etkisine göre önceliklendirme ve alternatif işlem planı hazırlanır.' },
      { title: 'Misafir ve ofis ağının ayrılması', problem: 'Misafir cihazlarının işletme bilgisayarlarıyla aynı ağda olması erişim riskini artırabilir.', approach: 'Mevcut ağ yapısı incelenir; yetki, kablosuz erişim ve tedarikçi sorumlulukları planlanır. Fiziksel kapsama kontrolü ayrı keşif gerektirebilir.' },
      { title: 'Bakım saatlerinin planlanması', problem: 'Yoğun saatlerde yapılan güncellemeler operasyonu kesintiye uğratabilir.', approach: 'Resepsiyon sorumlusuyla bakım aralığı ve geri dönüş planı belirlenir. Mesai dışı çalışma gerekiyorsa ayrıca kapsamlandırılır.' },
    ],
    deliverables: ['Resepsiyon ve ofis cihaz öncelik listesi', 'Misafir/ofis ağı sorumluluk ve erişim şeması', 'Bakım takvimi ve yedekleme kontrol kaydı'],
    exclusions: ['Rezervasyon/PMS yazılım geliştirme ve oda satış garantisi', 'Kesintisiz 7/24 yerinde personel ve internet sağlayıcısı hizmet bedeli'],
    questions: [{ q: 'Rezervasyon yazılımını değiştirmeniz gerekiyor mu?', a: 'Hayır. Mevcut yazılımın bilgisayar, ağ ve erişim gereksinimleri incelenir; uygulama içi işlemler yetkili PMS sağlayıcısıyla yürütülür.' }, { q: 'Misafir interneti şikâyetlerini uzaktan çözebilir misiniz?', a: 'Yönetilebilir cihazlarda yapılandırma ve bağlantı durumu uzaktan incelenebilir. Kapsama, kablo veya fiziksel cihaz arızası için keşif gerekir.' }],
    services: ['network-sunucu', 'kurumsal-it-destek', 'siber-guvenlik-yedekleme'],
    scenario: { title: 'Yoğun saatlerde resepsiyon bağlantı sorunu', problem: 'Örnek bir konaklama işletmesinde rezervasyon bilgisayarı aralıklı bağlantı kaybediyor.', steps: ['Bilgisayar, yerel ağ ve uygulama erişimini karşılaştırma', 'Yoğun saat dışında gerekli bakım adımını planlama', 'Resepsiyon ekibine alternatif iletişim ve destek adımlarını bildirme'], measurement: 'Bağlantı sorunlarının zamanı, tekrar sıklığı ve uygulanan bakım kayıtları değerlendirilir.' },
  },
  {
    slug: 'profesyonel-ofisler', name: 'Profesyonel Ofisler', title: 'Mühendislik, Mimarlık ve Hizmet Ofisleri İçin BT Desteği',
    summary: 'Proje dosyaları, bulut hesapları, taşınabilir bilgisayarlar ve ekip içi paylaşım için yönetilebilir bir BT düzeni.',
    audience: 'Mühendislik, mimarlık, danışmanlık ve profesyonel hizmet ekipleri; ofis dışında da dosyalarına erişmesi gereken çalışanlar.',
    needs: [
      { title: 'Proje dosyalarının kontrollü paylaşımı', problem: 'Kişisel bulut hesapları ve farklı klasör kopyaları güncel dosyanın bulunmasını zorlaştırabilir.', approach: 'Dosya sahipliği, paylaşım yetkileri ve sürüm saklama ihtiyaçları belirlenir. NAS veya kurumsal bulut seçimi uygulama uyumuna göre yapılır.' },
      { title: 'Dizüstü cihaz güvenliği', problem: 'Kayıp cihaz veya ortak parola kullanımı iş dosyalarını riske atabilir.', approach: 'Desteklenen cihazlarda disk şifreleme, çok faktörlü doğrulama ve güncelleme durumu kontrol edilir. Kurtarma bilgilerinin yetkili saklanması planlanır.' },
      { title: 'Uygulama ve donanım uyumu', problem: 'Büyük proje dosyalarında yavaşlık yazılım sürümü, donanım veya ağ kaynaklı olabilir.', approach: 'Sorunun hangi aşamada oluştuğu ölçülür; lisans ve donanım ihtiyacı uygulama sağlayıcısının gereksinimleriyle karşılaştırılır.' },
    ],
    deliverables: ['Dosya sahipliği ve paylaşım yetkileri listesi', 'Cihaz güvenliği kontrol özeti', 'Uygulama/lisans envanteri ve bakım önerileri'],
    exclusions: ['Mühendislik/hukuk danışmanlığı ve proje çizimi', 'CAD/BIM lisansları, donanım yükseltmeleri ve fiziksel veri kurtarma'],
    questions: [{ q: 'Mevcut bulut hesabımızı kullanabilir miyiz?', a: 'Kurumsal sahiplik, lisans ve güvenlik durumu uygunsa mevcut hesaplarla ilerlenebilir. Taşıma gerekiyorsa ayrıca planlanır.' }, { q: 'Büyük proje dosyaları buluta taşınmalı mı?', a: 'Tek bir doğru yoktur. Dosya boyutu, eşzamanlı çalışma, uygulama desteği, internet kapasitesi ve yedekleme ihtiyacı birlikte değerlendirilir.' }],
    services: ['microsoft-365-bulut', 'kurumsal-it-destek', 'siber-guvenlik-yedekleme'],
    scenario: { title: 'Proje dosyalarının farklı kişisel hesaplara dağılması', problem: 'Örnek bir ofiste proje ekibi hangi dosyanın güncel olduğunu takip edemiyor.', steps: ['Dosya sahipleri ve iş paylaşımını belirleme', 'Uygun kurumsal paylaşım ve erişim yapısını planlama', 'Yedekleme ve çalışan ayrılışı adımlarını belgeleme'], measurement: 'Erişim yetkisi tamamlanan klasörler ve tekrarlayan dosya erişim sorunları izlenir.' },
  },
];
