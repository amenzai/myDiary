import { isServer } from './index';

export default {
  debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      const later = () => {
        const last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          result = func.apply(context, args);
        }
      };
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result;
    };
  },

  /* 找到最近的触发滚动事件的元素
   * @param {Element} element
	 * @param {Element} rootElement
	 * @return {Element | window}
   */
  getScrollEventTarget(element, rootParent = window) {
    let currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      const overflowY = this.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent;
  },

  // 判断元素是否被加入到页面节点内
  isAttached(element) {
    let currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true;
      }
      if (currentNode.nodeType === 11) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
  },

  // 获取滚动高度
  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },

  // 设置滚动高度
  setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },

  // 获取元素距离顶部高度
  getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },

  getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },

  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
};
