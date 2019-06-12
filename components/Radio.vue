<template>
  <input type="radio" class="p-radio" :value="value" @click="$emit('change',$event.target.value)" :checked="value===model">
</template>
<script>
export default {
  name: "Radio",
  props:["value","model","checked"],
  model: {
    prop: 'model',
    event: 'change'
  },
};
</script>
