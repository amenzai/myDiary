'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports.default = {
  computed: {
    $t: function $t() {
      var name = this.$options.name;

      var prefix = name ? (0, _utils.camelize)(name) + '.' : '';

      if (process.env.NODE_ENV !== 'production' && !this.$vantMessages) {
        console.warn('[Vant] Locale not correctly registered.');
        return function () {
          return '';
        };
      }

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var message = (0, _utils.get)(messages, prefix + path) || (0, _utils.get)(messages, path);
        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
}; // component mixin