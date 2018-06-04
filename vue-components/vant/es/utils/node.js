/**
 * VNode helper
 */
export default {
  name: 'van-node',
  functional: true,
  props: {
    node: Array
  },
  render: function render(h, ctx) {
    return ctx.props.node;
  }
};