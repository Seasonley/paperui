<template>
  <button
    class="p-switch"
    role="switch"
    :aria-checked="value ? 'true' : 'false'"
    @click="$emit('input', !value)"
  ></button>
</template>
<script>
export default {
  name: "Switcher",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
};
</script>
