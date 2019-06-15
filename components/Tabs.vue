<template>
  <div class="p-tabs-wrapper">
    <div
      class="p-tablist"
      role="tablist"
      aria-label="Entertainment"
      @click="clickhandler"
    >
      <slot name="tablist"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  methods: {
    clickhandler(e) {
      console.log(e.target);
    }
  }
};
</script>
