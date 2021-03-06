<template>
  <div class="p-slider">
    <span class="p-rail-label-min">
      {{ min }}
    </span>
    <div class="p-rail" :style="`--min:${pctmin}%;--max:${pctmax}%`" ref="rail">
      <span
        v-if="!isNumber(this.value)"
        role="slider"
        tabindex="0"
        class="p-slider-thumb p-slider-thumb-left"
        :aria-valuemin="min"
        :aria-valuenow="valuenow[0]"
        :aria-valuetext="valuenow[0] + unit"
        :aria-valuemax="valuenow[1]"
        :aria-label="label"
        aria-orientation="horizontal"
        @mousedown="touchStart"
        @keydown.right.prevent.stop="keyMove('min', step)"
        @keydown.left.prevent.stop="keyMove('min', -step)"
        @keydown.up.prevent.stop="keyMove('min', step)"
        @keydown.down.prevent.stop="keyMove('min', -step)"
        ref="thumbLeft"
      ></span>
      <span
        role="slider"
        tabindex="0"
        class="p-slider-thumb p-slider-thumb-right"
        :aria-valuemin="valuenow[0]"
        :aria-valuenow="valuenow[1]"
        :aria-valuetext="valuenow[1] + unit"
        :aria-valuemax="max"
        :aria-label="label"
        @mousedown="touchStart"
        @keydown.right.prevent.stop="keyMove('max', step)"
        @keydown.left.prevent.stop="keyMove('max', -step)"
        @keydown.up.prevent.stop="keyMove('max', step)"
        @keydown.down.prevent.stop="keyMove('max', -step)"
        ref="thumbRight"
      ></span>
    </div>
    <span class="p-rail-label-max">
      {{ max }}
    </span>
  </div>
</template>
<script>
import Dom from "../utils/Dom.js";
import { percent, fixed, isNumber } from "../utils/Math.js";
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
  data() {
    return {
      valuenow: isNumber(this.value) ? [this.min, this.value] : this.value
    };
  },
  computed: {
    pctmin() {
      return percent(this.valuenow[0] - this.min, this.max - this.min);
    },
    pctmax() {
      return percent(
        isNumber(this.value) ? this.value : this.valuenow[1] - this.min,
        this.max - this.min
      );
    }
  },
  beforeMount() {
    fix = this.step.toString().split(".")[1].length;
  },
  methods: {
    isNumber: isNumber,
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
    touchEnd() {
      thumb = rail = null;
      Dom.off("move", this.touchMove);
    },
    keyMove(thumb, vector) {
      var val = this.valuenow[thumb == "min" ? 0 : 1] + vector;
      if (
        (thumb == "max" && this.valuenow[0] <= val && val <= this.max) ||
        (thumb == "min" && this.min <= val && val <= this.valuenow[1])
      ) {
        this.updateValue(thumb, val);
      }
    },
    updateValue(thumb, value) {
      value = fixed(value, fix);
      var data;
      if (isNumber(this.value)) {
        data = value;
        this.valuenow = [this.min, value];
      } else {
        this.valuenow = data =
          thumb === "min"
            ? [value, this.valuenow[1]]
            : [this.valuenow[0], value];
      }
      this.$emit("change", data);
    }
  }
};
</script>
