<template>
  <span class="p-cascader">
    <input
      class="p-input p-cascader-input"
      type="text"
      :placeholder="placeholder"
    />
    <DataList :options="options"></DataList>
  </span>
</template>
<script>
import DataList from "./DataList.vue";
export default {
  name: "Cascader",
  props: {
    options: {},
    placeholder: String
  },
  computed: {},
  components: {
    DataList
  }
};
</script>
<style lang="scss">
.p-cascader {
  display: inline-block;
}
</style>
