<template>
  <div id="app">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "app",
  components: {
    Button
  }
};
</script>
<style>
body {
  --pri: #000;
  --lpri: #999;
  --sec: #ccc;
  --lsec: #eee;
  --lt: #fff;
  font-size: 14px;
}
</style>
