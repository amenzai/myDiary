'use strict';

exports.__esModule = true;

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

var _toast = require('../toast');

var _toast2 = _interopRequireDefault(_toast);

var _SkuHeader = require('./components/SkuHeader');

var _SkuHeader2 = _interopRequireDefault(_SkuHeader);

var _SkuRow = require('./components/SkuRow');

var _SkuRow2 = _interopRequireDefault(_SkuRow);

var _SkuRowItem = require('./components/SkuRowItem');

var _SkuRowItem2 = _interopRequireDefault(_SkuRowItem);

var _SkuStepper = require('./components/SkuStepper');

var _SkuStepper2 = _interopRequireDefault(_SkuStepper);

var _SkuMessages = require('./components/SkuMessages');

var _SkuMessages2 = _interopRequireDefault(_SkuMessages);

var _SkuActions = require('./components/SkuActions');

var _SkuActions2 = _interopRequireDefault(_SkuActions);

var _skuHelper = require('./utils/skuHelper');

var _constants = require('./constants');

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT;

exports.default = (0, _create2.default)({
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
    Popup: _popup2.default,
    SkuHeader: _SkuHeader2.default,
    SkuRow: _SkuRow2.default,
    SkuRowItem: _SkuRowItem2.default,
    SkuStepper: _SkuStepper2.default,
    SkuMessages: _SkuMessages2.default,
    SkuActions: _SkuActions2.default
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
            return _promise2.default.resolve();
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
        var selectedSkuValues = (0, _skuHelper.getSelectedSkuValues)(this.sku.tree, this.selectedSku);

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
      return (0, _skuHelper.isAllSelected)(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return (0, _keys2.default)(this.sku).length === 0;
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
        return (0, _skuHelper.getSkuComb)(this.sku.list, this.selectedSku);
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
    var skuEventBus = new _vue2.default();
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
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || _constants.UNSELECTED_SKU_VALUE_ID;
      });
      // 只有一个sku规格值时默认选中
      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;
        if (item.v.length === 1 && (0, _skuHelper.isSkuChoosable)(_this.sku.list, _this.selectedSku, { key: key, valueId: valueId })) {
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
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? (0, _extends5.default)({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = _constants.UNSELECTED_SKU_VALUE_ID, _extends2)) : (0, _extends5.default)({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));

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
        (0, _toast2.default)(this.$t('least'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = this.$t('quota', quota);
          if (quotaUsed > 0) msg += '\uFF0C' + this.$t('purchase', quotaUsed);
          (0, _toast2.default)(msg);
        } else {
          (0, _toast2.default)(this.$t('inventory'));
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
        (0, _toast2.default)(error);
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