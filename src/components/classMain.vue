<template>
  <div class="classMain">
    <div class="slickSlide">
      <a-carousel autoplay>
        <div class="imageBox"></div>
        <div class="imageBox imageBox2"></div>
        <div class="imageBox imageBox3"></div>
        <div class="imageBox"></div>
      </a-carousel>
    </div>
    <div v-for="(item, index) in classArr" :key="index">
      <div class="classTitle" v-text="item.title"></div>
      <div class="classLine">
        <div
          class="classBox"
          v-for="(childitem, i) in item.child"
          :key="i"
          v-on:click="classClick(item,childitem)"
        >
          <span v-text="childitem.name"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      picss: "../../static/images/classBack.jpg",
      classArr: [
        {
          title: "博锐干部学院",
          child: [
            { name: "管理类", pic: "../../static/images/classBack.jpg" },
            { name: "经营类", pic: "../../static/images/classBack.jpg" },
            { name: "商业类", pic: "../../static/images/classBack.jpg" },
            { name: "营销类", pic: "../../static/images/classBack.jpg" },
            { name: "领导力类", pic: "../../static/images/classBack.jpg" },
            { name: "其他", pic: "../../static/images/classBack.jpg" }
          ]
        },
        {
          title: "博锐工坊",
          child: [
            { name: "项目管理类", pic: "../../static/images/classBack.jpg" },
            { name: "沟通类", pic: "../../static/images/classBack.jpg" },
            { name: "职业类", pic: "../../static/images/classBack.jpg" }
          ]
        },
        {
          title: "博锐专业学堂",
          child: [
            { name: "产品类", pic: "../../static/images/classBack.jpg" },
            { name: "营销类", pic: "../../static/images/classBack.jpg" },
            { name: "研发类", pic: "../../static/images/classBack.jpg" },
            { name: "项目管理类", pic: "../../static/images/classBack.jpg" },
            { name: "工具类", pic: "../../static/images/classBack.jpg" }
          ]
        },
        {
          title: "博锐第一课",
          child: [
            { name: "企业文化培训", pic: "../../static/images/classBack.jpg" }
          ]
        }
      ]
    };
  },
  methods: {
    classClick: function(item, childitem) {
      console.log("xx");
      this.$router.push({
        name: "classList",
        query: { class: JSON.stringify(item) }
      });
      // this.$router.push('classList');
      // console.log(this.$router);
    }
  },
  computed: {},
  created() {},
  mounted() {
     document.querySelector('#app .top').style.visibility = 'visible';
  },
  components: {},
  watch: {}
};
</script>

<style  scoped>
.classMain {
  padding: 0 22px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  color: #4f4f4f;
  padding-bottom: 20px;
  overflow-y: auto;
}
.slickSlide {
  width: 100%;
  height: 320px;
}
.slickSlide .imageBox {
  width: 100%;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../static/images/build1.jpg");
}
.slickSlide .imageBox2 {
  background-image: url("../../static/images/build2.jpg");
}
.slickSlide .imageBox3 {
  background-image: url("../../static/images/build3.jpg");
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
  text-shadow: 5px 5px 5px #999;
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../static/images/classBack.jpg");
  color: #ffffff;
}
.classLine .classBox:nth-child(2) {
  background-image: url("../../static/images/classBack2.jpg");
}
.classLine .classBox:nth-child(3) {
  background-image: url("../../static/images/classBack3.jpg");
}
.classLine .classBox:nth-child(4) {
  background-image: url("../../static/images/bigimg.png");
}
</style>