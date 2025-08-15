// generate-env.js
require('dotenv').config();
const fs = require('fs');

let html = fs.readFileSync('./index.html', 'utf-8');

// Replace meta tags dynamically
html = html.replace(/(<meta name="description"[^>]*content=").*?(")/,
  `$1${process.env.META_DESCRIPTION}$2`);

html = html.replace(/(<title[^>]*>).*?(<\/title>)/,
  `$1${process.env.META_TITLE}$2`);

// Open Graph
html = html.replace(/(<meta property="og:title"[^>]*content=").*?(")/,
  `$1${process.env.META_TITLE}$2`);
html = html.replace(/(<meta property="og:description"[^>]*content=").*?(")/,
  `$1${process.env.META_DESCRIPTION}$2`);
html = html.replace(/(<meta property="og:url"[^>]*content=").*?(")/,
  `$1${process.env.OG_URL}$2`);
html = html.replace(/(<meta property="og:site_name"[^>]*content=").*?(")/,
  `$1${process.env.OG_SITE_NAME}$2`);
html = html.replace(/(<meta property="og:image"[^>]*content=").*?(")/,
  `$1${process.env.OG_IMAGE}$2`);

// Twitter
html = html.replace(/(<meta name="twitter:site"[^>]*content=").*?(")/,
  `$1${process.env.TWITTER_SITE}$2`);
html = html.replace(/(<meta name="twitter:title"[^>]*content=").*?(")/,
  `$1${process.env.TWITTER_TITLE}$2`);
html = html.replace(/(<meta name="twitter:description"[^>]*content=").*?(")/,
  `$1${process.env.TWITTER_DESCRIPTION}$2`);
html = html.replace(/(<meta name="twitter:image"[^>]*content=").*?(")/,
  `$1${process.env.TWITTER_IMAGE}$2`);

// Write updated HTML
fs.writeFileSync('./index.html', html);

// Create env.js for browser
fs.writeFileSync(
  './js/env.js',
  `window.ENV = ${JSON.stringify(process.env, null, 2)};`
);

console.log('✅ Meta tags and env.js updated successfully.');
