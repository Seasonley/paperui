<template>
  <input class="p-input" />
</template>
<script>
export default {};
</script>
<style lang="scss">
.p-input {
  height: 26px;
  margin: 0;
  padding: 0;
  border: 1px solid var(--dark-gray);
  box-shadow: 1px 1px 0 var(--dark) inset;
  text-indent: 0.4em;
}
.p-input:focus {
  outline: 4px solid var(--gray);
  outline-offset: 0;
}
.p-input:disabled {
  background-color: var(--light-gray);
  cursor: not-allowed;
}
</style>
