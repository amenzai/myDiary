'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: [_vm.b({ select: _vm.select }), 'van-hairline'], attrs: { "href": _vm.url }, on: { "click": _vm.onClick } }, [_vm.isDef(_vm.info) ? _c('div', { class: _vm.b('info') }, [_vm._v(_vm._s(_vm.info))]) : _vm._e(), _vm._v("\n  " + _vm._s(_vm.title) + "\n")]);
  },

  name: 'badge',

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },

  computed: {
    select: function select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },

  methods: {
    isDef: _utils.isDef,

    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
});