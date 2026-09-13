export interface Service {
  slug: string; name: string; summary: string; remote: string[]; onsite: string[];
  deliverables: string[]; exclusions: string[]; pricing: string[];
  faq: { q: string; a: string }[];
}
export const services: Service[] = [
  {
    slug:'yonetilen-bt-hizmetleri', name:'Yönetilen BT Hizmetleri',
    summary:'Cihaz, kullanıcı, lisans, bakım ve destek taleplerinin tek bir sorumluluk planında takip edilmesi.',
    remote:['Kullanıcı ve cihaz envanterinin güncellenmesi','Güncelleme, yedekleme ve hesap kontrollerinin planlanması','Destek taleplerinin iş etkisine göre sınıflandırılması'],
    onsite:['İlk fiziksel envanter veya ağ keşfi','Cihaz devralma, kurulum ve yerinde doğrulama'],
    deliverables:['Devralma kontrol listesi ve yetki matrisi','Bakım takvimi ve açık risk listesi','Kapsama göre dönemsel destek ve sistem durum raporu'],
    exclusions:['Donanım, parça, lisans ve bulut abonelikleri','Yeni ofis kurulumu, taşıma ve kapsam dışı projeler'],
    pricing:['Kullanıcı ve cihaz sayısı','Sunucu, şube ve uygulama karmaşıklığı','Destek saatleri, raporlama ve ziyaret sıklığı'],
    faq:[{q:'Mevcut BT personelimizle birlikte çalışabilir misiniz?',a:'Evet. İç ekip, BT Masası ve diğer tedarikçilerin sorumlulukları ayrılarak ortak çalışma modeli kurulabilir.'},{q:'Hizmet başlangıcında ne yapılır?',a:'Mevcut erişimler, cihazlar, lisanslar ve kritik uygulamalar incelenir. Eksiklerin giderilmesi için gerekirse aylık hizmetten ayrı bir devralma çalışması teklif edilir.'}],
  },
  {
    slug:'kurumsal-it-destek', name:'Kurumsal IT Destek',
    summary:'Çalışanların bilgisayar, e-posta, yazıcı ve uygulama erişim sorunlarını kayıtlı ve önceliklendirilmiş destekle ele alın.',
    remote:['Desteklenen bilgisayarlarda kullanıcı ve işletim sistemi incelemesi','E-posta, yazıcı kuyruğu ve uygulama erişim kontrolleri','Yeni çalışan hesabı ve cihaz hazırlığının koordinasyonu'],
    onsite:['Açılmayan veya ağa bağlanamayan cihazın fiziksel incelenmesi','Yerinde ekipman kurulumu ve kullanıcı teslimi'],
    deliverables:['Talep ve müdahale kaydı','Tekrarlayan sorunlar için düzeltici işlem önerisi','Kullanıcı/cihaz teslim ve erişim kontrol listesi'],
    exclusions:['Fiziksel veri kurtarma ve parça maliyetleri','Üçüncü taraf uygulamaların kaynak kod veya veritabanı geliştirmesi'],
    pricing:['Aktif kullanıcı ve cihaz adedi','Uygulama çeşitliliği ve talep yoğunluğu','Mesai ve yerinde destek kapsamı'],
    faq:[{q:'Destek talepleri hangi sırayla ele alınır?',a:'İşletmenin çalışmasının durması, birden fazla kullanıcının etkilenmesi veya tek kullanıcı sorunu gibi iş etkileri değerlendirilir. Kesin yanıt süreleri sözleşmede belirlenir.'},{q:'Mevcut yazılım firmamızla iletişim kurar mısınız?',a:'Yetkilendirme kapsamında cihaz, ağ ve uygulama kaynaklı sorunları ayrıştırıp yazılım sağlayıcısıyla kayıtlı koordinasyon kurabiliriz.'}],
  },
  {
    slug:'network-sunucu', name:'Network ve Sunucu Desteği',
    summary:'İşletmenizin ağ, firewall, VPN, NAS ve sunucu ortamını belgelenebilir ve yönetilebilir hale getirin.',
    remote:['Yönetim erişimi olan ağ ve sunucu cihazlarında durum incelemesi','VPN, kullanıcı erişimi ve temel servis kontrolleri','Güncelleme ve yapılandırma değişikliklerinin bakım planına alınması'],
    onsite:['Kabinet, kablolama ve fiziksel bağlantı incelemesi','Kablosuz kapsama ölçümü veya yeni cihaz kurulumu'],
    deliverables:['Ağ/cihaz ve erişim sorumluları listesi','Yapılandırma yedeği ve geri dönüş planı','Bakım ve kapasite bulguları'],
    exclusions:['İnternet servis sağlayıcısının hat arızalarını giderme garantisi','Kablolama, donanım bedelleri ve üretim otomasyonu yazılımı'],
    pricing:['Sunucu ve ağ cihazı sayısı','Lokasyon, VPN ve kablosuz ağ yapısı','Bakım penceresi ve fiziksel keşif ihtiyacı'],
    faq:[{q:'İnternet kopmasını uzaktan çözebilir misiniz?',a:'Bağlantı tamamen kesilmişse uzaktan erişim mümkün olmayabilir. Telefonla ön ayrıştırma yapılır; hat sağlayıcısı veya yerel yetkiliyle fiziksel kontrol koordine edilir.'},{q:'Sunucu değişiklikleri çalışma saatinde mi yapılır?',a:'İş etkisi olan değişiklikler yetkili kişiyle kararlaştırılan bakım penceresinde, yedek ve geri dönüş adımları belirlendikten sonra uygulanır.'}],
  },
  {
    slug:'siber-guvenlik-yedekleme', name:'Siber Güvenlik ve Yedekleme',
    summary:'Hesap güvenliği, uç nokta kontrolleri ve geri yüklemesi doğrulanabilen yedekleme süreçleri.',
    remote:['MFA ve kullanıcı yetkilerinin değerlendirilmesi','Güncelleme ve desteklenen uç nokta koruma durumunun kontrolü','Yedekleme işlerinin incelenmesi ve planlı geri yükleme testi'],
    onsite:['Fiziksel yedekleme cihazı veya NAS kurulumu','Ağa erişilemeyen sistemlerde yerinde ön inceleme'],
    deliverables:['Teknik risk ve iyileştirme listesi','Yedek kapsamı, saklama ve sorumlu kişi kaydı','Üzerinde anlaşılan senaryo için geri yükleme test tutanağı'],
    exclusions:['Saldırıya uğramama veya sıfır veri kaybı garantisi','Adli bilişim, sızma testi ve fiziksel veri kurtarma; ayrıca değerlendirilir'],
    pricing:['Korunacak cihaz, hesap ve veri kapsamı','Saklama süresi, yedek hedefi ve depolama ihtiyacı','Geri yükleme testi ve izleme sıklığı'],
    faq:[{q:'Başarılı yedekleme kaydı yeterli mi?',a:'Yedeğin ilgili uygulama veya dosya için geri kullanılabildiğini test etmek gerekir. Test kapsamı ve çalışma ortamı işletmeyle önceden belirlenir.'},{q:'RPO ve RTO garantisi veriliyor mu?',a:'Kabul edilebilir veri kaybı ve toparlanma hedefleri altyapı analiziyle belirlenir. Uygulanabilir hedefler ve istisnalar yazılı kapsamda netleştirilir.'}],
  },
  {
    slug:'microsoft-365-bulut', name:'Microsoft 365 ve Bulut Desteği',
    summary:'Kurumsal e-posta, kullanıcı, lisans ve dosya paylaşımı için kontrollü bulut yönetimi.',
    remote:['Yetkili yönetim erişimiyle kullanıcı ve lisans kontrolleri','E-posta, MFA ve paylaşım ayarlarının değerlendirilmesi','Yeni çalışan ve ayrılan çalışan hesap süreçlerinin düzenlenmesi'],
    onsite:['Cihaz üzerinde ilk kurulum ve kullanıcı uyumluluk kontrolü','Gerekirse planlı ekip eğitimi veya geçiş desteği'],
    deliverables:['Hesap sahipliği ve lisans envanteri','Paylaşım/yetki ve çok faktörlü doğrulama kontrol özeti','Değişiklik kaydı ve geçiş gerekiyorsa ayrı geçiş planı'],
    exclusions:['Microsoft veya başka sağlayıcıların lisans/abonelik bedelleri','Sağlayıcı kaynaklı genel hizmet kesintilerinin giderilmesi garantisi'],
    pricing:['Kullanıcı ve hesap adedi','Mevcut alan adı, tenant ve e-posta yapısı','Veri taşıma, paylaşım düzenleme ve eğitim kapsamı'],
    faq:[{q:'Alan adı ve yönetici hesabı kime ait olur?',a:'Kurumsal hesap ve alan adı sahipliği işletmede kalmalıdır. BT Masası için gerekli yönetim yetkileri işletmenin onayıyla ve kapsamı belirlenerek tanımlanır.'},{q:'E-posta taşımak ayrı proje midir?',a:'Kaynak sistem, veri hacmi, kesinti toleransı ve lisanslar değerlendirilerek geçiş ayrı kapsamlandırılabilir. Önce plan ve doğrulama adımları hazırlanır.'}],
  },
  {
    slug:'kvkk-teknik-uyum', name:'KVKK Teknik Uyum Desteği',
    summary:'Kişisel veri içeren sistemler, erişimler, yedekler ve teknik kontroller için mevcut durum incelemesi.',
    remote:['Kullanılan sistemler ve teknik sorumluların envanteri','Hesap, erişim ve yedekleme uygulamalarının değerlendirilmesi','Teknik bulguların sorumlu ve öncelik bilgisiyle raporlanması'],
    onsite:['Fiziksel cihaz, kayıt ortamı ve ağ erişimi keşfi','Yerinde uygulanması gereken teknik kontrol çalışmalarının planlanması'],
    deliverables:['Teknik sistem ve erişim haritası','Önceliklendirilmiş teknik bulgu listesi','İyileştirme planı ve takip kayıtları'],
    exclusions:['Hukuki danışmanlık, resmi uygunluk sertifikası ve mevzuata tam uyum garantisi','VERBİS yükümlülüğü kararı ve işletme adına resmi başvuru'],
    pricing:['Sistem, lokasyon ve kullanıcı kapsamı','İncelemenin derinliği ve mevcut dokümantasyon','İyileştirme çalışmalarının uygulanması ve takip kapsamı'],
    faq:[{q:'Bu çalışma hukuki KVKK danışmanlığı mıdır?',a:'Çalışma teknik sistem ve güvenlik kontrollerine odaklanır. Hukuki değerlendirmeler işletmenin yetkili hukuk danışmanıyla yürütülmelidir.'},{q:'İlk görüşmede hangi bilgiler yeterlidir?',a:'Sistemlerin türü, kullanıcı sayısı, teknik sorumlular ve öncelikli endişeler yeterlidir. Başvuru formunda parola veya kişisel veri içeren dosyalar paylaşılmamalıdır.'}],
  },
];
