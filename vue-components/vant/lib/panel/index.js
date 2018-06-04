'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_vm._t("header", [_c('cell', { class: _vm.b('header'), attrs: { "title": _vm.title, "label": _vm.desc, "value": _vm.status } })]), _c('div', { class: _vm.b('content') }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', { staticClass: "van-hairline--top", class: _vm.b('footer') }, [_vm._t("footer")], 2) : _vm._e()], 2);
  },

  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
});