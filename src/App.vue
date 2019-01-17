<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App."/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  color: #2c3e50;
}
</style>
