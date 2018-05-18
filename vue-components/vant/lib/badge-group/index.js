'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data: function data() {
    return {
      badges: []
    };
  }
});