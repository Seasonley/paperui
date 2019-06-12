<template>
  <input type="radio" class="p-radio">
</template>
<script>
export default {
  name: "Radio",
  model: {
    prop: 'checked',
    event: 'change'
  },
};
</script>
