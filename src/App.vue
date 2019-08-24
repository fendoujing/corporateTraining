<template>
  <div id="app">
    <router-view></router-view>
    <!-- <page-main></page-main> -->
  </div>
</template>

<script>
import PageMain from "./components/index";
export default {
  name: "app",
  components: {
    PageMain
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  min-width: 1280px;
}
::-webkit-scrollbar-track-piece {
  background-color: #f8f8f8;
}

::-webkit-scrollbar {
  width: 9px;

  height: 9px;
}

::-webkit-scrollbar-thumb {
  background-color: #dddddd;

  background-clip: padding-box;

  min-height: 28px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
</style>
