'use strict';

exports.__esModule = true;
exports.isAndroid = exports.camelize = exports.isServer = exports.isDef = exports.isObj = exports.get = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x);
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;

  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

exports.get = get;
exports.isObj = isObj;
exports.isDef = isDef;
exports.isServer = isServer;
exports.camelize = camelize;
exports.isAndroid = isAndroid;