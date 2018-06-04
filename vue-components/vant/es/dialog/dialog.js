
import create from '../utils/create';
import VanButton from '../button';
import Popup from '../mixins/popup';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "van-dialog-bounce" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b() }, [_vm.title ? _c('div', { class: _vm.b('header'), domProps: { "textContent": _vm._s(_vm.title) } }) : _vm._e(), _c('div', { staticClass: "van-hairline", class: _vm.b('content') }, [_vm._t("default", [_vm.message ? _c('div', { class: _vm.b('message', { withtitle: _vm.title }), domProps: { "innerHTML": _vm._s(_vm.message) } }) : _vm._e()])], 2), _c('div', { class: _vm.b('footer', { 'buttons': _vm.showCancelButton && _vm.showConfirmButton }) }, [_c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showCancelButton, expression: "showCancelButton" }], class: _vm.b('cancel'), attrs: { "loading": _vm.loading.cancel, "size": "large" }, on: { "click": function click($event) {
          _vm.handleAction('cancel');
        } } }, [_vm._v("\n        " + _vm._s(_vm.cancelButtonText || _vm.$t('cancel')) + "\n      ")]), _c('van-button', { directives: [{ name: "show", rawName: "v-show", value: _vm.showConfirmButton, expression: "showConfirmButton" }], class: [_vm.b('confirm'), { 'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton }], attrs: { "size": "large", "loading": _vm.loading.confirm }, on: { "click": function click($event) {
          _vm.handleAction('confirm');
        } } }, [_vm._v("\n        " + _vm._s(_vm.confirmButtonText || _vm.$t('confirm')) + "\n      ")])], 1)])]);
  },

  name: 'dialog',

  components: {
    VanButton: VanButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },


  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function () {
          _this.onClose(action);
          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});