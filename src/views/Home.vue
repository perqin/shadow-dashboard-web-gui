<template>
  <div class="home">
    <mdc-display tag="h1">Welcome to Shadow Dashboard</mdc-display>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.home .mdc-display {
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

