'use strict';
const path = require('path');
const os = require('os');

const E = process.env;



function cache() {
  if (process.platform !== 'win32') return path.join(os.homedir(), '.npm');
  return path.join(E.APPDATA, 'npm-cache');
}
module.exports = cache;
