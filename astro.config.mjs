// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// En GitHub Actions, SITE_URL y BASE_PATH llegan desde actions/configure-pages.
export default defineConfig({
  site: process.env.SITE_URL || 'https://elanth.com',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
  // Solo URLs con barra final, iguales a las canónicas (evita duplicar la portada)
  integrations: [sitemap({ filter: (page) => page.endsWith('/') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
