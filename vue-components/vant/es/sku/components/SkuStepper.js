
import create from '../../utils/create';
import Stepper from '../../stepper';
import { LIMIT_TYPE } from '../constants';

var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;


export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-sku-stepper-stock" }, [_c('div', { staticClass: "van-sku-stepper-container" }, [_c('div', { staticClass: "van-sku__stepper-title" }, [_vm._v(_vm._s(_vm.stepperTitle || _vm.$t('title')) + "：")]), _c('stepper', { staticClass: "van-sku__stepper", attrs: { "min": 1, "max": _vm.stepperLimit, "disable-input": _vm.disableStepperInput }, on: { "overlimit": _vm.onOverLimit, "change": _vm.onChange }, model: { value: _vm.currentNum, callback: function callback($$v) {
          _vm.currentNum = $$v;
        }, expression: "currentNum" } })], 1), !_vm.hideStock ? _c('div', { staticClass: "van-sku__stock" }, [_vm._v(_vm._s(_vm.$t('remain', _vm.stock)))]) : _vm._e(), _vm.quotaText ? _c('div', { staticClass: "van-sku__quota" }, [_vm._v(_vm._s(_vm.quotaText))]) : _vm._e()]);
  },

  name: 'sku-stepper',

  components: {
    Stepper: Stepper
  },

  props: {
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },

  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },


  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },

  computed: {
    stock: function stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }
      return this.skuStockNum;
    },
    quotaText: function quotaText() {
      var quotaText = this.customStepperConfig.quotaText;

      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = this.$t('quota', this.quota);
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit = void 0;

      // 无限购时直接取库存，有限购时取限购数和库存数中小的那个
      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },

  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;

      handleStepperChange && handleStepperChange(currentValue);
    }
  }
});