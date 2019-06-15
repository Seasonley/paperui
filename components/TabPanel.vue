<template>
  <div
    tabindex="0"
    class="p-tabpanel"
    role="tabpanel"
    id="nils-tab"
    aria-labelledby="nils"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabPanel"
};
</script>
