<template>
  <ul id="menubar1" role="menubar" aria-label="Text Formatting">
    <li role="none" v-for="menuitem in menuitems" :key="menuitem.label">
      <a
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
        tabindex="0"
        >{{ menuitem.label }}</a
      >
      <ul role="menu" :aria-label="menuitem.label">
        <li role="menuitemcheckbox" rel="font-bold" aria-checked="true">
          Bold
        </li>
        <li role="menuitemcheckbox" rel="font-italic" aria-checked="false">
          Italic
        </li>
        <li role="separator"></li>
        <li>
          <ul role="group" rel="font-color" aria-label="Text Color">
            <li role="menuitemradio" aria-checked="true">Black</li>
            <li role="menuitemradio" aria-checked="false">Blue</li>
            <li role="menuitemradio" aria-checked="false">Red</li>
            <li role="menuitemradio" aria-checked="false">Green</li>
          </ul>
        </li>

        <li role="separator"></li>
        <li>
          <ul role="group" rel="text-decoration" aria-label="Text Decoration">
            <li role="menuitemradio" aria-checked="true">None</li>
            <li role="menuitemradio" aria-checked="false">Overline</li>
            <li role="menuitemradio" aria-checked="false">Line-through</li>
            <li role="menuitemradio" aria-checked="false">Underline</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: "MenuBar",
  props: ["menuitems"],
  methods: {}
};
</script>
