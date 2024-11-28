import fs from 'fs';
import path from 'path';

const baseUrl = 'https://saltmarket.com';

const routes = [
  '/',
  '/collections',
  '/about',
  '/contact',
  '/blog',
  '/gallery'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');