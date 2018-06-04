'use strict';

exports.__esModule = true;

var _create = require('../../utils/create');

var _create2 = _interopRequireDefault(_create);

var _field = require('../../field');

var _field2 = _interopRequireDefault(_field);

var _email = require('../../utils/validate/email');

var _email2 = _interopRequireDefault(_email);

var _number = require('../../utils/validate/number');

var _number2 = _interopRequireDefault(_number);

var _SkuImgUploader = require('./SkuImgUploader');

var _SkuImgUploader2 = _interopRequireDefault(_SkuImgUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell-group', { class: _vm.b() }, [_vm._l(_vm.messages, function (message, index) {
      return [message.type === 'image' ? _c('cell', { key: _vm.goodsId + "-" + index, class: _vm.b('image-cell'), attrs: { "label": _vm.$t('onePic'), "required": message.required == '1', "title": message.name } }, [_c('sku-img-uploader', { attrs: { "upload-img": _vm.messageConfig.uploadImg, "max-size": _vm.messageConfig.uploadMaxSize }, model: { value: _vm.messageValues[index].value, callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          }, expression: "messageValues[index].value" } })], 1) : _c('field', { key: _vm.goodsId + "-" + index, attrs: { "required": message.required == '1', "label": message.name, "placeholder": _vm.getPlaceholder(message), "type": _vm.getType(message) }, model: { value: _vm.messageValues[index].value, callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          }, expression: "messageValues[index].value" } })];
    })], 2);
  },

  name: 'sku-messages',

  components: {
    SkuImgUploader: _SkuImgUploader2.default,
    Field: _field2.default
  },

  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },

  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },

  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },

  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },

  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return { value: '' };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }
      if (message.type === 'id_no') {
        return 'text';
      }
      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages['message_' + index] = value;
      });

      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};

      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];
        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[message.name] = value;
      });

      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || this.$t('placeholder.' + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? 'upload' : 'fill';
            return this.$t(textType) + message.name;
          }
        } else {
          if (message.type === 'tel' && !(0, _number2.default)(value)) {
            return this.$t('number');
          }
          if (message.type === 'email' && !(0, _email2.default)(value)) {
            return this.$t('email');
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return this.$t('id_no');
          }
        }

        if (value.length > 200) {
          return message.name + ' ' + this.$t('overlimit');
        }
      }
    }
  }
});