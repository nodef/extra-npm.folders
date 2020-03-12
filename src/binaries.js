'use strict';
const prefix = require('./prefix');
const path = require('path');



function binaries(global = false) {
  if (!global) return './node_modules/.bin';
  if (process.platform === 'win32') return prefix();
  return path.join(prefix(), 'bin');
}
module.exports = binaries;
