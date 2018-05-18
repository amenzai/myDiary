import _extends from 'babel-runtime/helpers/extends';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import Vue from 'vue';
import Modal from './Modal';
import context from './context';

var defaultConfig = {
  className: '',
  customStyle: {}
};

export default {
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!context.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      context.stack.push({ vm: vm, config: config, targetNode: targetNode });
      this.update();
    };
  },
  close: function close(id) {
    var stack = context.stack;


    if (stack.length) {
      if (context.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        context.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = context.modal;


    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);

      context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (context.top) {
      var _context$top = context.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;


      targetNode.appendChild(modal.$el);
      _Object$assign(modal, _extends({}, defaultConfig, config, {
        visible: true
      }));
    }
  },


  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    if (context.top) {
      var vm = context.top.vm;

      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
};