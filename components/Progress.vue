<template>
  <progress
    class="p-progress"
    :value="value"
    :min="min"
    :max="max"
    :style="`--mix:${mix};--percent:${percent};--bkg:${bkg}`"
  ></progress>
</template>
<script>
import { percent } from "../utils/Math.js";
export default {
  name: "Progress",
  props: {
    value: { default: 0.5 },
    min: { default: 0 },
    max: { default: 1 },
    border: {}
  },
  computed: {
    mix() {
      return this.percent > 50 ? "darken" : "lighten";
    },
    percent() {
      return percent(this.value, this.max - this.min);
    },
    bkg() {
      if (this.border) {
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500px' height='500px'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='black'/%3E%3Ccircle cx='50%25' cy='50%25' r='calc(50%25 - (3%25 * ${
          this.border
        }))' fill='white'/%3E%3C/svg%3E")`;
      }
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500px' height='500px'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='black'/%3E/svg%3E")`;
    }
  }
};
</script>
