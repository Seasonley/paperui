<script>
import emitter from "../mixins/emitter.js";
import Tab from "./Tab.vue";
import TabPanel from "./TabPanel.vue";
export default {
  name: "Tabs",
  props: ["activeKey"],
  mixins: [emitter],
  mounted() {
    this.$broadcast("TabPanel", "update:activeKey", this.activeKey);
    this.$broadcast("Tab", "init:activeKey", this.activeKey);
    this.$on("keychange", function(v) {
      this.$emit("update:activeKey", v);
      this.$broadcast("TabPanel", "update:activeKey", v);
      this.$broadcast("Tab", "update:activeKey", v);
    });
  },
  methods: {},
  render(h) {
    var _TabPanels = this.$slots.default;
    var Tabs = _TabPanels.map(tabpanel => {
      return h(
        Tab,
        {
          attrs: {
            value: tabpanel.componentOptions.propsData.value,
            disabled: tabpanel.componentOptions.propsData.disabled
          }
        },
        tabpanel.data.attrs.tab
      );
    });
    var TabPanels = _TabPanels.map(tabpanel => {
      return h(
        TabPanel,
        {
          attrs: {
            value: tabpanel.componentOptions.propsData.value,
            disabled: tabpanel.componentOptions.propsData.disabled
          }
        },
        tabpanel.componentOptions.children
      );
    });

    return (
      <div class="p-tabs-wrapper">
        <div class="p-tablist" role="tablist" aria-label="Entertainment">
          {...Tabs}
        </div>
        {...TabPanels}
      </div>
    );
  }
};
</script>
