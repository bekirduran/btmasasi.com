import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: `${siteConfig.brandName} — İşletmeler İçin BT Rehberi`,
    description: 'KOBİ’ler için yönetilen BT hizmetleri, kullanıcı desteği, network, bulut, yedekleme ve güvenlik rehberleri.',
    site: siteConfig.domain,
    items: posts.map((post: CollectionEntry<'blog'>) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/rehber/${post.slug}`,
    })),
    customData: `<language>tr-TR</language>`,
  });
}
