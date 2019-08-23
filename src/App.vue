<template>
  <div id="app">
    <page-main></page-main>
  </div>
</template>

<script>
import PageMain from './components/index';
export default {
  name: 'app',
  components: {
    PageMain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
