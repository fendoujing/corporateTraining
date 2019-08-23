<template>
 <div class="container">
   <header class="top">
     <div class="logo">
       <img src="../static/images/logo.png" alt="">
     </div>
     <div class="menu">
       <div class="menu-item" @click="toggle('classMain')">首页</div>
       <div class="menu-item" @click="toggle('')">课程中心</div>
       <div class="menu-item" @click="toggle('')">资料下载</div>
       <div class="menu-item" @click="toggle('person')">我的学习</div>
     </div>
   </header>
   <section class="main">
     <router-view></router-view>
   </section>
 </div>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggle(router_name) {
      this.$router.push(router_name);
    }
  },
}
</script>

<style lang="less">
.container{
 height: 100%;
 min-width: 1280px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 63px;
    width: auto;
    padding-right: 10px;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    .logo {
      height: 100%;
      width: 237px;
    }
    .menu {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      padding-left: 20px;
      width: calc(100% - 237px);
      .menu-item {
        display: flex;
        align-items: center;
        color: #AEAEAE;
        font-size: 16px;
        padding: 0 10px;
        &:hover {
          background: #eee;
          color: #50A9EA;
        }
      }
    }
  }
  .main {
    display: flex;
    height: calc(100% - 70px);
  }
}

</style>
