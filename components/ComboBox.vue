<template>
  <div
    class="p-combobox-wrapper"
    :kind="kind"
    :style="`--size:${size}`"
    :multiple="multiple"
    :disabled="disabled"
    @keydown.tab="expanded = false"
    @keydown.enter.prevent.stop="toggleExpanded"
    @keydown.esc.prevent.stop="toggleExpanded(false)"
    @keydown.up.prevent="movePos('up')"
    @keydown.down.prevent="movePos('down')"
    @keydown.left.prevent="movePos((multiple !== undefined && 'left') || 'up')"
    @keydown.right.prevent="
      movePos((multiple !== undefined && 'right') || 'down')
    "
    @keydown.home.prevent="movePos('home')"
    @keydown.end.prevent="movePos('end')"
    ref="root"
  >
    <template v-if="kind === 'dropdownlist'">
      <button
        ref="input"
        class="p-btn p-combobox-input"
        role="combobox"
        :aria-disabled="(disabled !== undefined) | string"
        aria-autocomplete="tree"
        :aria-expanded="expanded | string"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="activeId"
        :aria-placeholder="placeholder"
        @focus="focusHandler"
      >
        <span v-show="selectedOption[0]" role="textbox">{{
          selectedOption | optionFilter
        }}</span>
        <span
          v-show="!selectedOption[0]"
          role="none"
          class="p-combobox-placeholder"
          >{{ placeholder }}</span
        >
      </button>
    </template>
    <template v-else>
      <span
        ref="input"
        class="p-input p-combobox-input"
        type="text"
        role="combobox"
        :aria-disabled="(disabled !== undefined) | string"
        aria-autocomplete="both"
        contenteditable="true"
        :aria-expanded="expanded | string"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="activeId"
        @focus="focusHandler"
        :placeholder="placeholder"
        :aria-placeholder="placeholder"
        @keydown.enter.prevent
        >{{ selectedOption | optionFilter }}</span
      >
    </template>
    <div
      class="p-combobox-dropdown"
      aria-label="Show options"
      role="button"
      :tabindex="kind === 'dropdown' ? -1 : false"
      @click="expanded = !expanded"
    ></div>
    <div
      class="p-combobox-list"
      v-show="expanded"
      role="tree"
      :aria-expanded="expanded | string"
    >
      <ul
        class="p-listbox"
        role="treeitem"
        :id="listboxId"
        :aria-expanded="expanded | string"
        v-for="(listbox, col) in listboxs"
        :key="col"
      >
        <li
          class="p-option"
          role="treeitem"
          :aria-level="col + 1"
          :aria-setsize="listboxs[col].length"
          :aria-posinset="i + 1"
          v-for="(item, i) in listbox"
          :id="item.id"
          :aria-label="item.label"
          :aria-selected="
            (selectedOption[col] && selectedOption[col].id === item.id) ||
              false | string
          "
          :aria-disabled="item.disabled | string"
          :disabled="item.disabled"
          :key="item.id"
          @click.stop.prevent="optionSelectHandler(col, i)"
          @keydown.enter.stop.prevent="optionSelectHandler(col, i)"
          @keydown.space.stop.prevent="optionSelectHandler(col, i)"
          :tabindex="
            selectedOption[col] && selectedOption[col].id === item.id ? 0 : -1
          "
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { uid } from "../utils/Math.js";
import blurclick from "../directives/blurclick.js";
import string from "../filters/string.js";
import optionFilter from "../filters/optionFilter.js";
import Dom from "../utils/Dom.js";
export default {
  name: "ComboBox",
  props: {
    multiple: {},
    disabled: {},
    value: { type: Array, default: () => [] },
    options: { type: Array },
    placeholder: { type: String, default: "" },
    kind: { type: String, default: "dropdownlist" },
    size: { type: String, default: "5" },
    label: {},
    destruct: {
      default: () => ({
        value: "value",
        label: "label",
        children: "children",
        disabled: "disabled"
      })
    }
  },
  data() {
    return {
      expanded: false,
      focused: false,
      listboxId: uid("listbox"),
      selectedOption: [],
      activeId: "",
      keyPosition: { col: 0, i: -1 }
    };
  },
  computed: {
    listboxs() {
      var { options, listboxId, selectedOption } = this;
      var { value, label, children, disabled } = this.destruct;
      if (!options.length) {
        //无选项
        return [
          [
            {
              id: this.listboxId + "empty",
              value: null,
              label: "(空)"
            }
          ]
        ];
      } else {
        //有选项
        var res = [],
          col = 0,
          optionId;
        for (; col <= selectedOption.length; col++) {
          res[col] = options.map((item, i) => {
            optionId = this.getOptionId(col, i);
            if (selectedOption[col] && optionId === selectedOption[col].id) {
              options = item[children];
            }
            return {
              id: optionId,
              _col: col,
              _i: i,
              value: item[value],
              label: item[label],
              children:
                (item[children] && item[children].length && item[children]) ||
                null,
              disabled: !!item[disabled]
            };
          });
          if (
            !options ||
            selectedOption.length === 0 ||
            this.multiple === undefined
          )
            break;
        }
        return res;
      }
    }
  },
  methods: {
    getOptionId(col, i) {
      return `${this.listboxId}-${col}-${i}`;
    },
    focusHandler() {
      this.expanded = true;
      this.$nextTick(function() {
        document.addEventListener("click", this.blurclick);
      });
    },
    toggleExpanded(need) {
      if (this.disabled !== undefined) return;
      if (this.expanded === true || need === false) {
        this.$nextTick(function() {
          this.expanded = false;
        });
        this.$refs.input.focus();
        Dom.clearSelection();
      } else {
        this.expanded = true;
        if (this.activeId) window[this.activeId].focus();
      }
    },
    blurclick(event) {
      var p = event.target,
        isRoot = false;
      while (p) {
        if (p === this.$refs.root) {
          isRoot = true;
          break;
        }
        p = p.parentElement;
      }
      if (!isRoot) {
        this.expanded = false;
        document.removeEventListener("click", this.blurclick);
      }
    },
    optionSelectHandler(col, i, isKeyDown) {
      var option = this.listboxs[col][i];
      this.keyPosition = { col, i };
      if (option.disabled) return;
      while (this.selectedOption.length > col) {
        this.selectedOption.pop();
      }
      this.selectedOption.push(option);
      this.activeId = option.id;
      if (!option.children && !isKeyDown) {
        this.$nextTick(function() {
          this.expanded = false;
        });
        this.$refs.input.focus();
        Dom.clearSelection();
      }
    },
    movePos(arrow) {
      if (this.disabled !== undefined) return;
      var { col: lastCol, i: lastRow } = this.keyPosition;
      var listboxs = this.listboxs;
      var item;
      var selectedOption = this.selectedOption;
      switch (arrow) {
        case "end":
          item = listboxs[lastCol].reverse().find(v => !v.disabled);
          break;
        case "home":
          item = listboxs[lastCol].find(v => !v.disabled);
          break;
        case "left":
          if (selectedOption.length > 1) {
            item = selectedOption[selectedOption.length - 2];
          }
          break;
        case "right":
          if (lastCol + 1 in listboxs)
            item = listboxs[lastCol + 1].find(v => !v.disabled);
          break;
        case "up":
          item = listboxs[lastCol].find((v, i) => i < lastRow && !v.disabled);
          break;
        case "down":
          item = listboxs[lastCol].find((v, i) => i > lastRow && !v.disabled);
          break;
      }
      if (item) {
        window[item.id].focus();
        this.optionSelectHandler(item._col, item._i, true);
      }
    }
  },
  directives: { blurclick },
  filters: { string, optionFilter }
};
</script>

