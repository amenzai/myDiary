'use strict';

exports.__esModule = true;

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = require('../radio-group');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('radio-group', { attrs: { "value": _vm.value }, on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('cell', { key: item.id, attrs: { "is-link": "" } }, [_c('radio', { attrs: { "name": item.id }, on: { "click": function click($event) {
            _vm.$emit('select', item, index);
          } } }, [_c('p', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.$t('contact')) + "：" + _vm._s(item.name))]), _c('p', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(item.tel))])]), _c('icon', { class: _vm.b('edit'), attrs: { "slot": "right-icon", "name": "edit" }, on: { "click": function click($event) {
            _vm.$emit('edit', item, index);
          } }, slot: "right-icon" })], 1);
    }))], 1), _c('cell', { staticClass: "van-hairline--top", class: _vm.b('add'), attrs: { "icon": "add", "is-link": "", "title": _vm.addText || _vm.$t('addText') }, on: { "click": function click($event) {
          _vm.$emit('add');
        } } })], 1);
  },

  name: 'contact-list',

  components: {
    Radio: _radio2.default,
    RadioGroup: _radioGroup2.default
  },

  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});