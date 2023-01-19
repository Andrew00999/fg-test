<template>
  <div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
