'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--bottom", class: _vm.b({ fixed: _vm.fixed }), style: _vm.style }, [_c('div', { class: _vm.b('left'), on: { "click": function click($event) {
          _vm.$emit('click-left');
        } } }, [_vm._t("left", [_vm.leftArrow ? _c('icon', { class: _vm.b('arrow'), attrs: { "name": "arrow" } }) : _vm._e(), _vm.leftText ? _c('span', { class: _vm.b('text'), domProps: { "textContent": _vm._s(_vm.leftText) } }) : _vm._e()])], 2), _c('div', { staticClass: "van-ellipsis", class: _vm.b('title') }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { class: _vm.b('right'), on: { "click": function click($event) {
          _vm.$emit('click-right');
        } } }, [_vm._t("right", [_vm.rightText ? _c('span', { class: _vm.b('text'), domProps: { "textContent": _vm._s(_vm.rightText) } }) : _vm._e()])], 2)]);
  },

  name: 'nav-bar',

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
});