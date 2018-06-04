'use strict';

exports.__esModule = true;

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _create = require('../../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showAddCartBtn ? _c('van-button', { attrs: { "bottom-action": "", "text": _vm.$t('cart') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        } } }) : _vm._e(), _c('van-button', { attrs: { "type": "primary", "bottom-action": "", "text": _vm.buyText || _vm.$t('buy') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        } } })], 1);
  },

  name: 'sku-actions',

  components: {
    VanButton: _button2.default
  },

  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
});