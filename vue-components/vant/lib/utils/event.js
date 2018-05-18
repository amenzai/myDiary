'use strict';

exports.__esModule = true;
exports.supportsPassive = undefined;
exports.on = on;
exports.off = off;

var _ = require('./');

var supportsPassive = exports.supportsPassive = false;
if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  !_.isServer && target.addEventListener(event, handler, supportsPassive ? { capture: false, passive: passive } : false);
}

function off(target, event, handler) {
  !_.isServer && target.removeEventListener(event, handler);
}