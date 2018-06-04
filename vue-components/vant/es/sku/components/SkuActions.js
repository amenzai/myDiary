
import VanButton from '../../button';
import create from '../../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showAddCartBtn ? _c('van-button', { attrs: { "bottom-action": "", "text": _vm.$t('cart') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        } } }) : _vm._e(), _c('van-button', { attrs: { "type": "primary", "bottom-action": "", "text": _vm.buyText || _vm.$t('buy') }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        } } })], 1);
  },

  name: 'sku-actions',

  components: {
    VanButton: VanButton
  },

  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
});