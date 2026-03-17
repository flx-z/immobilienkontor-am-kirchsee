import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.immobilienkontor-am-kirchsee.de',
  integrations: [tailwind(), sitemap()],
  image: {
    quality: 80,
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    server: {
      fs: {
        allow: [
          '/Users/felixziebell/projects/website-builder',
        ]
      }
    }
  }
});
