<template>
  <div id="app">
    <p>
      <Button kind="primary">Primary</Button>
      <Button>Default</Button>
      <Button kind="danger">Danger</Button>
      <Button disabled>disabled</Button>
      <Button size="small">small</Button>
      <Button size="large">large</Button>
    </p>
    <p>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button kind="primary">Ok</Button>
      </ButtonGroup>
    </p>
    <p>
      <Input placeholder="input" />
      <Input placeholder="input" disabled />
    </p>
    <p>
      <Cascader :options="cascaderOptions" @change="cascaderChange" />
    </p>

    <p>
    </p>
  </div>
</template>
<script>
import Button from "./components/Button.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import Input from "./components/Input.vue";
import Cascader from "./components/Cascader.vue";
export default {
  name: "app",
  data() {
    return {
      cascaderOptions: [
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
          disabled: true,
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    cascaderChange(value) {
      alert(JSON.toString(value));
    }
  },
  components: {
    Button,
    ButtonGroup,
    Input,
    Cascader
  }
};
</script>
<style>

body {
  --dark: #000;
  --shadow: #666;
  --dark-gray: #999;
  --gray: #ccc;
  --light-gray: #eee;
  --bright: #fff;
  font-size: 14px;
}

</style>
