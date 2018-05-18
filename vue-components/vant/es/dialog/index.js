import _extends from 'babel-runtime/helpers/extends';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Promise from 'babel-runtime/core-js/promise';
import Vue from 'vue';
import VanDialog from './dialog';

var instance = void 0;

var initInstance = function initInstance() {
  instance = new (Vue.extend(VanDialog))({
    el: document.createElement('div')
  });

  instance.$on('input', function (value) {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

var Dialog = function Dialog(options) {
  return new _Promise(function (resolve, reject) {
    if (!instance) {
      initInstance();
    }

    _Object$assign(instance, _extends({
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
  return Dialog(_extends({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  _Object$assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.install = function () {
  Vue.use(VanDialog);
};

Vue.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();

export default Dialog;