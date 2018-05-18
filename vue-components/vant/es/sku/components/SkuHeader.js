
import create from '../../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--bottom", class: _vm.b() }, [_c('div', { class: _vm.b('img-wrap') }, [_c('img', { attrs: { "src": _vm.goodsImg } })]), _c('div', { class: _vm.b('goods-info') }, [_c('div', { staticClass: "van-sku__goods-name van-ellipsis" }, [_vm._v(_vm._s(_vm.goods.title))]), _vm._t("default"), _c('icon', { staticClass: "van-sku__close-icon", attrs: { "name": "close" }, on: { "click": function click($event) {
          _vm.skuEventBus.$emit('sku:close');
        } } })], 2)]);
  },

  name: 'sku-header',

  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },

  computed: {
    goodsImg: function goodsImg() {
      var s1Id = this.selectedSku.s1;
      var skuImg = this.getSkuImg(s1Id);
      // 优先使用选中sku的图片
      return skuImg || this.goods.picture;
    }
  },

  methods: {
    getSkuImg: function getSkuImg(id) {
      if (!id) return;

      // 目前skuImg都挂载在skuTree中s1那类sku上
      var treeItem = this.sku.tree.filter(function (treeItem) {
        return treeItem.k_s === 's1';
      })[0] || {};

      if (!treeItem.v) {
        return;
      }

      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];
      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    }
  }
});