export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      {
        label: "Yönetilen BT Hizmetleri",
        href: "/hizmetler/yonetilen-bt-hizmetleri",
        description: "Cihaz, kullanıcı, güncelleme ve destek süreçlerinin düzenli yönetimi",
      },
      {
        label: "Kurumsal IT Destek",
        href: "/hizmetler/kurumsal-it-destek",
        description: "Kullanıcıların bilgisayar, e-posta, yazıcı ve ağ sorunlarına hızlı müdahale",
      },
      {
        label: "Network ve Sunucu",
        href: "/hizmetler/network-sunucu",
        description: "Kablolu/kablosuz ağ, firewall, NAS ve sunucu altyapısı yönetimi",
      },
      {
        label: "Siber Güvenlik ve Yedekleme",
        href: "/hizmetler/siber-guvenlik-yedekleme",
        description: "MFA, uç nokta koruması, erişim kontrolü ve doğrulanabilir yedekleme",
      },
      {
        label: "Microsoft 365 ve Bulut",
        href: "/hizmetler/microsoft-365-bulut",
        description: "Bulut e-posta, lisans, dosya paylaşımı ve hesap güvenliği",
      },
      {
        label: "Aksaray Yerel BT Hizmeti",
        href: "/aksaray-kurumsal-it-destek",
        description: "Aksaray Merkez ve OSB işletmelerine yerinde ve uzaktan BT desteği",
      },
    ],
  },
  {
    label: "Kimler İçin",
    href: "/kimler-icin",
  },
  {
    label: "Nasıl Çalışır?",
    href: "/nasil-calisir",
  },
  {
    label: "Paketler",
    href: "/paketler",
  },
  {
    label: "Rehber",
    href: "/rehber",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
];

export const footerNavigation = {
  services: [
    { label: "Yönetilen BT Hizmetleri", href: "/hizmetler/yonetilen-bt-hizmetleri" },
    { label: "Kurumsal IT Destek", href: "/hizmetler/kurumsal-it-destek" },
    { label: "Network ve Sunucu", href: "/hizmetler/network-sunucu" },
    { label: "Siber Güvenlik ve Yedekleme", href: "/hizmetler/siber-guvenlik-yedekleme" },
    { label: "Microsoft 365 ve Bulut", href: "/hizmetler/microsoft-365-bulut" },
    { label: "Aksaray Kurumsal IT Destek", href: "/aksaray-kurumsal-it-destek" },
  ],
  company: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Kimler İçin?", href: "/kimler-icin" },
    { label: "Nasıl Çalışır?", href: "/nasil-calisir" },
    { label: "Hizmet Modelleri ve Paketler", href: "/paketler" },
    { label: "İşletmeler İçin BT Rehberi", href: "/rehber" },
  ],
  legal: [
    { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
    { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  ],
  contact: [
    { label: "İletişim Formu", href: "/iletisim" },
    { label: "Ücretsiz BT Ön Değerlendirmesi", href: "/ucretsiz-bt-kontrolu" },
  ],
};
