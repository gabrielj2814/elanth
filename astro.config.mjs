// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Actions, SITE_URL y BASE_PATH llegan desde actions/configure-pages.
export default defineConfig({
  site: process.env.SITE_URL || 'https://elanth.com',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
