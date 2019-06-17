<template>
  <button
    ref="root"
    class="p-tab"
    role="tab"
    aria-selected=""
    aria-controls="complexcomplex"
    id="complex"
    :tabindex="isActived ? 0 : -1"
    @focus="$dispatch('Tabs', 'keychange', value)"
    @keydown.left="findTab('prev')"
    @keydown.right="findTab('next')"
  >
    <slot></slot>
  </button>
</template>
<script>
import string from "../filters/string.js";
import emitter from "../mixins/emitter.js";
export default {
  name: "Tab",
  props: ["value"],
  data() {
    return {
      activeKey: null
    };
  },
  filters: { string },
  mixins: [emitter],
  mounted() {
    this.$on("update:activeKey", function(v) {
      this.activeKey = v;
      this.isActived && this.$refs.root.focus();
    });
    this.$on("init:activeKey", function(v) {
      this.activeKey = v;
    });
  },
  computed: {
    isActived() {
      return this.activeKey == this.value;
    }
  },
  methods: {
    findTab(vector) {
      var p = this.$refs.root,
        p1 = p,
        p2 = p;
      var tab = { prev: null, next: null };
      if (vector == "prev")
        while ((p1 = p1.previousElementSibling)) {
          if (!p1.disabled) {
            tab.prev = p1;
            break;
          }
        }
      if (vector == "next")
        while ((p2 = p2.nextElementSibling)) {
          if (!p2.disabled) {
            tab.next = p2;
            break;
          }
        }
      tab[vector] && tab[vector].focus();
      p = p1 = p2 = tab = null;
    }
  }
};
</script>
