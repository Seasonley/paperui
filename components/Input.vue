<template>
  <input type="text" class="p-input" :value="value" @input="$emit('input', $event.target.value)">
</template>
<script>
export default {
  name: "Input",
  props:["value"],
};
</script>
