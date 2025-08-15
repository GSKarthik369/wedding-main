// generate-env.js
require('dotenv').config();
const fs = require('fs');

fs.writeFileSync(
  './js/env.js',
  `window.ENV = ${JSON.stringify(process.env, null, 2)};`
);

console.log("env.js generated from .env file");
