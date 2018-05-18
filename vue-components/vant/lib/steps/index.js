'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.direction]) }, [_vm.title || _vm.description ? _c('div', { class: _vm.b('status') }, [_vm.icon || _vm.$slots.icon ? _c('div', { class: _vm.b('icon') }, [_vm._t("icon", [_c('icon', { class: _vm.iconClass, attrs: { "name": _vm.icon } })])], 2) : _vm._e(), _c('div', { class: _vm.b('message') }, [_c('div', { class: _vm.b('title'), domProps: { "textContent": _vm._s(_vm.title) } }), _c('div', { staticClass: "van-ellipsis", class: _vm.b('desc'), domProps: { "textContent": _vm._s(_vm.description) } })]), _vm._t("message-extra")], 2) : _vm._e(), _c('div', { class: _vm.b('items', { alone: !_vm.title && !_vm.description }) }, [_vm._t("default")], 2)]);
  },

  name: 'steps',

  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },

  data: function data() {
    return {
      steps: []
    };
  }
});