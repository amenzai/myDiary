'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _utils.isObj)(message) ? message : { message: message };
};

var queue = [];
var singleton = true;
var currentOptions = (0, _extends3.default)({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (_vue2.default.extend(_toast2.default))({
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

  options = (0, _extends3.default)({}, currentOptions, parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  (0, _assign2.default)(toast, transformer(options));
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
    return Toast((0, _extends3.default)({
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
  (0, _assign2.default)(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = (0, _extends3.default)({}, defaultOptions);
};

Toast.allowMultiple = function () {
  var allow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  singleton = !allow;
};

Toast.install = function () {
  _vue2.default.use(_toast2.default);
};

_vue2.default.prototype.$toast = Toast;

exports.default = Toast;