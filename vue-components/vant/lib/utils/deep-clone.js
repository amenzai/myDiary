'use strict';

exports.__esModule = true;
exports.default = deepClone;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _deepAssign = require('./deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') {
    return (0, _deepAssign2.default)({}, obj);
  }
  return obj;
}