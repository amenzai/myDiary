
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'row',

  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style: function style() {
      var margin = '-' + Number(this.gutter) / 2 + 'px';
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    }
  }
});