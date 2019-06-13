<template>
  <input
    type="checkbox"
    class="p-check"
    :checked="checked"
    @change="$emit('change', $event.target.checked)"
  />
</template>
<script>
export default {
  name: "Checkbox",
  props: {
    checked: Boolean
  },
  model: {
    prop: "checked",
    event: "change"
  }
};
</script>
