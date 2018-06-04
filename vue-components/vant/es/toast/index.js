import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import Vue from 'vue';
import VueToast from './toast';
import { isObj } from '../utils';

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};
var parseOptions = function parseOptions(message) {
  return isObj(message) ? message : { message: message };
};

var queue = [];
var singleton = true;
var currentOptions = _extends({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }
  return queue[queue.length - 1];
};

// transform toast options to popup props
function transformer(options) {
  options.overlay = options.mask;
  if (options.forbidClick && !options.overlay) {
    options.overlay = true;
    options.overlayStyle = { background: 'transparent' };
  }
  return options;
}

function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var toast = createInstance();

  options = _extends({}, currentOptions, parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  _Object$assign(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
};

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  _Object$assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

Toast.allowMultiple = function () {
  var allow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  singleton = !allow;
};

Toast.install = function () {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;