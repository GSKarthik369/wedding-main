// generate-env.js
require('dotenv').config();
const fs = require('fs');

// 1. Update index.html meta tags and title
let html = fs.readFileSync('./index.html', 'utf-8');

// Replace <meta name="description" ...>
html = html.replace(
  /<meta name="description" content=".*">/,
  `<meta name="description" content="${process.env.APP_TITLE || ''}">`
);

// Replace <title> ... </title>
html = html.replace(
  /<title>.*<\/title>/,
  `<title>${process.env.META_TITLE || ''}</title>`
);

// Optionally add Open Graph tags for WhatsApp/Facebook preview
if (!html.includes('og:title')) {
  const ogTags = `
<meta property="og:title" content="${process.env.META_TITLE || ''}" />
<meta property="og:description" content="${process.env.APP_TITLE || ''}" />
<meta property="og:image" content="${process.env.OG_IMAGE || ''}" />
<meta property="og:url" content="${process.env.OG_URL || ''}" />
<meta property="og:type" content="website" />
  `;
  html = html.replace('</head>', `${ogTags}\n</head>`);
}

// Save updated HTML
fs.writeFileSync('./index.html', html, 'utf-8');

// 2. Generate env.js so frontend JS can access variables
fs.writeFileSync(
  './js/env.js',
  `window.ENV = ${JSON.stringify(process.env, null, 2)};`,
  'utf-8'
);

console.log('Environment variables injected into index.html and js/env.js');
