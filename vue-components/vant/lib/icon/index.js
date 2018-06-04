'use strict';

exports.__esModule = true;

var _utils = require('../utils');

var _createBasic = require('../utils/create-basic');

var _createBasic2 = _interopRequireDefault(_createBasic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBasic2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', _vm._g({ class: [_vm.b(), "van-icon-" + _vm.name], style: { color: _vm.color } }, _vm.$listeners), [_vm._t("default"), _vm.isDef(_vm.info) ? _c('div', { class: _vm.b('info') }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2);
  },

  name: 'icon',

  props: {
    name: String,
    info: [String, Number],
    color: String
  },

  methods: {
    isDef: _utils.isDef
  }
});