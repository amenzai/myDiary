/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

import { on, off } from './event';

var context = '@@clickoutsideContext';

export default {
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };

    on(document, el[context].arg, handler);
  },
  update: function update(el, binding) {
    el[context].callback = binding.value;
  },
  unbind: function unbind(el) {
    off(document, el[context].arg, el[context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};