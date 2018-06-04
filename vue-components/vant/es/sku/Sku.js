import _extends from 'babel-runtime/helpers/extends';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Promise from 'babel-runtime/core-js/promise';

/* eslint-disable camelcase */
import Vue from 'vue';
import Popup from '../popup';
import Toast from '../toast';
import SkuHeader from './components/SkuHeader';
import SkuRow from './components/SkuRow';
import SkuRowItem from './components/SkuRowItem';
import SkuStepper from './components/SkuStepper';
import SkuMessages from './components/SkuMessages';
import SkuActions from './components/SkuActions';
import { isAllSelected, isSkuChoosable, getSkuComb, getSelectedSkuValues } from './utils/skuHelper';
import { LIMIT_TYPE, UNSELECTED_SKU_VALUE_ID } from './constants';
import create from '../utils/create';

var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;


export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return !_vm.isSkuEmpty ? _c('popup', { staticClass: "van-sku-container", attrs: { "position": "bottom", "close-on-click-overlay": _vm.closeOnClickOverlay, "get-container": _vm.getContainer }, model: { value: _vm.show, callback: function callback($$v) {
          _vm.show = $$v;
        }, expression: "show" } }, [_vm._t("sku-header", [_c('sku-header', { attrs: { "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "goods": _vm.goods, "sku": _vm.sku } }, [_vm._t("sku-header-price", [_c('div', { staticClass: "van-sku__goods-price" }, [_c('span', { staticClass: "van-sku__price-symbol" }, [_vm._v("￥")]), _c('span', { staticClass: "van-sku__price-num" }, [_vm._v(_vm._s(_vm.price))])])], { price: _vm.price, selectedSkuComb: _vm.selectedSkuComb })], 2)], { skuEventBus: _vm.skuEventBus, selectedSku: _vm.selectedSku, selectedSkuComb: _vm.selectedSkuComb }), _c('div', { staticClass: "van-sku-body", style: _vm.bodyStyle }, [_vm._t("sku-body-top", null, { selectedSku: _vm.selectedSku, skuEventBus: _vm.skuEventBus }), _vm._t("sku-group", [_vm.hasSku ? _c('div', { staticClass: "van-sku-group-container van-hairline--bottom" }, _vm._l(_vm.skuTree, function (skuTreeItem, index) {
      return _c('sku-row', { key: index, attrs: { "sku-row": skuTreeItem } }, _vm._l(skuTreeItem.v, function (skuValue, index) {
        return _c('sku-row-item', { key: index, attrs: { "sku-key-str": skuTreeItem.k_s, "sku-value": skuValue, "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "sku-list": _vm.sku.list } });
      }));
    })) : _vm._e()], { selectedSku: _vm.selectedSku, skuEventBus: _vm.skuEventBus }), _vm._t("extra-sku-group", null, { skuEventBus: _vm.skuEventBus }), _vm._t("sku-stepper", [_c('sku-stepper', { ref: "skuStepper", attrs: { "sku-event-bus": _vm.skuEventBus, "selected-sku": _vm.selectedSku, "selected-sku-comb": _vm.selectedSkuComb, "selected-num": _vm.selectedNum, "stepper-title": _vm.stepperTitle, "sku-stock-num": _vm.sku.stock_num, "quota": _vm.quota, "quota-used": _vm.quotaUsed, "disable-stepper-input": _vm.disableStepperInput, "hide-stock": _vm.hideStock, "custom-stepper-config": _vm.customStepperConfig } })], { skuEventBus: _vm.skuEventBus, selectedSku: _vm.selectedSku, selectedSkuComb: _vm.selectedSkuComb, selectedNum: _vm.selectedNum }), _vm._t("sku-messages", [_c('sku-messages', { ref: "skuMessages", attrs: { "goods-id": _vm.goodsId, "message-config": _vm.messageConfig, "messages": _vm.sku.messages } })])], 2), _vm._t("sku-actions", [_c('sku-actions', { attrs: { "sku-event-bus": _vm.skuEventBus, "buy-text": _vm.buyText, "show-add-cart-btn": _vm.showAddCartBtn } })], { skuEventBus: _vm.skuEventBus })], 2) : _vm._e();
  },

  name: 'sku',

  components: {
    Popup: Popup,
    SkuHeader: SkuHeader,
    SkuRow: SkuRow,
    SkuRowItem: SkuRowItem,
    SkuStepper: SkuStepper,
    SkuMessages: SkuMessages,
    SkuActions: SkuActions
  },

  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    stepperTitle: String,
    hideStock: Boolean,
    getContainer: Function,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    closeOnClickOverlay: Boolean,
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return _Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },


  watch: {
    show: function show(val) {
      this.$emit('input', val);
      if (!val) {
        var selectedSkuValues = getSelectedSkuValues(this.sku.tree, this.selectedSku);

        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },

  computed: {
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      }

      // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下
      var maxHeight = window.innerHeight - this.bodyOffsetTop;

      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return _Object$keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      } else if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }
      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      }
      // sku.price是一个格式化好的价格区间
      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    }
  },

  created: function created() {
    var skuEventBus = new Vue();
    this.skuEventBus = skuEventBus;

    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);

    this.resetSelectedSku(this.skuTree);
    // 组件初始化后的钩子，抛出skuEventBus
    this.$emit('after-sku-create', skuEventBus);
  },


  methods: {
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {};
      // 重置selectedSku
      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      });
      // 只有一个sku规格值时默认选中
      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;
        if (item.v.length === 1 && isSkuChoosable(_this.sku.list, _this.selectedSku, { key: key, valueId: valueId })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return this.$t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      }

      return this.$t('spec');
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? _extends({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : _extends({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));

      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;


      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        Toast(this.$t('least'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = this.$t('quota', quota);
          if (quotaUsed > 0) msg += '\uFF0C' + this.$t('purchase', quotaUsed);
          Toast(msg);
        } else {
          Toast(this.$t('inventory'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();
      if (error) {
        Toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  }
});