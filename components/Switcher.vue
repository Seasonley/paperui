<template>
  <button class="p-switch" role="switch" :aria-checked="pressed" @click="togglePressed"></button>
</template>
<script>
export default {
  name: "Switcher",
  props:{
  	value:{
  		type:String,
  		default:"false"
  	}
  },
  data(){
  	return {
  		pressed:this.value
  	}
  },
  methods:{
  	togglePressed(){
  		this.pressed=(this.pressed=='false'?'true':'false')
  	}
  }
};
</script>
