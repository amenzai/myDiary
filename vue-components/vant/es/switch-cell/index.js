
import VanSwitch from '../switch';
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell', { class: _vm.b(), attrs: { "center": "", "title": _vm.title, "border": _vm.border } }, [_c('van-switch', _vm._b({ on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, 'van-switch', _vm.$props, false))], 1);
  },

  name: 'switch-cell',

  components: {
    VanSwitch: VanSwitch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
});