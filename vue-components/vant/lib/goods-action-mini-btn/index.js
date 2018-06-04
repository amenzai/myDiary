'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _routerLink = require('../mixins/router-link');

var _routerLink2 = _interopRequireDefault(_routerLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "van-hairline", class: _vm.b(), attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_c('icon', { class: [_vm.b('icon'), _vm.iconClass], attrs: { "info": _vm.info, "name": _vm.icon } }), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-mini-btn',

  mixins: [_routerLink2.default],

  props: {
    url: String,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});