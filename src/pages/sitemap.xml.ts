import type { APIRoute } from 'astro';
import { levels } from '../data/levels';

// /sitemap.xml con todas las páginas del sitio, listadas directamente.
// (@astrojs/sitemap genera además sitemap-index.xml y sitemap-0.xml con el mismo contenido.)
// Las páginas salen de los archivos .astro de src/pages, así que una página nueva entra sola.
const pages = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
  .filter((name) => name !== '404' && !name.includes('['))
  .concat(levels.map((l) => `servicios/${l.slug}`))
  .map((name) => (name === 'index' ? '' : `${name.replace(/\/index$/, '')}/`))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lastmod = new Date().toISOString();
  const urls = pages
    .map((path) => `  <url><loc>${new URL(`${base}/${path}`, site).href}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
