<template>
  <ul role="menubar" :aria-label="title">
    <li role="none" v-for="menuitem in menuitems" :key="menuitem.label">
      <a
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
        tabindex="0"
        >{{ menuitem.label }}</a
      >
      <ul role="menu" :aria-label="menuitem.label">
        <template v-for="(item, i) in menuitem.children">
          <li
            :key="i"
            role="menuitemcheckbox"
            :aria-checked="item.value | string"
            v-if="item.type === 'checkbox'"
          >
            {{ item.label }}
          </li>
          <li
            :key="i"
            role="separator"
            v-else-if="item.type === 'separator'"
          ></li>
          <li :key="i" v-else-if="item.children !== undefined">
            <MenuBarGroup :menuitems="item.children" />
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>
<script>
import string from "../filters/string.js";
import MenuBarGroup from "./MenuBar_Group.vue";
export default {
  name: "MenuBar",
  props: ["menuitems", "title"],
  methods: {},
  filters: { string },
  components: [MenuBarGroup]
};
</script>
