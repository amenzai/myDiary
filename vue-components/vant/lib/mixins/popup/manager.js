'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
  className: '',
  customStyle: {}
};

exports.default = {
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!_context2.default.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      _context2.default.stack.push({ vm: vm, config: config, targetNode: targetNode });
      this.update();
    };
  },
  close: function close(id) {
    var stack = _context2.default.stack;

    if (stack.length) {
      if (_context2.default.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        _context2.default.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = _context2.default.modal;

    if (!modal) {
      modal = new (_vue2.default.extend(_Modal2.default))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);

      _context2.default.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (_context2.default.top) {
      var _context$top = _context2.default.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;

      targetNode.appendChild(modal.$el);
      (0, _assign2.default)(modal, (0, _extends3.default)({}, defaultConfig, config, {
        visible: true
      }));
    }
  },

  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    if (_context2.default.top) {
      var vm = _context2.default.top.vm;

      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
};