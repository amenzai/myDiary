
import findParent from '../mixins/find-parent';
import create from '../utils/create';
import { isDef } from '../utils';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b({ expanded: _vm.expanded }), { 'van-hairline--top': _vm.index }] }, [_c('cell', { class: _vm.b('title'), attrs: { "is-link": "" }, on: { "click": _vm.onClick } }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.expanded, expression: "expanded" }], class: _vm.b('content') }, [_vm._t("default")], 2)], 1);
  },

  name: 'collapse-item',

  mixins: [findParent],

  props: {
    name: [String, Number],
    title: String
  },

  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return isDef(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      var value = this.parent.value;

      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },

  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },


  methods: {
    onClick: function onClick() {
      var parent = this.parent;

      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    }
  }
});