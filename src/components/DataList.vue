<template>
  <div>
    <ul class="p-datalist">
      <li
        class="p-dataitem"
        v-for="(item, index) in options"
        :key="item.label"
        @click="i = index"
      >
        {{ item.label }}
      </li>
    </ul>
    <DataList :options="options[i].children"></DataList>
  </div>
</template>
<script>
export default {
  name: "DataList",
  props: {
    options: Array
  },
  data: () => {
    return {
      i: 0
    };
  },
  components: {
    // DataGroup: () => import("./DataGroup.vue")
  },
  computed: {
    children(){
      return this.options&&this.options[this.i]&&this.props.options[this.data.i].children || []
    }
  }
};
</script>
<style lang="scss">
.p-cascader:hover {
  outline: 4px solid var(--gray);
}
.p-dataitem > .p-datalist {
  display: none;
}
.p-dataitem:hover > .p-datalist {
  display: block;
  margin-left: 100%;
  margin-top: -1em;
}
</style>
