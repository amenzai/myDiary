'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = void 0;

var initInstance = function initInstance() {
  instance = new (_vue2.default.extend(_dialog2.default))({
    el: document.createElement('div')
  });

  instance.$on('input', function (value) {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

var Dialog = function Dialog(options) {
  return new _promise2.default(function (resolve, reject) {
    if (!instance) {
      initInstance();
    }

    (0, _assign2.default)(instance, (0, _extends3.default)({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = function (options) {
  return Dialog((0, _extends3.default)({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog((0, _extends3.default)({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _assign2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends3.default)({}, Dialog.defaultOptions);
};

Dialog.install = function () {
  _vue2.default.use(_dialog2.default);
};

_vue2.default.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();

exports.default = Dialog;