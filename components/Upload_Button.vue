<template>
  <span class="p-input-file-wrapper">
    <input
      class="p-input-file"
      type="file"
      multiple=""
      :aria-label="label"
      onChange="{this.change}"
      @change="$emit('change', $event.target.files)"
    />
    <span>{{label}}</span>
  </span>
</template>
<script>
export default {
  name: "Upload_Button",
  props: ["value","label"],
  model: {
    prop: "value",
    event: "change"
  }
};
</script>