'use strict';

exports.__esModule = true;

var _directive = require('./directive.js');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_directive2.default.install = function (Vue) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Vant warn] Waterfall is deprecated, please use List component instread.');
  }
  Vue.directive('WaterfallLower', (0, _directive2.default)('lower'));
  Vue.directive('WaterfallUpper', (0, _directive2.default)('upper'));
};

exports.default = _directive2.default;