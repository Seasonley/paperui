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

    <Checkbox v-model="val" />
    <Checkbox v-model="val" checked />
    <Checkbox checked disabled />
    <Checkbox disabled />
    <Switcher />
    <Switcher v-model="val" />

    <Radio name="r1" />

    <Radio name="r2" checked disabled />
    <Radio name="r2" disabled />

    <Group>
      <Radio value="tmp" name="r3" v-model="valstr" />
      <Radio value="asd" name="r3" v-model="valstr" /> </Group
    >{{ valstr }}

    <Input placeholder="input" v-model="valnum" />
    <Input placeholder="input" v-model="valnum" disabled />

    <Group>
      <Input placeholder="input" />
      <Button>default</Button>
    </Group>

    <Progress v-model="valnum" />
    <button @click="debug">debug</button>

    <Rate v-model="valnum" />
    <Upload kind="input" @change="change" />
    <Upload kind="button" @change="change" />
    <Slider kind="single" v-model="valnum" min="0" max="1" step="0.1" />
    <Slider
      kind="double"
      v-model="valnumarr"
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
    {{ valnumarr }}
    {{ valslider }}
  </div>
</template>
<script>
import Button from "./Button.vue";
import Group from "./Group.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";
import Input from "./Input.vue";
import Progress from "./Progress.vue";
import Switcher from "./Switcher.vue";
import Rate from "./Rate.vue";
import Upload from "./Upload.vue";
import Slider from "./Slider.vue";
export default {
  name: "app",
  data() {
    return {
      val: true,
      valnum: 0.5,
      valnumarr: [0.3, 0.6],
      valslider: { min: 0, max: 1, step: 0.1 },
      valstr: "asd"
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
    debug() {
      console.log(this.val);
    }
  },
  components: {
    Button,
    Group,
    Checkbox,
    Radio,
    Input,
    Progress,
    Switcher,
    Rate,
    Upload,
    Slider
  }
};
</script>
<style lang="scss">
@import url(../styles/PaperUI.scss);
</style>
