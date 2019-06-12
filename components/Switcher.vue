<template>
  <button class="p-switch" role="switch" :aria-checked="actived" @click="toggleActived"></button>
</template>
<script>
export default {
  name: "Switcher",
  model: {
    prop: 'value',
    event: 'change'
  },
  props:{
  	value:{
  		type:Boolean,
  		default:false
  	}
  },
  data(){
  	return {
  		actived:this.value
  	}
  },
  methods:{
  	toggleActived(){
  		this.actived=!this.actived;
      // this.$emit('update:value', this.actived)
      this.$emit('change', this.actived)
  	}
  }
};
</script>
