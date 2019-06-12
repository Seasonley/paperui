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

    <Checkbox/>
    <Checkbox checked/>
    <Checkbox checked disabled/>
    <Checkbox disabled/>
    <Radio/>
    <Radio checked/>
    <Radio checked disabled/>
    <Radio disabled/>

    <Input placeholder="input"/>
    <Input placeholder="input" disabled/>

    <Group>
      <Input placeholder="input"/>
      <Button>default</Button>
    </Group>

    <Progress value="0.8"/>
    <Switcher/>
    <Switcher value="true"/>
  </div>
</template>
<script>
import Button from "./Button.vue";
import Group from "./Group.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";
import Input from './Input.vue';
import Progress from './Progress.vue';
import Switcher from './Switcher.vue';
export default {
  name: "app",
  data(){return {

  }},
  methods: {},
  components: {
    Button,
    Group,
    Checkbox,
    Radio,
    Input,
    Progress,
    Switcher
  }
};
</script>
<style lang="scss">
@import url(../styles/PaperUI.scss);
</style>
