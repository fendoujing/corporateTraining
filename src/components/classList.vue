<template>
  <div class="classList">
    <div class="breadcrumbs">
      <span @click="skipIndex">首页</span>>
      <span>博锐干部学院</span>
    </div>
    <div>
      <a-tabs defaultActiveKey="1" @change="callback" animated>
        <a-tab-pane tab="管理类" key="1" forceRender>
          <div class="panelBox">
            <panel
              v-for="(book,index) in bookList1"
              :key="index"
              :num="book.num"
              :fire="book.fire"
              :n="book.n"
              @bookclick="bookClick"
            ></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="经营类" key="2">
          <div class="panelBox">
            <panel
              v-for="(book,index) in bookList2"
              :key="index"
              :num="book.num"
              :fire="book.fire"
              :bixiu="true"
              @bookclick="bookClick"
            ></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="商业类" key="3">
          <div class="panelBox">
            <panel
              v-for="(book,index) in bookList2"
              :key="index"
              :num="book.num"
              :fire="book.fire"
              :bixiu="true"
              @bookclick="bookClick"
            ></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="营销类" key="4">
          <div class="panelBox">
            <panel
              v-for="(book,index) in bookList2"
              :key="index"
              :num="book.num"
              :fire="book.fire"
              :bixiu="true"
              @bookclick="bookClick"
            ></panel>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="领导力类" key="5"></a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import panel from "./panel";
export default {
  name: "classList",
  data() {
    return {
      nowMenu: {},
      bookList1: [
        { name: "a", num: 50, n: 1, fire: true },
        { name: "a", num: 90, n: 2, fire: true },
        { name: "a", num: 80, n: 3 },
        { name: "a", num: 78, n: 4 },
        { name: "a", num: 98, n: 3 },
        { name: "a", num: 66, n: 1 },
        { name: "a", num: 89, n: 4 },
        { name: "a", num: 50, n: 2 },
        { name: "a", num: 98, n: 2 },
        { name: "a", num: 50, n: 3 },
        { name: "a", num: 30, n: 4 },
        { name: "a", num: 50, n: 1 }
      ],
      bookList2: [
        { name: "a", num: 50, n: 1, fire: true },
        { name: "a", num: 90, n: 2, fire: true },
        { name: "a", num: 80, n: 3 },
        { name: "a", num: 78, n: 4 },
        { name: "a", num: 98, n: 3 },
        { name: "a", num: 66, n: 1 },
        { name: "a", num: 89, n: 4 },
        { name: "a", num: 50, n: 2 },
        { name: "a", num: 98, n: 2 }
      ],
      bookList3: [
        { name: "a", num: 50, n: 1, fire: true },
        { name: "a", num: 90, n: 2, fire: true },
        { name: "a", num: 80, n: 3 },
        { name: "a", num: 78, n: 4 },
        { name: "a", num: 98, n: 3 },
        { name: "a", num: 66, n: 1 },
        { name: "a", num: 89, n: 4 },
        { name: "a", num: 50, n: 2 },
        { name: "a", num: 98, n: 2 }
      ],
      bookList4: [
        { name: "a", num: 50, n: 1, fire: true },
        { name: "a", num: 90, n: 2, fire: true },
        { name: "a", num: 80, n: 3 },
        { name: "a", num: 78, n: 4 },
        { name: "a", num: 98, n: 3 },
        { name: "a", num: 66, n: 1 },
        { name: "a", num: 89, n: 4 },
        { name: "a", num: 50, n: 2 },
        { name: "a", num: 98, n: 2 }
      ]
    };
  },
  methods: {
    bookClick: function(classId) {
      var userId = 4;
      this.$router.push({
        name: "classDetail",
        params: { userId: userId, packageId: packageId }
      });
    },
    callback(key) {
      console.log(key);
    },
    skipIndex: function() {
      this.$router.push({ name: "classMain" });
    }
  },
  computed: {},
  created() {},
  mounted() {},
  components: {
    panel
  },
  beforeRouteEnter(to, from, next) {
    next(function(vm) {
      vm.nowMenu = to.query.class;
    });
  },
  watch: {
    $route: function(to, from) {
      var ss = 1;
    }
  }
};
</script>

<style  scoped>
.breadcrumbs {
  height: 60px;
  line-height: 70px;
  font-size: 16px;
  padding-left: 20px;
}
.breadcrumbs span {
  cursor: pointer;
}
.classList {
  width: 100%;
  height: 100%;
}
.panelBox .panel {
  float: left;
}
</style>