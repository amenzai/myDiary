'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _Key = require('./Key');

var _Key2 = _interopRequireDefault(_Key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.transition ? 'van-slide-bottom' : '' } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.show, expression: "show" }], class: _vm.b([_vm.theme]), style: _vm.style, on: { "animationend": _vm.onAnimationEnd, "webkitAnimationEnd": _vm.onAnimationEnd } }, [_vm.title || _vm.showTitleClose ? _c('div', { staticClass: "van-hairline--top", class: _vm.b('title') }, [_c('span', { domProps: { "textContent": _vm._s(_vm.title) } }), _vm.showTitleClose ? _c('span', { class: _vm.b('close'), domProps: { "textContent": _vm._s(_vm.closeButtonText) }, on: { "click": _vm.onBlur } }) : _vm._e()]) : _vm._e(), _c('div', { class: _vm.b('body') }, _vm._l(_vm.keys, function (key, index) {
      return _c('key', { key: key.text, attrs: { "text": key.text, "type": key.type }, on: { "press": _vm.onPressKey } });
    })), _vm.theme === 'custom' ? _c('div', { class: _vm.b('sidebar') }, [_c('key', { attrs: { "text": 'delete', "type": ['delete', 'big'] }, on: { "press": _vm.onPressKey } }), _c('key', { attrs: { "text": _vm.closeButtonText, "type": ['green', 'big'] }, on: { "press": _vm.onPressKey } })], 1) : _vm._e()])]);
  },

  name: 'number-keyboard',

  components: { Key: _Key2.default },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },

  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },

  computed: {
    keys: function keys() {
      var keys = [];
      for (var i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }

      switch (this.theme) {
        case 'default':
          keys.push({ text: this.extraKey, type: ['gray'] }, { text: 0 }, { text: 'delete', type: ['gray', 'delete'] });
          break;
        case 'custom':
          keys.push({ text: 0, type: ['middle'] }, { text: this.extraKey });
          break;
      }

      return keys;
    },
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    },
    showTitleClose: function showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    }
  },

  methods: {
    handler: function handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPressKey: function onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === 'delete') {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onBlur();
      } else {
        this.$emit('input', text);
      }
    }
  }
});