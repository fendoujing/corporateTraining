<template>
 <div class="message">
     <aside class="aside">

     </aside>
     <section class=main>

     </section>
 </div>
</template>

<script>
export default {
 name:"",
 data(){
  return {
  }
 },
 methods:{},
 computed:{},
 created(){},
 mounted(){},
 components:{},
 watch:{},
}
</script>

<style lang="less" scoped>
.message {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 20px;
    .aside,
    .main {
        height: 100%;
        border: 1px solid #000;
    }
    .aside {
        width: 15%;
    }
    .main {
        width: 85%;
        margin: 20px;
    }
}
</style>