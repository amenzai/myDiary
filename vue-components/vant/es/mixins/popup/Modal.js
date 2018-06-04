import _extends from "babel-runtime/helpers/extends";

export default {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "van-modal", class: _vm.className, style: _vm.style, on: { "touchmove": function touchmove($event) {
          $event.preventDefault();$event.stopPropagation();
        }, "click": function click($event) {
          _vm.$emit('click', $event);
        } } })]);
  },

  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style: function style() {
      return _extends({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
};