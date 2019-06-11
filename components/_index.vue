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

    <ButtonGroup>
      <Button>default</Button>
      <Button>default</Button>
      <Button kind="primary">primary</Button>
      <Button kind="danger">danger</Button>
    </ButtonGroup>
  </div>
</template>
<script>
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
export default {
  name: "app",
  data() {},
  methods: {},
  components: {
    Button,
    ButtonGroup
  }
};
</script>
<style lang="scss">
@import url(../styles/PaperUI.scss);
</style>
