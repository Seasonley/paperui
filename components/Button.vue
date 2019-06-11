<template>
  <button class="p-btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>
