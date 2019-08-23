<template>
  <div class="classMain">
    <div class="slickSlide">xxx</div>
    <div v-for="item in classArr">
      <div class="classTitle" v-text="item.title"></div>
      <div class="classLine">
        <div
          class="classBox"
          v-for="childitem in item.child"
          v-on:click="classClick(item,childitem)"
        >
          <span v-text="childitem.name"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlickSlide from "./slickSlide";
export default {
  name: "",
  data() {
    return {
      classArr: [
        {
          title: "博锐干部学院",
          child: [
            { name: "管理类" },
            { name: "经营类" },
            { name: "商业类" },
            { name: "营销类" },
            { name: "领导力类" },
            { name: "其他" }
          ]
        },
        {
          title: "博锐工坊",
          child: [
            { name: "项目管理类" },
            { name: "沟通类" },
            { name: "职业类" }
          ]
        },
        {
          title: "博锐专业学堂",
          child: [
            { name: "产品类" },
            { name: "营销类" },
            { name: "研发类" },
            { name: "项目管理类" },
            { name: "工具类" }
          ]
        },
        {
          title: "博锐第一课",
          child: [{ name: "企业文化培训" }]
        }
      ]
    };
  },
  methods: {
    classClick: function(item, childitem) {
      console.log("xx");
      this.$router.push({ name: "classList", query: { class: item } });
      // this.$router.push('classList');
     // console.log(this.$router);
    }
  },
  computed: {},
  created() {},
  mounted() {},
  components: {
    SlickSlide
  },
  watch: {}
};
</script>

<style  scoped>
.classMain {
  height: 100%;
  color: #4f4f4f;
  padding-bottom: 20px;
  overflow-y: auto;
}
.slickSlide {
  width: 100%;
  height: 160px;
}
.classTitle {
  margin: 30px 0;
  line-height: 1;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.classLine {
  clear: both;
  overflow: hidden;
}
.classBox {
  width: 260px;
  height: 160px;
  line-height: 160px;
  float: left;
  text-align: center;
  font-size: 20px;
  background: #eeeeee;
  margin-right: 16px;
  margin-bottom: 16px;
  cursor: pointer;
}
</style>