
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.currentTransition } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b((_obj = {}, _obj[_vm.position] = _vm.position, _obj)) }, [_vm._t("default")], 2)]);
    var _obj;
  },

  name: 'popup',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : 'popup-slide-' + this.position);
    }
  }
});