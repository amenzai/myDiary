'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type, { uneditable: !_vm.editable }]), on: { "click": _vm.onClick } }, [_c('div', { class: _vm.b('content') }, [_vm.type === 'add' ? [_c('icon', { class: _vm.b('icon'), attrs: { "name": "add2" } }), _c('div', { class: _vm.b('text') }, [_vm._v(_vm._s(_vm.addText || _vm.$t('addText')))])] : _vm.type === 'edit' ? [_c('icon', { class: _vm.b('icon'), attrs: { "name": "contact" } }), _c('div', { class: _vm.b('text') }, [_c('div', [_vm._v(_vm._s(_vm.$t('contact')) + "：" + _vm._s(_vm.name))]), _c('div', [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(_vm.tel))])])] : _vm._e()], 2), _vm.editable ? _c('icon', { class: _vm.b('arrow'), attrs: { "name": "arrow" } }) : _vm._e()], 1);
  },

  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
});