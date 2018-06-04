'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('ul', { staticClass: "van-hairline--surround", class: _vm.b('security'), on: { "touchstart": function touchstart($event) {
          $event.stopPropagation();_vm.$emit('focus');
        } } }, _vm._l(_vm.points, function (visibility) {
      return _c('li', { staticClass: "van-hairline" }, [_c('i', { style: "visibility: " + visibility })]);
    })), _vm.errorInfo || _vm.info ? _c('div', { class: _vm.b(_vm.errorInfo ? 'error-info' : 'info'), domProps: { "textContent": _vm._s(_vm.errorInfo || _vm.info) } }) : _vm._e()]);
  },

  name: 'password-input',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },

  computed: {
    points: function points() {
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
});