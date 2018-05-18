'use strict';

exports.__esModule = true;

var _findParent = require('../mixins/find-parent');

var _findParent2 = _interopRequireDefault(_findParent);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.b({ expanded: _vm.expanded }), { 'van-hairline--top': _vm.index }] }, [_c('cell', { class: _vm.b('title'), attrs: { "is-link": "" }, on: { "click": _vm.onClick } }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.expanded, expression: "expanded" }], class: _vm.b('content') }, [_vm._t("default")], 2)], 1);
  },

  name: 'collapse-item',

  mixins: [_findParent2.default],

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
      return (0, _utils.isDef)(this.name) ? this.name : this.index;
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