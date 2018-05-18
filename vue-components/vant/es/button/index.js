
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.tag, { tag: "component", class: _vm.b([_vm.type, _vm.size, {
        block: _vm.block,
        loading: _vm.loading,
        disabled: _vm.disabled,
        unclickable: _vm.disabled || _vm.loading,
        'bottom-action': _vm.bottomAction
      }]), attrs: { "type": _vm.nativeType, "disabled": _vm.disabled }, on: { "click": _vm.onClick } }, [_vm.loading ? _c('loading', { attrs: { "size": "20px", "color": _vm.type === 'default' ? 'black' : 'white' } }) : _vm._e(), _c('span', { class: _vm.b('text') }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)], 1);
  },

  name: 'button',

  props: {
    text: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
});