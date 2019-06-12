<script>
import Slider_Single from "./Slider_Single.vue"
import Slider_Double from "./Slider_Double.vue"
export default {
  name: "Slider",
  functional:true,
  props:["kind","value"],
  render: function (createElement,context) {
  	switch(context.props.kind){
  		case "double": return createElement(Slider_Double,context.data)
  		default: return createElement(Slider_Single,context.data)
  	}
  }
};
</script>
