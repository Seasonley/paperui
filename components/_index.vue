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

    <Checkbox v-model="val"/>
    <Checkbox v-model="val" checked/>
    <Checkbox v-model="val" checked disabled/>
    <Checkbox v-model="val" disabled/>
    <Radio  v-model="val"/>
    <Radio v-model="val" checked/>
    <Radio v-model="val" checked disabled/>
    <Radio v-model="val" disabled/>

    <Input placeholder="input" v-model="valnum"/>
    <Input placeholder="input" v-model="valnum" disabled/>

    <Group>
      <Input placeholder="input"/>
      <Button>default</Button>
    </Group>

    <Progress v-model="valnum"/>
    <Switcher/>
    <Switcher v-model="val" @change="change"/>
    <button @click="debug">debug</button>

    <Rate v-model="valnum"/>
    <Upload kind="input" @change="change"/>
    <Upload kind="button" @change="change"/>
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
import Rate from './Rate.vue';
import Upload from './Upload.vue';
export default {
  name: "app",
  data(){return {
    val:true,
    valnum:0.5
  }},
  methods: {
    change(e){
      console.log(e)
    },
    debug(){
      console.log(this.valnum)
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
    Upload
  }
};
</script>
<style lang="scss">
@import url(../styles/PaperUI.scss);
</style>
