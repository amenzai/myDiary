/**
 * find parent component by name
 */

export default {
  data: function data() {
    return {
      parent: null
    };
  },


  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
};