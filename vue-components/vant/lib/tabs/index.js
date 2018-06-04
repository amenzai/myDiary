'use strict';

exports.__esModule = true;

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _raf = require('../utils/raf');

var _event = require('../utils/event');

var _node = require('../utils/node');

var _node2 = _interopRequireDefault(_node);

var _scroll = require('../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _touch = require('../mixins/touch');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.b([_vm.type]) }, [_c('div', { ref: "wrap", class: [_vm.b('wrap', [_vm.position, { scrollable: _vm.scrollable }]), { 'van-hairline--top-bottom': _vm.type === 'line' }] }, [_c('div', { ref: "nav", class: _vm.b('nav', [_vm.type]) }, [_vm.type === 'line' ? _c('div', { class: _vm.b('line'), style: _vm.lineStyle }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', { ref: "tabs", refInFor: true, staticClass: "van-tab", class: {
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled
        }, on: { "click": function click($event) {
            _vm.onClick(index);
          } } }, [tab.$slots.title ? _c('van-node', { attrs: { "node": tab.$slots.title } }) : _c('span', { staticClass: "van-ellipsis" }, [_vm._v(_vm._s(tab.title))])], 1);
    })], 2)]), _c('div', { ref: "content", class: _vm.b('content') }, [_vm._t("default")], 2)]);
  },

  name: 'tabs',

  mixins: [_touch2.default],

  components: {
    VanNode: _node2.default
  },

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },

  data: function data() {
    return {
      tabs: [],
      position: 'content-top',
      curActive: 0,
      lineStyle: {}
    };
  },

  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    }
  },

  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        _scroll2.default.setScrollTop(this.scrollEl, _scroll2.default.getElementTop(this.$el));
      }
    },
    sticky: function sticky(isSticky) {
      this.scrollHandler(isSticky);
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(function () {
      if (_this.sticky) {
        _this.scrollHandler(true);
      }
      if (_this.swipeable) {
        _this.swipeableHandler(true);
      }
      _this.scrollIntoView();
    });
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    if (this.sticky) {
      this.scrollHandler(false);
    }
    /* istanbul ignore next */
    if (this.swipeable) {
      this.swipeableHandler(false);
    }
  },

  methods: {
    // whether to bind sticky listener
    scrollHandler: function scrollHandler(init) {
      this.scrollEl = this.scrollEl || _scroll2.default.getScrollEventTarget(this.$el);
      (init ? _event.on : _event.off)(this.scrollEl, 'scroll', this.onScroll, true);
      if (init) {
        this.onScroll();
      }
    },

    // whether to bind content swipe listener
    swipeableHandler: function swipeableHandler(init) {
      var content = this.$refs.content;

      var action = init ? _event.on : _event.off;
      action(content, 'touchstart', this.touchStart);
      action(content, 'touchmove', this.touchMove);
      action(content, 'touchend', this.onTouchEnd);
      action(content, 'touchcancel', this.onTouchEnd);
    },

    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;

      var minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },

    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = _scroll2.default.getScrollTop(this.scrollEl);
      var elTopToPageTop = _scroll2.default.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'content-bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'page-top';
      } else {
        this.position = 'content-top';
      }
    },

    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      this.$nextTick(function () {
        if (!_this2.$refs.tabs) {
          return;
        }

        var tab = _this2.$refs.tabs[_this2.curActive];
        var width = _this2.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        _this2.lineStyle = {
          width: width + 'px',
          transform: 'translateX(' + left + 'px)',
          transitionDuration: _this2.duration + 's'
        };
      });
    },

    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      this.curActive = active;
      this.$emit('input', active);
    },

    // emit event when clicked
    onClick: function onClick(index) {
      var _tabs$index = this.tabs[index],
          title = _tabs$index.title,
          disabled = _tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.$emit('click', index, title);
        this.setCurActive(index);
      }
    },

    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
    },

    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to) {
      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);
      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          (0, _raf.raf)(animate);
        }
      };
      animate();
    }
  }
});