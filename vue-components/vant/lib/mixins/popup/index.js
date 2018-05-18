'use strict';

exports.__esModule = true;

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _scroll = require('../../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _event = require('../../utils/event');

var _touch = require('../touch');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_touch2.default],

  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: Function,
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value: function value(val) {
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },

  created: function created() {
    this._popupId = 'popup-' + _context2.default.plusKey('id');
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }
    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },

  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        _context2.default.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);
        if (!_context2.default.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        _context2.default.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context2.default.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);
        if (!_context2.default.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      _manager2.default.close(this._popupId);
      this.$emit('input', false);
    },
    move: function move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
        /* istanbul ignore if */
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = _scroll2.default.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;

      var status = '11';

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      /* istanbul ignore next */
      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      if (this.overlay) {
        _manager2.default.open(this, {
          zIndex: _context2.default.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        _manager2.default.close(this._popupId);
      }
      this.$el.style.zIndex = _context2.default.plusKey('zIndex');
    }
  }
};