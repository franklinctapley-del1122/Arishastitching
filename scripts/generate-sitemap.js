import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const base = 'https://arishaladiesstitching.vercel.app';
const routes = [
  '/', '/about/', '/services/', '/rate-list/', '/stitching/', '/party-wear/', '/bridal-wear/',
  '/casual-wear/', '/western-wear/', '/alteration/', '/blog/',
  '/blog/choose-fabric-bridal-wear/', '/blog/eid-dress-stitching-tips/',
  '/blog/shalwar-kameez-measurements/', '/blog/party-wear-design-details/',
  '/blog/how-much-fabric-do-i-need/', '/blog/care-for-embroidered-clothes/',
  '/our-work/', '/fabric-calculator/', '/book-appointment/', '/location/'
];
const urls = routes.map(path => `  <url><loc>${base}${path}</loc></url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(resolve('public/sitemap.xml'), xml, 'utf8');
writeFileSync(resolve('public/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`, 'utf8');
console.log(`Generated sitemap.xml with ${routes.length} routes and robots.txt.`);
