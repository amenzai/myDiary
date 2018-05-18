'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _findParent = require('../mixins/find-parent');

var _findParent2 = _interopRequireDefault(_findParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b({ disabled: _vm.isDisabled }), on: { "click": function click($event) {
          _vm.$emit('click');
        } } }, [_c('span', { class: _vm.b('input') }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], class: _vm.b('control'), attrs: { "type": "radio", "disabled": _vm.isDisabled }, domProps: { "value": _vm.name, "checked": _vm._q(_vm.currentValue, _vm.name) }, on: { "change": function change($event) {
          _vm.currentValue = _vm.name;
        } } }), _c('icon', { attrs: { "name": _vm.currentValue === _vm.name ? 'checked' : 'check' } })], 1), _vm.$slots.default ? _c('span', { class: _vm.b('label'), on: { "click": _vm.onClickLabel } }, [_vm._t("default")], 2) : _vm._e()]);
  },

  name: 'radio',

  mixins: [_findParent2.default],

  props: {
    name: null,
    value: null,
    disabled: Boolean
  },

  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },

  created: function created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});