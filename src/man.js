'use strict';
const prefix = require('./prefix');
const path = require('path');



function man(global=false) {
  if(global) return path.join(prefix(), 'share', 'man');
  return null;
}
module.exports = man;
