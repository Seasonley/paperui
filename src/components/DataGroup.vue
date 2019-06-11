<template>
  <ul class="p-datalist">
    <li
      class="p-dataitem"
      v-for="(item, index) in options"
      :key="item.label"
      @click="onHover(index)"
    >
      {{ item.label }}
      <DataList :options="item.children"></DataList>
    </li>
  </ul>
</template>
<script>
export default {
  name: "DataGroup",
  props: {
    options: Array
  },
  components: {
    DataList: () => import("./DataList.vue")
  },
  methods: {
    onHover(index) {
      alert(index);
    }
  }
};
</script>
<style lang="scss"></style>
