
import create from '../utils/create';
import VanButton from '../button';
import RouterLink from '../mixins/router-link';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('van-button', { class: _vm.b(), attrs: { "tag": "a", "href": _vm.url, "type": _vm.primary ? 'primary' : 'default', "bottom-action": "" }, on: { "click": _vm.onClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },

  name: 'goods-action-big-btn',

  mixins: [RouterLink],

  components: {
    VanButton: VanButton
  },

  props: {
    url: String,
    text: String,
    primary: Boolean
  },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});