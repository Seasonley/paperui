<template>
  <input
    type="range"
    aria-label="input"
    class="p-range"
    :min="min"
    :max="max"
    :step="step"
    :value="value"
    @input="$emit('input', $event.target.value)"
    aria-orientation="horizontal"
    role="slider"
  />
</template>
<script>
export default {
  name: "Slider_Single",
  props: ["value", "min", "max", "step"]
};
</script>
