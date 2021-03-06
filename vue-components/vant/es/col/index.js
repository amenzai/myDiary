
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-col", class: (_obj = {}, _obj["van-col-" + _vm.span] = _vm.span, _obj["van-col-offset-" + _vm.offset] = _vm.offset, _obj), style: _vm.style }, [_vm._t("default")], 2);
    var _obj;
  },

  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + 'px';
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
});