<template>
  <div
    class="p-combobox-wrapper"
    :kind="kind"
    :style="`--size:${size}`"
    @keydown.tab="expanded=false"
    ref="root"
  >
    <template v-if="kind === 'dropdownlist'">
      <button
        class="p-btn p-combobox-input"
        role="combobox"
        aria-autocomplete="list"
        :aria-expanded="expanded | string"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="expanded && selectedOption.id"
        @focus="focusHandler"
      >
        <span v-show="selectedOption[0]" role="textbox">{{selectedOption | optionFilter}}</span>
        <span v-show="!selectedOption[0]" class="p-combobox-placeholder">{{
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
        :aria-expanded="expanded | string"
        aria-haspopup="true"
        :aria-owns="listboxId"
        :aria-activedescendant="activeId"
        @focus="focusHandler"
        :placeholder="placeholder"
        :value="selectedOption | optionFilter"
      />
    </template>
    <div
      class="p-combobox-dropdown"
      aria-label="Show options"
      role="button"
      :tabindex="kind === 'dropdown' ? -1 : false"
      @click="expanded=!expanded"
    ></div>
    <div class="p-combobox-list" v-show="expanded">
      <ul
        class="p-listbox"
        role="listbox"
        :id="listboxId"
        aria-label="label"
        :aria-expanded="expanded | string"
        v-for="(listbox, col) in listboxs"
        :key="col"
      >
        <li
          class="p-option"
          role="option"
          v-for="item in listbox"
          :id="item.id"
          :aria-selected="
            (selectedOption[col] && selectedOption[col].id === item.id) ||
              false | string
          "
          :aria-disabled="item.disabled | string"
          :disabled="item.disabled"
          :key="item.id"
          @click="optionSelectHandler(col, item)"
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
export default {
  name: "ComboBox",
  props: {
    value: { type: Array, default: () => [] },
    options: { type: Array },
    placeholder: { type: String, default: "" },
    kind: { type: String, default: "dropdownlist" },
    size: { type: String, default: "5" },
    label: {},
    destruct: {
      default: () => ({ value: "value", label: "label", children: "children" ,disabled:"disabled"})
    }
  },
  data() {
    return {
      expanded: false,
      focused: false,
      listboxId: uid("listbox"),
      selectedOption: [],
      activeId:""
    };
  },
  computed: {
    listboxs() {
      var { options, listboxId, selectedOption } = this;
      var { value, label, children,disabled } = this.destruct;
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
            optionId = `${listboxId}-${col}-${i}`;
            if (selectedOption[col] && optionId === selectedOption[col].id) {
              options = item[children];
            }
            return {
              id: optionId,
              value: item[value],
              label: item[label],
              children:item[children]&&item[children].length&&item[children]||null,
              disabled:!!item[disabled]
            };
          });
          if(!options||selectedOption.length===0)break;
        }
        return res;
      }
    }
  },
  mounted() {},
  methods: {
    focusHandler() {
      this.expanded = true;
      this.$nextTick(function () {
        document.addEventListener("click",this.blurclick)
      })
    },
    blurclick(event){
      var p=event.target,isRoot=false;
      while(p){
        if(p===this.$refs.root){isRoot=true;break;}
        p=p.parentElement
      }
      if(!isRoot){
        this.expanded=false;
        document.removeEventListener("click",this.blurclick)
      }
    },
    optionSelectHandler(col, option) {
      if(option.disabled)return;
      while (this.selectedOption.length > col) {
        this.selectedOption.pop();
      }
      this.selectedOption.push(option);
      this.activeId=option.id
      if(!option.children){
        this.expanded=false
      }
    }
  },
  directives: { blurclick },
  filters: { string ,optionFilter}
};
</script>

