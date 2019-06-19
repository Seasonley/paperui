<template>
  <div
    ref="root"
    class="p-tabpanel"
    role="tabpanel"
    id="nils-tab"
    aria-labelledby="nils"
    v-show="activeKey == value && !isDisabled"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabPanel",
  props: ["value", "disabled"],
  data() {
    return {
      activeKey: null
    };
  },
  computed: {
    isDisabled() {
      return this.disabled != undefined && this.disabled != false;
    }
  },
  mounted() {
    this.$on("update:activeKey", v => (this.activeKey = v));
  }
};
</script>
