
import create from '../../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { class: _vm.b('title') }, [_vm._v(_vm._s(_vm.skuRow.k) + "：")]), _vm._t("default")], 2);
  },

  name: 'sku-row',

  props: {
    skuRow: Object
  }
});