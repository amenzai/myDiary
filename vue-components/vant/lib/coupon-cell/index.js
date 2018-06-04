'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_c('cell', { attrs: { "title": _vm.title || _vm.$t('title'), "value": _vm.value, "is-link": _vm.editable }, on: { "click": function click($event) {
          _vm.$emit('click');
        } } })], 1);
  },

  name: 'coupon-cell',

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: String,
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    value: function value() {
      var coupons = this.coupons;

      var coupon = coupons[this.chosenCoupon];
      if (coupon) {
        return this.$t('reduce') + '\uFFE5' + (coupon.value / 100).toFixed(2);
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
});