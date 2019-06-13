<template>
  <div class="p-combobox-wrapper" style="--size:3">
    <button
      class="p-btn p-select-input"
      placeholder="please select"
      tabindex="0"
      aria-haspopup="listbox"
      aria-owns="p-select-1"
      aria-expanded="true"
    >
      <span role="textbox">select</span>
    </button>
    <div class="combobox-dropdown"></div>
    <div class="p-select-list" id="p-select-1">
      <ul class="p-listbox" role="listbox" aria-expanded="true">
        <li class="p-option" role="option" aria-selected="false">1</li>
        <li class="p-option" role="option">2</li>
        <li class="p-option" role="option">3</li>
        <li class="p-option" role="option">4</li>
      </ul>
      <ul class="p-listbox" role="listbox" aria-expanded="true">
        <li class="p-option" role="option">55555</li>
        <li class="p-option" role="option">6</li>
        <li class="p-option" role="option">7</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cascader",
  props:{
    value:{type:Array},
    options:{type:Array},
    placeholder:{type:String,default:""},
  }
};
</script>
