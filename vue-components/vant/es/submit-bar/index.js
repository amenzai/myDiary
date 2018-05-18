
import VanButton from '../button';
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.tip || _vm.$slots.tip, expression: "tip || $slots.tip" }], class: _vm.b('tip') }, [_vm._v("\n    " + _vm._s(_vm.tip)), _vm._t("tip")], 2), _c('div', { class: _vm.b('bar') }, [_vm._t("default"), _c('div', { class: _vm.b('price') }, [_vm.hasPrice ? [_c('span', [_vm._v(_vm._s(_vm.label || _vm.$t('label')))]), _c('span', { class: _vm.b('price-integer') }, [_vm._v(_vm._s(_vm.currency) + _vm._s(_vm.priceInterger) + ".")]), _c('span', { class: _vm.b('price-decimal') }, [_vm._v(_vm._s(_vm.priceDecimal))])] : _vm._e()], 2), _c('van-button', { attrs: { "type": _vm.buttonType, "disabled": _vm.disabled, "loading": _vm.loading }, on: { "click": _vm.onSubmit } }, [_vm._v("\n      " + _vm._s(_vm.loading ? '' : _vm.buttonText) + "\n    ")])], 2)]);
  },

  name: 'submit-bar',

  components: {
    VanButton: VanButton
  },

  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    },
    priceInterger: function priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal: function priceDecimal() {
      var decimal = Math.floor(this.price % 100);
      return (decimal < 10 ? '0' : '') + decimal;
    }
  },

  methods: {
    onSubmit: function onSubmit() {
      if (!this.disabled && !this.loading) {
        this.$emit('submit');
      }
    }
  }
});