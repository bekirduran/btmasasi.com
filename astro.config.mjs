import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { indexableLocationPaths } from './src/lib/locations.ts';

export default defineConfig({
  site: 'https://btmasasi.com',
  trailingSlash: 'never',
  // Keep the small shared stylesheet in HTML to avoid a blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return path !== '/404' && (!path.startsWith('/hizmet-bolgeleri/') || indexableLocationPaths.has(path));
      },
    }),
  ],
});
