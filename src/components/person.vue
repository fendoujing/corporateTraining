<template>
  <div class="person">
    <div>
      <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="我的课程" key="1">
          <div class="tab-con-1">
            <panel v-for="(book,index) in bookList1" :key="index" :num="book.num" :fire="book.fire" :n="book.n" @bookclick="bookClick"></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="我的任务" key="2" forceRender>
          <div class="tab-con-1">
            <panel v-for="(book,index) in bookList2" :key="index" :num="book.num" :fire="book.fire" :bixiu="true" :n="book.n" @bookclick="bookClick"></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="我的认证" key="3">
          <div class="tab-con-1">
            <qualification :fen="95"  @changpin="chanPin"/>
            <qualification :fen="75"  @changpin="chanPin"/>
            <qualification :fen="99"  @changpin="chanPin"/>
            <qualification :fen="83"  @changpin="chanPin"/>
            <qualification :fen="77"  @changpin="chanPin"/>
            <qualification :fen="82"  @changpin="chanPin"/>
            <qualification :fen="96"  @changpin="chanPin"/>
            <qualification :fen="100"  @changpin="chanPin"/>
            <qualification :fen="78"  @changpin="chanPin"/>
            <qualification :fen="95"  @changpin="chanPin"/>
            <qualification :fen="88"  @changpin="chanPin"/>
            <qualification :fen="95"  @changpin="chanPin"/>
          </div>
        </a-tab-pane>
         <a-tab-pane tab="我的授课" key="4" forceRender>
          <div class="tab-con-1">
            <panel v-for="(book,index) in bookList2" :key="index" :num="book.num" :fire="book.fire" :bixiu="true" :n="book.n" @bookclick="bookClick3"></panel>
            <div @click="isAddShow = true" :visible="isAddShow" class="add" style="cursor:pointer;display:flex;justify-content: center;align-items: center;width:210px;height:180px;border:1px dashed #ccc;margin-left: 20px;">
                <a-icon type="plus" style="font-size: 30px;" />
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>

    <div class="mask" @click="isAddShow = false" v-if="isAddShow">
      <img src="../../static/images/form.png" style="width:50%;height:80%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);" alt="">
    </div>
    
  </div>
</template>

<script>
import Panel from "../components/panel";
import Qualification from "../components/qualification";
export default {
  name: "",
  data() {
    return {
        isAddShow: false,
      bookList1: [
          { name: "a", num: 50, n: 1, fire: true },
          { name: "a", num: 90, n: 2,fire: true },
          { name: "a", num: 80, n: 3 },
          { name: "a", num: 78, n: 4 },
          { name: "a", num: 98, n: 3 },
          { name: "a", num: 66, n: 1 },
          { name: "a", num: 89, n: 4 },
          { name: "a", num: 50, n: 2 },
          { name: "a", num: 98, n: 2 },
          { name: "a", num: 50, n: 3 },
          { name: "a", num: 30, n: 4 },
          { name: "a", num: 50, n: 1 },
      ],
      bookList2: [
          { name: "a", num: 50, n: 1, fire: true },
          { name: "a", num: 90, n: 2,fire: true },
          { name: "a", num: 80, n: 3 },
          { name: "a", num: 78, n: 4 },
          { name: "a", num: 98, n: 3 },
          { name: "a", num: 66, n: 1 },
          { name: "a", num: 89, n: 4 },
          { name: "a", num: 50, n: 2 },
          { name: "a", num: 98, n: 2 },
          { name: "a", num: 50, n: 3 },
          { name: "a", num: 30, n: 4 },
          { name: "a", num: 50, n: 1 },
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
      bookClick() {
        let n  = Math.floor(Math.random()*3+1)
        console.log(n)
        this.$router.push({path: '/classDetail/1/'+n});
      },
      bookClick3() {
         let n  = Math.floor(Math.random()*3+1)
        
      },
      chanPin() {
        let n  = Math.floor(Math.random()*3+1)
        this.$router.push({path: '/classDetail/1/'+n})
      }
  },
  computed: {},
  created() {},
  mounted() {},
  components: {
    Panel,
    Qualification,
  },
  watch: {}
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  z-index: 900;
  background: rgba(0,0,0,.5);
}
.person {
  height: 100%;
  width: 100%;
  padding: 10px;
  //   background: #f0f2f5;
}
.tab-con-1 {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.add:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>