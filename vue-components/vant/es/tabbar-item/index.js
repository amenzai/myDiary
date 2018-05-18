
import { isDef } from '../utils';
import create from '../utils/create';
import RouterLink from '../mixins/router-link';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ active: _vm.active }), on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('icon', { dot: _vm.dot }) }, [_vm._t("icon", [_vm.icon ? _c('icon', { attrs: { "name": _vm.icon } }) : _vm._e()], { active: _vm.active }), _vm.isDef(_vm.info) ? _c('div', { staticClass: "van-icon__info" }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2), _c('div', { class: _vm.b('text') }, [_vm._t("default", null, { active: _vm.active })], 2)]);
  },

  name: 'tabbar-item',

  mixins: [RouterLink],

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },


  methods: {
    isDef: isDef,

    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
});