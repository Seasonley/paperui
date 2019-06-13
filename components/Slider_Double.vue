<template>
  <div class="p-slider">
    <span class="p-rail-label-min">
      20
    </span>
    <div class="p-rail" :style="`--min:${pctmin}%;--max:${pctmax}%`" ref="rail">
      <a
        role="slider"
        tabindex="0"
        class="p-slider-thumb p-slider-thumb-left"
        :aria-valuemin="min"
        :aria-valuenow="value[0]"
        :aria-valuetext="value[0] + unit"
        :aria-valuemax="value[1]"
        :aria-label="label"
        @mousedown="touchStart"
        @keydown.right="keyMove('min', step)"
        @keydown.left="keyMove('min', -step)"
        @keydown.up="keyMove('min', step)"
        @keydown.down="keyMove('min', -step)"
        ref="thumbLeft"
      ></a>
      <a
        role="slider"
        tabindex="0"
        class="p-slider-thumb p-slider-thumb-right"
        :aria-valuemin="value[0]"
        :aria-valuenow="value[1]"
        :aria-valuetext="value[1] + unit"
        :aria-valuemax="max"
        :aria-label="label"
        @mousedown="touchStart"
        @keydown.right="keyMove('max', step)"
        @keydown.left="keyMove('max', -step)"
        @keydown.up="keyMove('max', step)"
        @keydown.down="keyMove('max', -step)"
        ref="thumbRight"
      ></a>
    </div>
    <span class="p-rail-label-max">
      50
    </span>
  </div>
</template>
<script>
import { Dom } from "../utils/Dom.js";
import { percent, fixed } from "../utils/Math.js";
var thumb, rail, fix;
export default {
  name: "Slider_Double",
  props: {
    value: { default: [0, 100] },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    unit: { default: "" },
    label: { default: "" }
  },
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    pctmin() {
      return percent(this.value[0] - this.min, this.max - this.min);
    },
    pctmax() {
      return percent(this.value[1] - this.min, this.max - this.min);
    }
  },
  beforeMount() {
    fix = this.step.toString().split(".")[1].length;
  },
  methods: {
    touchStart(e) {
      rail = this.$refs.rail;
      thumb = this.$refs.thumbLeft === e.target ? "min" : "max";
      Dom.on("move", this.touchMove);
      Dom.on("up", this.touchEnd);
      this.touchMove(e);
    },
    touchMove(e) {
      var pt = percent(e.pageX - rail.offsetLeft, rail.clientWidth);
      var vector = (pt - this["pct" + thumb]) * (this.max - this.min) * 0.01;
      //四舍五入防抖
      if (
        (this.step / (this.max - this.min)) * 50 <=
        Math.abs(pt - this["pct" + thumb])
      ) {
        this.keyMove(thumb, vector);
      }
      Dom.clearSelection();
    },
    touchEnd(e) {
      thumb = rail = null;
      Dom.off("move", this.touchMove);
    },
    keyMove(thumb, vector) {
      var val = this.value[thumb == "min" ? 0 : 1] + vector;
      if (
        (thumb == "max" && this.value[0] <= val && val <= this.max) ||
        (thumb == "min" && this.min <= val && val <= this.value[1])
      ) {
        this.updateValue(thumb, val);
      }
    },
    updateValue(thumb, value) {
      value = fixed(value, fix);
      this.$emit(
        "change",
        thumb === "min" ? [value, this.value[1]] : [this.value[0], value]
      );
    }
  }
};
</script>