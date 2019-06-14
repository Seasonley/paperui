<template>
  <div
    class="p-combobox-wrapper"
    :kind="kind"
    :style="`--size:${size}`"
    v-blurclick="blurClickHandler"
  >
    <template v-if="kind === 'dropdownlist'">
      <button
        class="p-btn p-combobox-input"
        role="combobox"
        aria-autocomplete="list"
        :aria-expanded="expanded.toString()"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="activeId"
        @focus="focusHandler"
        @click="focusHandler"
        @blur="blurClickHandler"
      >
        <span v-show="!isEmpty" role="textbox">select</span>
        <span v-show="isEmpty" class="p-combobox-placeholder">{{
          placeholder
        }}</span>
      </button>
    </template>
    <template v-else>
      <input
        class="p-input p-combobox-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        :aria-expanded="expanded.toString()"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="activeId"
        @focus="focusHandler"
        @blur="blurClickHandler"
        :placeholder="placeholder"
      />
    </template>
    <div
      class="p-combobox-dropdown"
      aria-label="Show options"
      role="button"
      :tabindex="kind === 'dropdown' ? -1 : false"
      @click="toggleExpanded"
    ></div>
    <div class="p-combobox-list" v-show="expanded">
      <ul
        class="p-listbox"
        role="listbox"
        :id="listboxId"
        aria-label=""
        :aria-expanded="expanded.toString()"
      >
        <li class="p-option" id="lb1-sd" role="option" aria-selected="false">
          1
        </li>
        <li class="p-option" role="option">2</li>
        <li class="p-option" role="option">3</li>
        <li class="p-option" role="option">4</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { uid } from "../utils/Math.js";
import blurclick from "../directives/blurclick.js";
export default {
  name: "ComboBox",
  props: {
    value: { type: Array, default: () => [] },
    options: { type: Array },
    placeholder: { type: String, default: "" },
    kind: { type: String, default: "dropdownlist" },
    size: { type: String, default: "5" }
  },
  data() {
    return {
      expanded: false,
      focused: false,
      listboxId: uid("listbox")
    };
  },
  computed: {
    activeId() {
      return "";
    },
    isEmpty() {
      return this.value.length == 0;
    }
  },
  mounted() {},
  methods: {
    focusHandler() {
      this.expanded = true;
    },
    blurClickHandler() {
      this.expanded = false;
    },
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  },
  directives: { blurclick }
};
</script>
