import _Number$isNaN from 'babel-runtime/core-js/number/is-nan';

import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('button', { class: _vm.b('minus', { disabled: _vm.minusDisabled }), on: { "click": function click($event) {
          _vm.onChange('minus');
        } } }), _c('input', { class: _vm.b('input'), attrs: { "type": "number", "disabled": _vm.disabled || _vm.disableInput }, domProps: { "value": _vm.currentValue }, on: { "input": _vm.onInput, "keypress": _vm.onKeypress } }), _c('button', { class: _vm.b('plus', { disabled: _vm.plusDisabled }), on: { "click": function click($event) {
          _vm.onChange('plus');
        } } })]);
  },

  name: 'stepper',

  props: {
    value: {},
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data: function data() {
    var value = this.value ? +this.value : +this.defaultValue;
    var correctedValue = this.correctValue(value);
    if (value !== correctedValue) {
      value = correctedValue;
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },


  computed: {
    minusDisabled: function minusDisabled() {
      var min = +this.min;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return min === currentValue || currentValue - step < min || this.disabled;
    },
    plusDisabled: function plusDisabled() {
      var max = +this.max;
      var step = +this.step;
      var currentValue = +this.currentValue;
      return max === currentValue || currentValue + step > max || this.disabled;
    }
  },

  watch: {
    value: function value(val) {
      if (val !== '') {
        val = this.correctValue(+val);
        if (val !== this.currentValue) {
          this.currentValue = val;
        }
      }
    }
  },

  methods: {
    correctValue: function correctValue(value) {
      return _Number$isNaN(value) ? this.min : Math.max(this.min, Math.min(this.max, value));
    },
    onInput: function onInput(event) {
      var value = event.target.value;

      this.currentValue = value ? this.correctValue(+value) : value;
      event.target.value = this.currentValue;
      this.emitInput();
    },
    onChange: function onChange(type) {
      if (this.minusDisabled && type === 'minus' || this.plusDisabled && type === 'plus') {
        this.$emit('overlimit', type);
        return;
      }

      var step = +this.step;
      var currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? currentValue - step : currentValue + step;
      this.emitInput();
      this.$emit(type);
    },
    onKeypress: function onKeypress(event) {
      if (this.integer && event.keyCode === 46) {
        event.preventDefault();
      }
    },
    emitInput: function emitInput() {
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  }
});