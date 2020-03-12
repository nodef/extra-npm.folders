'use strict';
const prefix = require('./prefix');
const path = require('path');



function packages(global = false) {
  if (!global) return 'node_modules';
  if (process.platform === 'win32') return path.join(prefix(), 'node_modules');
  return path.join(prefix(), 'lib', 'node_modules');
}
module.exports = packages;
