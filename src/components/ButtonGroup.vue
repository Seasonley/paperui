<template>
  <div class="p-btn-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
  props: {
    msg: String
  }
};
</script>
<style lang="scss">
.p-btn-group {
  display: inline-block;
}
.p-btn-group button + button {
  margin-left: -1px;
}
</style>
