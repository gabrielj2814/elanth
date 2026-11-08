import type { APIRoute } from 'astro';

// Alias de /sitemap.xml: muchos buscadores y herramientas lo buscan con ese nombre.
// Apunta al sitemap que genera @astrojs/sitemap (sitemap-0.xml).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const loc = new URL(`${base}/sitemap-0.xml`, site).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${loc}</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>
</sitemapindex>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
