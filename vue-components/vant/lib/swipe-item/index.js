'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b(), style: _vm.style }, [_vm._t("default")], 2);
  },

  name: 'swipe-item',

  data: function data() {
    return {
      offset: 0
    };
  },

  computed: {
    style: function style() {
      var _$parent = this.$parent,
          vertical = _$parent.vertical,
          width = _$parent.width,
          height = _$parent.height;

      return {
        width: width + 'px',
        height: vertical ? height + 'px' : '100%',
        transform: 'translate' + (vertical ? 'Y' : 'X') + '(' + this.offset + 'px)'
      };
    }
  },

  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
});