import _extends from 'babel-runtime/helpers/extends';

import create from '../utils/create';
import { isObj } from '../utils';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell', { class: _vm.b({
        error: _vm.error,
        disabled: _vm.$attrs.disabled,
        'has-icon': _vm.hasIcon,
        'min-height': _vm.type === 'textarea' && !_vm.autosize
      }), attrs: { "title": _vm.label, "center": _vm.center, "border": _vm.border, "required": _vm.required } }, [_vm._t("label", null, { slot: "title" }), _vm.type === 'textarea' ? _c('textarea', _vm._g(_vm._b({ ref: "textarea", class: _vm.b('control'), domProps: { "value": _vm.value } }, 'textarea', _vm.$attrs, false), _vm.listeners)) : _c('input', _vm._g(_vm._b({ class: _vm.b('control'), attrs: { "type": _vm.type }, domProps: { "value": _vm.value } }, 'input', _vm.$attrs, false), _vm.listeners)), _vm.errorMessage ? _c('div', { class: _vm.b('error-message'), domProps: { "textContent": _vm._s(_vm.errorMessage) } }) : _vm._e(), _vm.hasIcon ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.$slots.icon || _vm.value, expression: "$slots.icon || value" }], class: _vm.b('icon'), on: { "touchstart": function touchstart($event) {
          $event.preventDefault();return _vm.onClickIcon($event);
        } } }, [_vm._t("icon", [_c('icon', { attrs: { "name": _vm.icon } })])], 2) : _vm._e(), _vm.$slots.button ? _c('div', { class: _vm.b('button'), attrs: { "slot": "extra" }, slot: "extra" }, [_vm._t("button")], 2) : _vm._e()], 2);
  },

  name: 'field',

  inheritAttrs: false,

  props: {
    value: null,
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    required: Boolean,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    },
    onIconClick: {
      type: Function,
      default: function _default() {}
    }
  },

  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted: function mounted() {
    this.$nextTick(this.adjustSize);
  },


  computed: {
    hasIcon: function hasIcon() {
      return this.$slots.icon || this.icon;
    },
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },

  methods: {
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick();
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;

        var allowPoint = this.value.indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      if (!(this.type === 'textarea' && this.autosize)) {
        return;
      }

      var el = this.$refs.textarea;
      /* istanbul ignore if */
      if (!el) {
        return;
      }

      el.style.height = 'auto';

      var height = el.scrollHeight;
      if (isObj(this.autosize)) {
        var _autosize = this.autosize,
            maxHeight = _autosize.maxHeight,
            minHeight = _autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        el.style.height = height + 'px';
      }
    }
  }
});