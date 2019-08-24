<template>
  <div class="classDetail">
    <div class="classVideo">
      <video
        width="100%"
        src="https://geek-knife.oss-cn-beijing.aliyuncs.com/01%E3%80%81%E8%AF%BE%E7%A8%8B%E7%AE%80%E4%BB%8B-%E6%B3%A8%E8%A7%A3%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91.mp4"
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
        <ul class="listUl">
          <li>
            <div>
              <a-icon type="check-circle" theme="twoTone" twoToneColor="#00BD70"/>
              <span>任务1：入职须知</span>
            </div>
            <div>
              <span class="time">05:30</span>
              <a-icon type="play-circle" theme="outlined" outlinedColor="#7F7F7F"/>
            </div>
          </li>
          <li>
            <div>
              <a-icon type="reload" style="color:red;"/>
              <span>任务1：入职须知</span>
            </div>
            <div>
              <span class="time">05:30</span>
              <a-icon type="play-circle" theme="outlined" outlinedColor="#7F7F7F"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightTeacher">
        <div class="detailTitle">讲师介绍</div>
        <div class="person">
          <img width="100%" src="../../static/images/teacher.png">
          <div class="name">杨讲师</div>
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
    <div class="commentBox">
      <div class="person">
        <img width="100%" src="../../static/images/teacher.png">
        <div class="name">杨讲师</div>
      </div>
      <div class="comment">
        <textarea></textarea>
      </div>
      <div class="commentButton">
        <a-button type="primary">提交评论</a-button>
      </div>
    </div>
    <div class="allComment">
      <div class="allTitle">全部评论（103）</div>
      <div class="eachComment">
        <div class="leftImage">
          <img width="100%" src="../../static/images/teacher.png">
        </div>
        <div class="rightCont">
          <div class="title">
            <span>名字</span>
            <span>2019/09/01 12:25</span>
          </div>
          <div class="cont">讲的挺好的，学到了东西</div>
          <div class="mark">
            <a-icon type="like"/>
            <span>3</span>
            <a-icon type="message"/>
            <span>回复</span>
          </div>
        </div>
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
.listUl >>> .anticon {
  margin: 0 10px;
  font-size: 18px;
  cursor: pointer;
}
.eachComment >>> .anticon {
  margin: 0 6px;
  font-size: 18px;
  cursor: pointer;
}
.classDetail {
  width: 100%;
  padding: 30px;
  background: rgb(247, 247, 247);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.classVideo {
  width: 80%;
  margin: 0 auto;
}
.videoBottom {
  width: 80%;
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
.rightTeacher .person {
  width: 50%;
  margin: 0 auto;
}
.person .name {
  margin: 10px 0;
  text-align: center;
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
  padding-bottom: 20px;
}
.cIntroduce .text {
  text-align: left;
  line-height: 22px;
  padding: 0 30px;
}
ul,
li {
  list-style: none;
}
.listUl li {
  line-height: 36px;
  height: 36px;
}
.listUl li > div {
  float: left;
}
.listUl li > div:nth-child(1) {
  width: 75%;
}
.listUl li > div:nth-child(2) {
  width: 25%;
}
.commentBox {
  margin: 40px 0 20px 0;
}
.commentBox .comment {
  float: right;
  width: calc(100% - 140px);
  height: 120px;
}
.commentBox .comment textarea {
  width: 100%;
  height: 100%;
}
.commentBox .person {
  width: 120px;
  float: left;
}

.commentBox .person {
  width: 120px;
  float: left;
}
.commentBox .commentButton {
  clear: both;
  text-align: right;
}
.allComment .allTitle {
  padding-bottom:6px;
  font-size:16px;
  border-bottom: 1px solid #ececec;
}
.eachComment {
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
}
.eachComment .leftImage {
  float: left;
  width: 100px;
}
.eachComment .rightCont {
  float: right;
  width: calc(100% - 120px);
}
.eachComment .rightCont > div {
  line-height: 34px;
}
.eachComment .rightCont > div > span {
  margin-right: 16px;
}
</style>