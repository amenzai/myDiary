
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ disabled: _vm.disabled }) }, [_c('div', { class: _vm.b('head') }, [_c('div', { class: _vm.b('lines') }), _c('div', { class: _vm.b('gradient') }, [_c('h2', { domProps: { "innerHTML": _vm._s(_vm.faceAmount) } }), _c('p', [_vm._v(_vm._s(_vm.conditionMessage))])])]), _c('div', { class: _vm.b('body') }, [_c('h2', [_vm._v(_vm._s(_vm.data.name))]), _c('span', [_vm._v(_vm._s(_vm.validPeriod))]), _vm.disabled && _vm.data.reason ? _c('p', [_vm._v(_vm._s(_vm.data.reason))]) : _vm._e(), _vm.chosen ? _c('div', { class: _vm.b('corner') }, [_c('icon', { attrs: { "name": "success" } })], 1) : _vm._e()])]);
  },

  name: 'coupon-item',

  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean
  },

  computed: {
    validPeriod: function validPeriod() {
      return this.getDate(this.data.start_at) + '-' + this.getDate(this.data.end_at);
    },
    faceAmount: function faceAmount() {
      return this.data.denominations !== 0 ? '<span>\xA5</span> ' + this.formatAmount(this.data.denominations) : this.data.discount !== 0 ? this.formatDiscount(this.data.discount) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.data.origin_condition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.origin_condition === 0 ? this.$t('unlimited') : this.$t('condition', condition);
    }
  },

  methods: {
    getDate: function getDate(timeStamp) {
      var date = new Date(timeStamp * 1000);
      return date.getFullYear() + '.' + this.padZero(date.getMonth() + 1) + '.' + this.padZero(date.getDate());
    },
    padZero: function padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },
    formatDiscount: function formatDiscount(discount) {
      return this.$t('discount', '' + (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1));
    },
    formatAmount: function formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
});