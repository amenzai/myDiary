'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "van-hairline--surround", class: _vm.b((_obj = {
        mark: _vm.mark,
        plain: _vm.plain
      }, _obj[_vm.type] = _vm.type, _obj)) }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
});