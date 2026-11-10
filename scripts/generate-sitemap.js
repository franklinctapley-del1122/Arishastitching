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

/* Women's unstitched product collection */
.unstitched-intro{max-width:760px;margin:0 auto 24px;padding:20px 24px;background:#f3ebdf;border:1px solid var(--line);text-align:center}
.unstitched-intro p{font-size:13px;line-height:1.8;color:var(--muted);margin:8px 0 0}
.unstitched-filters{display:flex;justify-content:center;gap:9px;flex-wrap:wrap;margin:26px 0 12px}
.unstitched-filters button{border:1px solid #ded2c2;background:var(--paper);padding:10px 16px;border-radius:30px;color:var(--muted);font-size:11px}
.unstitched-filters button.filter-active{background:var(--maroon);border-color:var(--maroon);color:white}
.unstitched-count{font-size:11px;color:var(--muted);text-align:center;margin:0 0 20px}
.unstitched-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.unstitched-card{background:var(--paper);border:1px solid var(--line);box-shadow:var(--shadow);min-width:0;display:flex;flex-direction:column}
.unstitched-image{height:240px;position:relative;background:#eee5d9;overflow:hidden}
.unstitched-image img{width:100%;height:100%;object-fit:cover;transition:transform .35s}
.unstitched-card:hover .unstitched-image img{transform:scale(1.035)}
.unstitched-image>span{position:absolute;top:11px;left:11px;background:#fffaf0ed;color:var(--maroon);padding:6px 9px;font-size:9px;letter-spacing:.08em;text-transform:uppercase}
.unstitched-card-body{padding:16px;display:flex;flex-direction:column;align-items:flex-start;flex:1}
.unstitched-card-body h2{font:600 17px/1.35 'Lora',serif;color:var(--maroon);margin:0 0 8px}
.unstitched-card-body p{font-size:11px;line-height:1.65;color:var(--muted);margin:0 0 12px}
.unstitched-price{font:600 18px 'DM Sans',sans-serif;color:var(--maroon);margin-top:auto;margin-bottom:13px}
.unstitched-order{width:100%;min-height:42px;font-size:10px;padding:0 10px}
.unstitched-stitch-link{font-size:10px;color:var(--maroon);text-decoration:underline;text-underline-offset:3px;margin:12px auto 0;text-align:center}
.unstitched-note{max-width:900px;margin:32px auto 0;padding:18px 22px;background:#f3ebdf;border:1px solid var(--line)}
.unstitched-note strong{font:600 17px 'Lora',serif;color:var(--maroon)}
.unstitched-note p{font-size:11px;line-height:1.8;color:var(--muted);margin:7px 0 0}
@media(max-width:1000px){.unstitched-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:700px){.unstitched-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.unstitched-image{height:190px}.unstitched-card-body{padding:12px}.unstitched-card-body h2{font-size:15px}.unstitched-card-body p{font-size:10px}.unstitched-price{font-size:16px}.unstitched-order{font-size:9px;gap:5px}.unstitched-intro{padding:16px;margin-left:0;margin-right:0}}
@media(max-width:380px){.unstitched-grid{grid-template-columns:1fr}.unstitched-image{height:260px}}
