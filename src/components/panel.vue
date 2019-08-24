<template>
 <div class="panel" @click="emitData">
     <div class="img-box">
         <img v-if="n == 1" src="../../static/images/book1.jpg" height="90" width="200" alt="">
         <img v-if="n == 2" src="../../static/images/book2.jpg" height="90" width="200" alt="">
         <img v-if="n == 3" src="../../static/images/book3.png" height="90" width="200" alt="">
         <img v-if="n == 4" src="../../static/images/book4.jpg" height="90" width="200" alt="">
     </div>
     <div class="title">
         <span style="font-size:14px">交互设计一二事</span> 
         <span style="font-size:12px;">阅读：0</span>
    </div>
     <div class="message">
         <span v-if="bixiu" style="color:#4699D0">必修</span>
        {{text}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        12节/120节&nbsp;&nbsp;&nbsp;&nbsp;<span v-if="bixiu">任务截止：2019.8.15</span> 
        <div :style="{width: num + '%'}" style="z-index:2;"></div>
        <div style="position:absolute;z-index: 1;background:#ccc;width: 90%;"></div>
     </div>
     <div class="icon" v-if="fire">
         <img src="../../static/images/fire2.png" width="30" style="margin:0;" alt="">
     </div>
 </div>
</template>

<script>
export default {
 name:"panel",
 props: {
     src: {
         type: String,
         default: '../../static/images/book1.jpg'
     },
     text: {
         type: String,
         default: "理解面向对象的总体思想与主要特性,例如封装..."
     },
     num: {
         type: Number,
         default: 50
     },
     fire: {
         type: Boolean,
         default: false,
     },
     n: {
         type: Number,
         default: 1
     },
     bixiu: {
         type: Boolean,
         default: false,
     },
     id: {
         type: String,
         default: ''
     }
 },
 data(){
  return {
  }
 },
 methods:{
     emitData(){
        $emit('bookclick', this.id)
     }
 },
 computed:{},
 created(){},
 mounted(){},
 components:{},
 watch:{},
}
</script>

<style lang="less" scoped>
.panel {
    position: relative;
    width: 210px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-left: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }
    .img-box {
        height: 90px;
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        padding: 0 10px;
        color: #fff;
        background: rgba(1,1,1,.3);
    }
    .message {
        position: relative;
        height: 70px;
        padding: 5px;
        padding-left: 10px;
        font-size: 12px;
        >div {
            position: absolute;
            bottom: 0;
            height: 5px;
            background: #4699D0;
        }
    }
    .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
    }
}
</style>