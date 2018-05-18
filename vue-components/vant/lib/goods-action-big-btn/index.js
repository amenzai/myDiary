'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _routerLink = require('../mixins/router-link');

var _routerLink2 = _interopRequireDefault(_routerLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-button', { class: _vm.b(), attrs: { "tag": "a", "href": _vm.url, "type": _vm.primary ? 'primary' : 'default', "bottom-action": "" }, on: { "click": _vm.onClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-big-btn',

  mixins: [_routerLink2.default],

  components: {
    VanButton: _button2.default
  },

  props: {
    url: String,
    text: String,
    primary: Boolean
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});