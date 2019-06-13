<template>
  <input
    type="range"
    aria-label="input"
    class="p-rate"
    min="0"
    max="5"
    step="0.5"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  name: "Rate",
  props: ["value"]
};
</script>
