'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: { height: _vm.mainHeight + 'px' } }, [_c('div', { class: _vm.b('nav') }, _vm._l(_vm.items, function (item, index) {
      return _c('div', { staticClass: "van-ellipsis", class: _vm.b('nitem', { active: _vm.mainActiveIndex === index }), on: { "click": function click($event) {
            _vm.$emit('navclick', index);
          } } }, [_vm._v("\n      " + _vm._s(item.text) + "\n    ")]);
    })), _c('div', { class: _vm.b('content'), style: { height: _vm.itemHeight + 'px' } }, _vm._l(_vm.subItems, function (item) {
      return _c('div', { key: item.id, staticClass: "van-ellipsis", class: _vm.b('item', { active: _vm.activeId === item.id }), on: { "click": function click($event) {
            _vm.onItemSelect(item);
          } } }, [_vm._v("\n      " + _vm._s(item.text) + "\n      "), _vm.activeId === item.id ? _c('icon', { class: _vm.b('selected'), attrs: { "name": "success" } }) : _vm._e()], 1);
    }))]);
  },

  name: 'tree-select',

  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },

  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight: function mainHeight() {
      var maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight: function itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },

  methods: {
    onItemSelect: function onItemSelect(data) {
      this.$emit('itemclick', (0, _extends3.default)({}, data));
    }
  }
});