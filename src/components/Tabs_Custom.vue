<template>
  <div class="p-tabs-wrapper">
    <div class="p-tablist" role="tablist">
      <slot name="tablist"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import emitter from "../mixins/emitter.js";
export default {
  name: "Tabs",
  props: ["activeKey"],
  mixins: [emitter],
  mounted() {
    this.$broadcast("TabPanel", "update:activeKey", this.activeKey);
    this.$broadcast("Tab", "init:activeKey", this.activeKey);
    this.$on("keychange", function(v) {
      this.$emit("update:activeKey", v);
      this.$broadcast("TabPanel", "update:activeKey", v);
      this.$broadcast("Tab", "update:activeKey", v);
    });
  },
  methods: {}
};
</script>
