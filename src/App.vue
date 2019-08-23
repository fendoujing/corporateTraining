<template>
  <div id="app">
    <page-main>测试提交</page-main>
    asddddddddddddddddddddddddddddd
  </div>
</template>

<script>
import PageMain from './components/index';
export default {
  name: 'app',
  data:function(){
    return {
      name:'提交测试'
    }
  },
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
