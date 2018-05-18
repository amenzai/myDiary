import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

var proto = Vue.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }
    Vue.util.defineReactive(proto, '$vantLang', defaultLang);
    Vue.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = defaultMessages, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _add;

    proto.$vantLang = lang;
    this.add((_add = {}, _add[lang] = messages, _add));
  },
  add: function add() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    deepAssign(proto.$vantMessages, messages);
  }
};

locale.install();

export default locale;