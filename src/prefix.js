'use strict';
const config = require('@extra-npm/config');
const path = require('path');
// https://github.com/sindresorhus/global-dirs

const E = process.env;
var PPREFIX = null;
var READY = false;


function prefixEnv() {
  return E.NPM_CONFIG_PREFIX || E.npm_config_prefix || null;
}

function prefixDef() {
  var ep = process.execPath;
  // `c:\node\node.exe` → `prefix=c:\node\`
  if (ISWIN) return path.dirname(ep);
  // `/usr/local/bin/node` → `prefix=/usr/local`
  return path.dirname(path.dirname(ep));
}

function setup() {
  PPREFIX =
    prefixEnv() ||
    config.list().prefix ||
    E.PREFIX ||
    prefixDef();
  READY = true;
}

/**
 * Gets prefix path.
 */
function prefix() {
  if (!READY) setup();
  return PPREFIX;
};
module.exports = prefix;
