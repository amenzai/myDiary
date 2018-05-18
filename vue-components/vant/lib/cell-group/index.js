'use strict';

exports.__esModule = true;

var _createBasic = require('../utils/create-basic');

var _createBasic2 = _interopRequireDefault(_createBasic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBasic2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b(), { 'van-hairline--top-bottom': _vm.border }] }, [_vm._t("default")], 2);
  },

  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});