<template>
  <div class="classDetailWrap">
    <div class="breadcrumbs">
      <span @click="skipIndex">首页</span>>
      <span @click="skipList">博锐干部学院</span>>
      <span>管理类</span>
    </div>
    <div class="classDetail">
      <div class="classVideo">
        <div class="classInfo noclass" v-if="!selClass">请开始课程</div>
        <div class="classInfo" v-if="selClass&&selClass.courseType=='1'&&selClass.courseUrl">
          <iframe width="100%" height="100%" v-bind:src="selClass.courseUrl"></iframe>
        </div>
        <div class="classInfo" v-if="selClass&&selClass.courseType=='2'&&selClass.courseUrl">
          <iframe width="100%" height="100%" v-bind:src="selClass.courseUrl"></iframe>
        </div>
        <div class="classInfo" v-if="selClass&&selClass.courseType=='0'&&selClass.courseUrl">
          <video
            id="viedoDom"
            width="100%"
            v-bind:src="selClass.courseUrl"
            controls="controls"
          >您的浏览器不支持 video 标签。</video>
        </div>
      </div>
      <div class="videoBottom">
        <div class="sign" v-on:click="showModal">
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
          <div class="detailTitle" v-text="detailObj.packageName">管理必须十二讲</div>
          <ul class="listUl">
            <li v-for="item in detailObj.contents" v-on:click="classClick(item)">
              <div>
                <a-icon
                  type="check-circle"
                  theme="twoTone"
                  twoToneColor="#00BD70"
                  v-if="item.finished==='1'"
                />
                <a-icon type="reload" style="color:#F0AE43;" v-if="item.finished!=='1'"/>
                <span v-text="item.courseName">任务1：入职须知</span>
              </div>
              <div>
                <span class="time" v-text="item.timeLentgh">05:30</span>
                <a-icon type="play-circle" theme="outlined" outlinedColor="#7F7F7F"/>
              </div>
            </li>
          </ul>
          <div class="ceshiButton">
            <a-button type="primary" v-on:click="testShow()">开始测试</a-button>
          </div>
        </div>
        <div class="rightTeacher">
          <div class="detailTitle">讲师介绍</div>
          <div class="person">
            <img width="100%" src="../../static/images/teacher.png">
            <div class="name" v-text="detailObj.teacherName">杨勇</div>
          </div>
          <div class="info">产品研发中心组</div>
          <div class="info">15689898989</div>
          <div class="info">yong@persagy.com</div>
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
          <img width="100%" src="../../static/images/user2.jpg">
          <div class="name">李叁</div>
        </div>
        <div class="comment">
          <textarea id="commentText"></textarea>
        </div>
        <div class="commentButton">
          <a-button type="primary" v-on:click="addComment()">提交评论</a-button>
        </div>
      </div>
      <div class="allComment">
        <div class="allTitle">
          全部评论（
          <span v-text="commentList.length"></span>）
        </div>
        <div class="eachComment" v-for="item in commentList">
          <div class="leftImage">
            <img width="100%" src="../../static/images/user2.png">
          </div>
          <div class="rightCont">
            <div class="title">
              <span v-text="item.userName">名字</span>
              <span v-text="item.time">2019/09/01 12:25</span>
            </div>
            <div class="cont" v-text="item.comment">讲的挺好的，学到了东西</div>
            <div class="mark">
              <a-icon type="like"/>
              <span>3</span>
              <a-icon type="message"/>
              <span>回复</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dialogBox">
        <a-modal title="课程评价" v-model="dvisible" @ok="handleOk" okText="提交评论">
          <p class="diaTitle">你觉得课程怎么样</p>
          <div class="diaStar">
            <a-rate v-model="starvalue"/>
          </div>
          <div class="comment dialogComment">
            <textarea></textarea>
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classDetail",
  data() {
    return {
      params: {},
      dvisible: false,
      starvalue: 2,
      detailObj: {},
      selClass: null,
      commentList: [
        {
          userId: "mock", //类型：String  必有字段  备注：评论人
          comment: "mock", //类型：String  必有字段  备注：评论内容
          createTime: "mock" //类型：String  必有字段  备注：评论时间
        }
      ]
    };
  },
  methods: {
    testShow: function() {
      this.$router.push({ path: "/test" });
    },
    showModal() {
      this.dvisible = true;
    },
    handleOk(e) {
      console.log(e);
      this.dvisible = false;
    },
    skipIndex: function() {
      //this.$router.push({ name: "classMain" });
      this.$router.push({ path: "/" });
    },
    skipList: function() {
      this.$router.push({ name: "classList" });
    },
    getDetail: function(params) {
      var that = this;
      this.$axios
        .post("http://123.56.177.25:8080/geek-knife/course/getCourseDetails", {
          userId: params.userId,
          packageId: params.packageId
        })
        .then(function(response) {
          that.detailObj = response.data;
        })
        .catch(function(error) {
          var ss = 1;
        });
    },
    getComment: function() {
      var that = this;
      this.$axios
        .post("http://123.56.177.25:8080/geek-knife/course/listCourseComment", {
          packageId: that.params.packageId
        })
        .then(function(response) {
          that.commentList = response.data || {};
        })
        .catch(function(error) {
          var ss = 1;
        });
    },
    formatDate: function(date, format) {
      if (!date) return;
      if (!format) format = "yyyy-MM-dd";
      switch (typeof date) {
        case "string":
          date = new Date(date.replace(/-/, "/"));
          break;
        case "number":
          date = new Date(date);
          break;
      }
      if (!date instanceof Date) return;
      var dict = {
        yyyy: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        MM: ("" + (date.getMonth() + 101)).substr(1),
        dd: ("" + (date.getDate() + 100)).substr(1),
        HH: ("" + (date.getHours() + 100)).substr(1),
        mm: ("" + (date.getMinutes() + 100)).substr(1),
        ss: ("" + (date.getSeconds() + 100)).substr(1)
      };
      return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
        return dict[arguments[0]];
      });
    },
    addComment: function() {
      var that = this;
      var now = new Date().getTime();
      var time = that.formatDate(now, "yyyy/MM/dd HH:mm");
      var comment = document.getElementById("commentText").value;
      if (!comment) return;
      this.$axios
        .post("http://123.56.177.25:8080/geek-knife/course/commentCourse", {
          packageId: that.params.packageId, //类型：String  必有字段  备注：课程id
          userId: that.params.userId, //类型：String  必有字段  备注：用户id
          userName: "李叁",
          time: time,
          comment: comment //类型：String  必有字段  备注：评论内容
        })
        .then(function(response) {
          document.getElementById("commentText").value = "";
          that.getComment();
        })
        .catch(function(error) {
          var ss = 1;
        });
    },
    classClick: function(item) {
      this.selClass = item;
      //document.getElementById("viedoDom").setAttribute("src", item.courseUrl);
      console.log("xxx");
    }
  },
  computed: {},
  created() {
    var params = this.$route.params;
    this.params = params;
    this.getDetail(params);
    this.getComment();
  },
  mounted() {},
  components: {},
  watch: {}
};
</script>
<style  scoped>
.classDetailWrap {
  width: 100%;
  height: 100%;
}
.breadcrumbs {
  height: 60px;
  line-height: 70px;
  font-size: 16px;
  padding-left: 20px;
}
.breadcrumbs span {
  cursor: pointer;
}
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
  padding: 0 30px 20px;
  background: rgb(247, 247, 247);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.classVideo {
  width: 80%;
  margin: 0 auto;
}
.classVideo .classInfo {
  width: 100%;
  height: 520px;

}
.classVideo .classInfo.noclass {
  line-height: 500px;
  font-size: 26px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../static/images/classBack2.jpg");
  color: #fff;
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
  padding-bottom: 18px;
}
.rightTeacher {
  float: right;
  width: 30%;
  min-height: 30px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.rightTeacher .person {
  width: 50%;
  margin: 0 auto;
}
.person .name {
  margin: 10px 0;
  text-align: center;
}
.rightTeacher .info {
  line-height: 26px;
  width: 70%;
  margin: 0 auto;
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
  cursor: pointer;
}
.listUl li > div {
  float: left;
}
.listUl li > div:nth-child(1) {
  width: 85%;
}
.listUl li > div:nth-child(2) {
  width: 15%;
}
.commentBox {
  margin: 40px 0 20px 0;
}
.commentBox .comment {
  float: right;
  width: calc(100% - 140px);
  height: 120px;
}
.comment textarea {
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
.commentButton {
  clear: both;
  text-align: right;
  padding-top: 10px;
}
.allComment .allTitle {
  padding-bottom: 6px;
  font-size: 16px;
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
.dialogComment {
  height: 120px;
  margin-bottom: 20px;
}
.diaTitle {
  margin-bottom: 2px;
}
.diaStar {
  margin: 4px 0px;
}
.ceshiButton {
  margin-top: 10px;
  margin-left: 20px;
}
</style>