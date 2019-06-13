<template>
  <input
    class="p-input-file"
    type="file"
    multiple=""
    aria-label="label"
    @change="$emit('change', $event.target.files)"
  />
</template>
<script>
export default {
  name: "Upload_Input",
  props: ["value"],
  model: {
    prop: "value",
    event: "change"
  }
};
</script>