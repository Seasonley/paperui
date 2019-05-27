<template>
  <button>
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

<style>
button {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: var(--pri);
  background-color: var(--lt);
  border:0;
}
button[type="primary"] {
  color: var(--lt);
  background-color: var(--pri);
}
button[type=""] {
  color: var(--lt);
  background-color: var(--pri);
}
</style>
