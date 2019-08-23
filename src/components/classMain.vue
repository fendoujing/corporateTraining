<template>
 <div class="classMain">
     <div v-on:click="()=>{$router.push('person')}">dfdsf</div>
     课堂首页
     <div class="slickSlide"><slick-slide></slick-slide></div>

 </div>
</template>

<script>
import slickSlide from "./slickSlide";
export default {
 name:"",
 data(){
  return {
  }
 },
 methods:{


 },
 computed:{},
 created(){},
 mounted(){},
 components:{
     slickSlide
 },
 watch:{},
}
</script>

<style  scoped>
.slickSlide{
    width:100%;
    height: 160px;
}

</style>