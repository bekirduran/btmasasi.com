import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from '../src/config/site';

interface ValidationResult {
  passed: boolean;
  warnings: string[];
  errors: string[];
}

function validateProduction(): ValidationResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  console.log('\n🔍 BT Masası — Production Hazırlık ve Dağıtım Doğrulaması\n');

  // 1. İletişim E-posta Kontrolü
  if (!siteConfig.email || siteConfig.email.includes('example.com')) {
    errors.push('CRITICAL: siteConfig.email geçerli bir kurumsal e-posta olmalıdır.');
  } else {
    console.log(`✅ E-posta: ${siteConfig.email}`);
  }

  // 2. Telefon Bilgileri Kontrolü
  if (!siteConfig.phoneDisplay || !siteConfig.phoneE164) {
    warnings.push('BİLGİ: Telefon numarası henüz tanımlanmamış (siteConfig.phoneDisplay / phoneE164 null). Arayüzde sahte numara gösterilmeyecektir.');
  } else {
    console.log(`✅ Telefon: ${siteConfig.phoneDisplay}`);
  }

  // 3. WhatsApp Numarası
  if (!siteConfig.whatsappE164) {
    warnings.push('BİLGİ: WhatsApp hattı henüz tanımlanmamış (siteConfig.whatsappE164 null).');
  }

  // 4. Şirket Resmi Unvanı ve Adres
  if (!siteConfig.legalCompanyName) {
    warnings.push('BİLGİ: Resmi şirket unvanı henüz girilmemiş. Sitede genel marka adı (BT Masası) kullanılmaktadır.');
  }

  if (!siteConfig.address) {
    warnings.push('BİLGİ: Fiziksel müşteri ofis adresi atanmamış. Harita embed edilmemiştir.');
  }

  // 5. Wrangler Yapılandırması Kontrolü
  const wranglerPath = path.resolve(process.cwd(), 'wrangler.jsonc');
  if (fs.existsSync(wranglerPath)) {
    const wranglerContent = fs.readFileSync(wranglerPath, 'utf-8');
    if (wranglerContent.includes('TODO_D1_DATABASE_ID')) {
      warnings.push('CLOUDFLARE: wrangler.jsonc içinde D1 database_id "TODO_D1_DATABASE_ID" olarak duruyor. Canlıya çıkmadan önce "wrangler d1 create btmasasi-leads" çıktısındaki ID girilmelidir.');
    } else {
      console.log('✅ Cloudflare D1 database ID yapılandırılmış.');
    }
  }

  // 6. Marka Varlıklarının Varlığı
  const logoPath = path.resolve(process.cwd(), 'public/brand/logo.png');
  const faviconPath = path.resolve(process.cwd(), 'public/favicon.svg');
  if (!fs.existsSync(logoPath)) {
    errors.push('CRITICAL: public/brand/logo.png eksik!');
  } else {
    console.log('✅ Marka Logosu mevcut.');
  }

  if (!fs.existsSync(faviconPath)) {
    errors.push('CRITICAL: public/favicon.svg eksik!');
  }

  return {
    passed: errors.length === 0,
    warnings,
    errors,
  };
}

const result = validateProduction();

if (result.warnings.length > 0) {
  console.log('\n⚠️  Bekleyen / Bilgi Alanları:');
  result.warnings.forEach((w) => console.log(`  - ${w}`));
}

if (result.errors.length > 0) {
  console.log('\n❌ Kritik Hatalar:');
  result.errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('\n✨ Temel doğrulamalar başarılı! Kod tabanı derleme ve yerel testler için hazır.\n');
  process.exit(0);
}
