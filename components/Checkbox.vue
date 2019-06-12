<template>
  <input type="checkbox" class="p-check">
</template>
<script>
export default {
  name: "Checkbox",
  model: {
    prop: 'checked',
    event: 'change'
  },
};
</script>
