'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _scroll = require('../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _event = require('../utils/event');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b() }, [_vm._t("default"), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.loading, expression: "loading" }], class: _vm.b('loading') }, [_vm._t("loading", [_c('loading'), _c('span', { class: _vm.b('loading-text') }, [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])], 2)], 2);
  },

  name: 'list',

  model: {
    prop: 'loading'
  },

  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },

  mounted: function mounted() {
    this.scroller = _scroll2.default.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.onScroll);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    /* istanbul ignore next */
    this.handler(true);
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.handler(false);
  },

  watch: {
    loading: function loading() {
      this.$nextTick(this.onScroll);
    },
    finished: function finished() {
      this.$nextTick(this.onScroll);
    }
  },

  methods: {
    onScroll: function onScroll() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;

      var scrollerHeight = _scroll2.default.getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (!scrollerHeight || _scroll2.default.getComputedStyle(el).display === 'none') {
        return;
      }

      var scrollTop = _scroll2.default.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;

      var reachBottom = false;

      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = _scroll2.default.getElementTop(el) - _scroll2.default.getElementTop(scroller) + _scroll2.default.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }

      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? _event.on : _event.off)(this.scroller, 'scroll', this.onScroll);
      }
    }
  }
});