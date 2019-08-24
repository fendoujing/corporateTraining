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
            <qualification :fen="95" />
            <qualification :fen="75" />
            <qualification :fen="99" />
            <qualification :fen="83" />
            <qualification :fen="77" />
            <qualification :fen="82" />
            <qualification :fen="96" />
            <qualification :fen="100" />
            <qualification :fen="78" />
            <qualification :fen="95" />
            <qualification :fen="88" />
            <qualification :fen="95" />
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
    
  </div>
</template>

<script>
import Panel from "../components/panel";
import Qualification from "../components/qualification";
import Add from "../components/add";
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
      bookClick() {

      },
      bookClick3() {
          
      },
  },
  computed: {},
  created() {},
  mounted() {},
  components: {
    Panel,
    Qualification,
    Add
  },
  watch: {}
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
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