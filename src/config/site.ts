/**
 * Merkezi İşletme Yapılandırması (Single Source of Truth)
 * 
 * Bu dosya, tüm sitede (sayfalar, şemalar, footer, iletişim kanalları)
 * kullanılan NAP (Name, Address, Phone) ve kurumsal bilgileri içerir.
 * Doğrulanmamış veya henüz atanmamış bilgiler null olarak tanımlanır.
 */

export interface SiteConfig {
  readonly brandName: string;
  readonly descriptor: string;
  readonly legalCompanyName: string | null;
  readonly founderName: string;
  readonly founderTitle: string;
  readonly domain: string;
  readonly email: string | null;
  readonly phoneDisplay: string | null;
  readonly phoneE164: string | null;
  readonly whatsappE164: string | null;
  readonly city: string;
  readonly country: string;
  readonly address: string | null;
  readonly primaryServiceArea: readonly string[];
  readonly remoteServiceArea: string;
  readonly businessHours: string;
  readonly socialLinks: Readonly<Record<string, string>>;
  readonly googleBusinessProfileUrl: string | null;
  readonly showPrices: boolean;
}

export const siteConfig: SiteConfig = {
  brandName: "BT Masası",
  descriptor: "Bilgi Teknolojileri ve Danışmanlık",
  legalCompanyName: null, // Resmi şirket unvanı tescil edildiğinde girilecek
  founderName: "Bekir Duran",
  founderTitle: "Bilgisayar Mühendisi",
  domain: "https://btmasasi.com",
  email: "info@btmasasi.com",
  phoneDisplay: "0 (530) 112 54 68",
  phoneE164: "+905301125468",
  whatsappE164: "+905301125468",
  city: "Aksaray",
  country: "Türkiye",
  address: null,      // Doğrulanmış müşteri kabul ofis adresi atanana kadar null
  primaryServiceArea: ["Aksaray Merkez", "Aksaray Organize Sanayi Bölgesi"],
  remoteServiceArea: "Türkiye geneli",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/bekir-duran/",
  },
  googleBusinessProfileUrl: null, // GBP onayı sonrası eklenebilir
  showPrices: false,  // Sabit fiyatlar belirlendiğinde true yapılabilir
} as const;
