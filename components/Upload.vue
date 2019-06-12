<script>
import Upload_Input from "./Upload_Input.vue"
import Upload_Button from "./Upload_Button.vue"
export default {
  name: "Upload",
  functional:true,
  model: {
    prop: 'value',
    event: 'change'
  },
  props:["kind","props"],
  render: function (createElement,context) {
  	switch(context.props.kind){
  		case "button": return createElement(Upload_Button,context.data)
  		default: return createElement(Upload_Input,context.data)
  	}
  }
};
</script>
