<template>
	<div class="p-slider">
	  <span class="p-rail-label-min">
	    0
	  </span>
	  <div class="p-rail" style="--min:25%;--max:75%">
	    <a
	      role="slider"
	      tabindex="0"
	      class="p-slider-thumb p-slider-thumb-left"
	      aria-valuemin="0"
	      aria-valuenow="100"
	      aria-valuetext="$100"
	      aria-valuemax="400"
	      aria-label="Hotel Minimum Price"></a>
	    <a
	      role="slider"
	      tabindex="0"
	      class="p-slider-thumb p-slider-thumb-right"
	      aria-valuemin="0"
	      aria-valuenow="250"
	      aria-valuetext="$250"
	      aria-valuemax="400"
	      aria-label="Hotel Maximum Price"></a>
	  </div>
	  <span class="p-rail-label-max">
	    0
	  </span>
	</div>
</template>
<script>
	
export default {
  name: "Slider_Double",
  props:["value"],
  model: {
    prop: 'value',
    event: 'change'
  },
};
</script>