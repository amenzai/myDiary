'use strict';

exports.__esModule = true;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _deepAssign = require('../utils/deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _zhCN = require('./lang/zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proto = _vue2.default.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }
    _vue2.default.util.defineReactive(proto, '$vantLang', defaultLang);
    _vue2.default.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = _zhCN2.default, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _add;

    proto.$vantLang = lang;
    this.add((_add = {}, _add[lang] = messages, _add));
  },
  add: function add() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _deepAssign2.default)(proto.$vantMessages, messages);
  }
};

locale.install();

exports.default = locale;