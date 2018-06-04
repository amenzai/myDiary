'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "van-hairline--top-bottom", class: _vm.b() }, [_vm._t("default")], 2);
  },

  name: 'collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data: function data() {
    return {
      items: []
    };
  },

  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
});