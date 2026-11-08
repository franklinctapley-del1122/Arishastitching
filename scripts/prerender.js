import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { createServer } from 'vite';

const routes = [
  '/', '/about/', '/services/', '/rate-list/', '/stitching/',
  '/party-wear/', '/bridal-wear/', '/casual-wear/', '/western-wear/',
  '/alteration/', '/blog/', '/our-work/', '/fabric-calculator/',
  '/book-appointment/', '/location/',
  '/blog/choose-fabric-bridal-wear/',
  '/blog/eid-dress-stitching-tips/',
  '/blog/shalwar-kameez-measurements/',
  '/blog/party-wear-design-details/',
  '/blog/how-much-fabric-do-i-need/',
  '/blog/care-for-embroidered-clothes/'
];

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom'
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const shell = readFileSync(resolve('dist/index.html'), 'utf8');

  for (const route of routes) {
    const helmetContext = {};
    const appHtml = renderToString(
      React.createElement(
        HelmetProvider,
        { context: helmetContext },
        React.createElement(
          StaticRouter,
          { location: route },
          React.createElement(App)
        )
      )
    );

    const helmet = helmetContext.helmet;
    let html = shell.replace('<div id="root"></div>', '<div id="root">' + appHtml + '</div>');

    const titleStart = html.indexOf('<title>');
    const titleEnd = html.indexOf('</title>');
    if (titleStart !== -1 && titleEnd !== -1) {
      html = html.slice(0, titleStart) + html.slice(titleEnd + 8);
    }

    html = html.replace(/<meta name="description"[^>]*>/, '');
    html = html.replace(/<meta property="og:title"[^>]*>/, '');
    html = html.replace(/<meta property="og:description"[^>]*>/, '');
    html = html.replace(/<meta property="og:type"[^>]*>/, '');
    html = html.replace(/<meta property="og:site_name"[^>]*>/, '');
    html = html.replace(/<meta name="twitter:card"[^>]*>/, '');

    const headTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString()
    ].filter(Boolean).join('\n  ');

    html = html.replace('</head>', '  ' + headTags + '\n</head>');

    const outputPath = resolve('dist' + (route === '/' ? '/index.html' : route + 'index.html'));
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, 'utf8');
    console.log('Pre-rendered ' + route);
  }
} finally {
  await vite.close();
}
