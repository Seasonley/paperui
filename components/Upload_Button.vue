<template>
	<span class="p-input-file-wrapper">
    	<input class="p-input-file" type="file" multiple="" aria-label="label" onChange={this.change} @change="$emit('change',$event.target.files)"/>
    	<span>点击上传文件</span>
  	</span>
</template>
<script>
	
export default {
  name: "Upload_Input",
  props:["value"],
  model: {
    prop: 'value',
    event: 'change'
  },
};
</script>