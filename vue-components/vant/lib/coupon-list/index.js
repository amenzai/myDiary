'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _field = require('../field');

var _field2 = _interopRequireDefault(_field);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm.showExchangeBar ? _c('cell-group', { class: _vm.b('top') }, [_c('field', { staticClass: "van-hairline--surround", class: _vm.b('field'), attrs: { "placeholder": _vm.inputPlaceholder || _vm.$t('placeholder'), "maxlength": 20 }, model: { value: _vm.currentCode, callback: function callback($$v) {
          _vm.currentCode = $$v;
        }, expression: "currentCode" } }), _c('van-button', { class: _vm.b('exchange'), attrs: { "size": "small", "type": "danger", "text": _vm.exchangeButtonText || _vm.$t('exchange'), "loading": _vm.exchangeButtonLoading, "disabled": _vm.buttonDisabled }, on: { "click": _vm.onClickExchangeButton } })], 1) : _vm._e(), _c('div', { ref: "list", class: _vm.b('list', { 'with-exchange': _vm.showExchangeBar }) }, [_vm._l(_vm.coupons, function (item, index) {
      return _c('coupon-item', { key: item.id || item.name, ref: "card", refInFor: true, attrs: { "data": item, "chosen": index === _vm.chosenCoupon }, nativeOn: { "click": function click($event) {
            _vm.$emit('change', index);
          } } });
    }), _vm.disabledCoupons.length ? _c('h3', [_vm._v(_vm._s(_vm.disabledListTitle || _vm.$t('disabled')))]) : _vm._e(), _vm._l(_vm.disabledCoupons, function (item) {
      return _c('coupon-item', { key: item.id || item.name, attrs: { "disabled": "", "data": item } });
    }), !_vm.coupons.length && !_vm.disabledCoupons.length ? _c('div', { class: _vm.b('empty') }, [_c('img', { attrs: { "src": "https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png" } }), _c('p', [_vm._v(_vm._s(_vm.$t('empty')))])]) : _vm._e()], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCloseButton, expression: "showCloseButton" }], staticClass: "van-hairline--top", class: _vm.b('close'), domProps: { "textContent": _vm._s(_vm.closeButtonText || _vm.$t('close')) }, on: { "click": function click($event) {
          _vm.$emit('change', -1);
        } } })], 1);
  },

  name: 'coupon-list',

  components: {
    VanButton: _button2.default,
    Field: _field2.default,
    CouponItem: _Item2.default
  },

  model: {
    prop: 'code'
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      currentCode: this.code || ''
    };
  },

  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || this.currentCode.length < this.exchangeMinLength);
    }
  },

  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use v-model
      if (!this.code) {
        this.currentCode = '';
      }
    },

    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _$refs = _this.$refs,
            card = _$refs.card,
            list = _$refs.list;

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
});