<template>
  <div id="app">
    <Button>default</Button>
    <Button kind="primary">primary</Button>
    <Button kind="danger">danger</Button>
    <Button disabled>disabled</Button>
    <Button kind="link" href="#link">link</Button>
    <Button size="small">small</Button>
    <Button>normal</Button>
    <Button size="large">large</Button>
    <Button type="submit">submit</Button>
    <Button type="reset">reset</Button>
    <Button type="button">button</Button>

    <Group>
      <Button>default</Button>
      <Button>default</Button>
      <Button kind="primary">primary</Button>
      <Button kind="danger">danger</Button>
    </Group>

    <Check v-model="val" />
    <Check v-model="val" checked />
    <Check checked disabled />
    <Check disabled />
    <Switcher />
    <Switcher v-model="val" />

    <Radio name="r1" />

    <Radio name="r2" checked disabled />
    <Radio name="r2" disabled />

    <Group>
      <Radio value="tmp" name="r3" v-model="valstr" />
      <Radio value="asd" name="r3" v-model="valstr" />
    </Group>
    {{ valstr }}
    <Input placeholder="input" v-model="valnum" />
    <Input placeholder="input" v-model="valnum" disabled />

    <Group>
      <Input placeholder="input" />
      <Button>default</Button>
    </Group>

    <Progress v-model="valnum" />
    <Progress v-model="valnum" kind="circle" />
    <Progress v-model="valnum" kind="circle" border="3" />
    <Progress v-model="valnum" kind="circle" border="5" />
    <button @click="debug">debug</button>

    <Rate v-model="valnum" />
    <Upload kind="input" @change="change" />
    <Upload kind="button" label="点击上传文件..." @change="change" />
    <Slider kind="single" v-model="valnum" min="0" max="1" step="0.1" />
    <Slider
      kind="double"
      v-model="valnum"
      :min="valslider.min"
      :max="valslider.max"
      :step="valslider.step"
    />
    <Slider
      kind="double"
      v-model="valnumarr"
      :min="valslider.min"
      :max="valslider.max"
      :step="valslider.step"
      unit="元"
    />
    <ComboBox :options="options" disabled placeholder="1111" multiple />
    <ComboBox :options="options" kind="simple" size="3" placeholder="2222" />-
    <ComboBox :options="options" kind="dropdown" multiple placeholder="3333" />-
    <ComboBox
      class="test-dropdownlistComboBox"
      :options="options"
      kind="dropdownlist"
      placeholder="4444"
      multiple
    />-
    <ComboBox :options="options" kind="simple" placeholder="5555" multiple />
    -
    {{ activeKey1 }}{{ activeKey2 }}
    <Tabs :activeKey.sync="activeKey1">
      <template #tablist>
        <Tab value="1">1</Tab>
        <Tab value="2" disabled>2</Tab>
        <Tab value="3">3</Tab>
      </template>
      <TabPanel value="1">111</TabPanel>
      <TabPanel value="2">222</TabPanel>
      <TabPanel value="3">333</TabPanel>
    </Tabs>

    <Tabs :activeKey.sync="activeKey2">
      <TabPanel tab="11" value="1" disabled>
        <div>1111</div>
      </TabPanel>
      <TabPanel tab="22" value="2">2222</TabPanel>
      <TabPanel tab="33" value="3">3333</TabPanel>
    </Tabs>

    <MenuBar :menuitems="menuitems" title="Text Formatting" />

    <br />
  </div>
</template>
<script>
import Button from "./components/Button.vue";
import Group from "./components/Group.vue";
import Check from "./components/Check.vue";
import Radio from "./components/Radio.vue";
import Input from "./components/Input.vue";
import Progress from "./components/Progress.vue";
import Switcher from "./components/Switcher.vue";
import Rate from "./components/Rate.vue";
import Upload from "./components/Upload.vue";
import Slider from "./components/Slider.vue";
import ComboBox from "./components/ComboBox.vue";
import Tabs from "./components/Tabs.vue";
import TabPanel from "./components/TabPanel.vue";
import Tab from "./components/Tab.vue";
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "app",
  data() {
    return {
      val: true,
      valnum: 0.5,
      valnumarr: [0.3, 0.6],
      valslider: { min: 0, max: 1, step: 0.1 },
      valstr: "asd",
      activeKey1: 1,
      activeKey2: 1,
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          disabled: true
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          disabled: false,
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                  disabled: true
                }
              ]
            },
            {
              value: "nanjing2",
              label: "Nanjing2",
              children: [
                {
                  value: "2314234324",
                  label: "aasad"
                }
              ]
            }
          ]
        }
      ],
      menuitems: [
        {
          label: "Font",
          name: "font",
          children: [
            { type: "checkbox", label: "Bold", name: "blod", value: true },
            { type: "checkbox", label: "Italic", name: "italic", value: false },
            { type: "separator" },
            {
              label: "Text Color",
              children: [
                { type: "radio", label: "Black", name: "black", value: true },
                { type: "radio", label: "Blue", name: "blue", value: false },
                { type: "radio", label: "Red", name: "red", value: false },
                { type: "radio", label: "Green", name: "green", value: false }
              ]
            },
            { type: "separator" },
            {
              label: "Text Decoration",
              children: [
                { type: "radio", label: "None", value: true },
                { type: "radio", label: "Overline", value: false },
                { type: "radio", label: "Line-through", value: false },
                { type: "radio", label: "Underline", value: false }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
    debug() {
      console.dir(this.valnum instanceof Array);
    }
  },
  components: {
    Button,
    Group,
    Check,
    Radio,
    Input,
    Progress,
    Switcher,
    Rate,
    Upload,
    Slider,
    ComboBox,
    TabPanel,
    Tabs,
    Tab,
    MenuBar
  }
};
</script>
<style lang="sass">
@import "./PaperUI.scss"
</style>
