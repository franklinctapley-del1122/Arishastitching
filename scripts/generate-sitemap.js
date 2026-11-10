import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const base = 'https://arishastitching.shop';

// Keep this list aligned with the routes in src/App.jsx.
// Omit lastmod unless a reliable page-specific modification date is available.
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services/', changefreq: 'monthly', priority: '0.9' },
  { path: '/women-unstitched/', changefreq: 'weekly', priority: '0.9' },
  { path: '/stitching/', changefreq: 'monthly', priority: '0.9' },
  { path: '/rate-list/', changefreq: 'monthly', priority: '0.9' },
  { path: '/bridal-wear/', changefreq: 'monthly', priority: '0.8' },
  { path: '/party-wear/', changefreq: 'monthly', priority: '0.8' },
  { path: '/casual-wear/', changefreq: 'monthly', priority: '0.8' },
  { path: '/western-wear/', changefreq: 'monthly', priority: '0.8' },
  { path: '/alteration/', changefreq: 'monthly', priority: '0.8' },
  { path: '/about/', changefreq: 'yearly', priority: '0.6' },
  { path: '/our-work/', changefreq: 'monthly', priority: '0.7' },
  { path: '/fabric-calculator/', changefreq: 'monthly', priority: '0.7' },
  { path: '/book-appointment/', changefreq: 'monthly', priority: '0.8' },
  { path: '/location/', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog/', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog/choose-fabric-bridal-wear/', changefreq: 'yearly', priority: '0.6' },
  { path: '/blog/eid-dress-stitching-tips/', changefreq: 'yearly', priority: '0.6' },
  { path: '/blog/shalwar-kameez-measurements/', changefreq: 'yearly', priority: '0.6' },
  { path: '/blog/party-wear-design-details/', changefreq: 'yearly', priority: '0.6' },
  { path: '/blog/how-much-fabric-do-i-need/', changefreq: 'yearly', priority: '0.6' },
  { path: '/blog/how-much-fabric-3-piece-suit-pakistan/', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog/care-for-embroidered-clothes/', changefreq: 'yearly', priority: '0.6' }
];

const urls = routes.map(({ path, changefreq, priority }) => `  <url>
    <loc>${base}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve('public/sitemap.xml'), xml, 'utf8');
writeFileSync(resolve('public/robots.txt'), `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: ${base}/sitemap.xml
`, 'utf8');
console.log(`Generated SEO sitemap with ${routes.length} URLs and robots.txt.`);
