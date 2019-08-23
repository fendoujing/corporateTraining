<template>
  <div class="classDetail">
    <div class="classVideo">
      <video
        width="100%"
        src="https://www.w3school.com.cn/i/movie.ogg"
        controls="controls"
      >您的浏览器不支持 video 标签。</video>
    </div>
    <div class="videoBottom">
      <div class="sign">
        <a-icon type="star"/>
        <span>评价</span>
      </div>
      <div class="sign">
        <a-icon type="download"/>
        <span>下载</span>
      </div>
      <div class="sign">
        <a-icon type="heart"/>
        <span>点赞</span>
      </div>
    </div>
    <div class="centerCont">
      <div class="leftCatalog">
        <div class="detailTitle">目录</div>
        <div></div>
      </div>
      <div class="rightTeacher">
        <div class="detailTitle">讲师介绍</div>
        <div class="person">
          <img />
        </div>
      </div>
    </div>
    <div class="cIntroduce">
      <div class="detailTitle">课程介绍</div>
      <div class="text">
        北京博锐尚格节能技术股份有限公司是一家依托卓越的研发团队和丰富的工程实施经验，为大型公共建筑提供能耗数据采集、远传、分析，建筑能耗分项计量与监管，建筑节能在线诊断等全
        周期智慧能源与设备管理解决方案的高新技术企业。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classDetail",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  components: {},

  watch: {}
};
</script>

<style  scoped>
.classDetail {
  width: 100%;
  padding: 30px;
  background: rgb(247, 247, 247);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.classVideo {
  width: 70%;
  margin: 0 auto;
}
.videoBottom {
  width: 70%;
  margin: 0 auto 40px;
  height: 46px;
  line-height: 46px;
  background: #bfbfbf;
}
.videoBottom .sign {
  float: right;
  color: #ffffff;
  margin-right: 26px;
  cursor: pointer;
}
.videoBottom .sign span {
  margin-left: 8px;
}
.centerCont {
  overflow: hidden;
}
.leftCatalog {
  float: left;
  width: 68%;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  min-height: 30px;
  box-sizing: border-box;
}
.rightTeacher {
  float: right;
  width: 30%;
  min-height: 30px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  box-sizing: border-box;
}

.detailTitle {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: left;
  padding-left: 20px;
}
.cIntroduce {
  clear: both;
  margin-top: 40px;
  min-height: 30px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  box-sizing: border-box;
  padding-bottom:20px;
}
.cIntroduce .text {
  text-align: left;
  line-height: 22px;
  padding:0 30px;
}
</style>