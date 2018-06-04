'use strict';

exports.__esModule = true;

var _utils = require('../utils');

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ center: _vm.centered }) }, [_c('div', { class: _vm.b('thumb') }, [_vm._t("thumb", [_c('img', { class: _vm.b('img'), attrs: { "src": _vm.thumb } })])], 2), _c('div', { class: _vm.b('content') }, [_vm._t("title", [_vm.title || _vm.isDef(_vm.price) ? _c('div', { class: _vm.b('row') }, [_vm.title ? _c('div', { class: _vm.b('title') }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.isDef(_vm.price) ? _c('div', { class: _vm.b('price') }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.price))]) : _vm._e()]) : _vm._e()]), _vm._t("desc", [_vm.desc || _vm.isDef(_vm.num) ? _c('div', { class: _vm.b('row') }, [_vm.desc ? _c('div', { class: _vm.b('desc') }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _vm.isDef(_vm.num) ? _c('div', { class: _vm.b('num') }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()]) : _vm._e()]), _vm._t("tags")], 2), _vm.$slots.footer ? _c('div', { class: _vm.b('footer') }, [_vm._t("footer")], 2) : _vm._e()]);
  },

  name: 'card',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  },

  methods: {
    isDef: _utils.isDef
  }
});