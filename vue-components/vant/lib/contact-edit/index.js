'use strict';

exports.__esModule = true;

var _field = require('../field');

var _field2 = _interopRequireDefault(_field);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _toast = require('../toast');

var _toast2 = _interopRequireDefault(_toast);

var _mobile = require('../utils/validate/mobile');

var _mobile2 = _interopRequireDefault(_mobile);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_c('cell-group', [_c('field', { attrs: { "maxlength": "30", "label": _vm.$t('contact'), "placeholder": _vm.$t('name'), "error": _vm.errorInfo.name }, on: { "focus": function focus($event) {
          _vm.onFocus('name');
        } }, model: { value: _vm.data.name, callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        }, expression: "data.name" } }), _c('field', { attrs: { "type": "tel", "label": _vm.$t('tel'), "placeholder": _vm.$t('telPlaceholder'), "error": _vm.errorInfo.tel }, on: { "focus": function focus($event) {
          _vm.onFocus('tel');
        } }, model: { value: _vm.data.tel, callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        }, expression: "data.tel" } })], 1), _c('div', { class: _vm.b('buttons') }, [_c('van-button', { attrs: { "block": "", "loading": _vm.isSaving, "type": "primary" }, on: { "click": _vm.onSave } }, [_vm._v(_vm._s(_vm.$t('save')))]), _vm.isEdit ? _c('van-button', { attrs: { "block": "", "loading": _vm.isDeleting }, on: { "click": _vm.onDelete } }, [_vm._v(_vm._s(_vm.$t('delete')))]) : _vm._e()], 1)], 1);
  },

  name: 'contact-edit',

  components: {
    Field: _field2.default,
    VanButton: _button2.default
  },

  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return {
          id: '',
          tel: '',
          name: ''
        };
      }
    },
    telValidator: {
      type: Function,
      default: _mobile2.default
    }
  },

  data: function data() {
    return {
      data: this.contactInfo,
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },

  watch: {
    contactInfo: function contactInfo(val) {
      this.data = val;
    }
  },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key];
      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : this.$t('nameOverlimit') : this.$t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);
        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast2.default)(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (!this.isDeleting) {
        _dialog2.default.confirm({
          message: this.$t('confirmDelete')
        }).then(function () {
          _this2.$emit('delete', _this2.data);
        });
      }
    }
  }
});