<script>
import Tabs_Simple from "./Tabs_Simple.vue";
import Tabs_Custom from "./Tabs_Custom.vue";
export default {
  name: "Tabs",
  functional: true,
  render(h, context) {
    if (context.scopedSlots.tablist) {
      return h(Tabs_Custom, context.data);
    } else {
      return h(Tabs_Simple, context.data, context.children);
    }
  }
};
</script>
