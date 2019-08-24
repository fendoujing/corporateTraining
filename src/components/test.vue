<template>
  <div class="bigbang">
    <p>
      <a-button @click="$router.go(-1)">返回</a-button>
    </p>
    <div class="test">
      <div class="left">
        <header
          v-if="test_data[0].singleCount"
        >{{`单选题（共${test_data[0].singleCount}题,合计${test_data[0].singleAllScore}分）`}}</header>
        <div class="main-body" v-if="test_data[0].singleCount">
          <div v-for="(single, s_i) in test_data[0].singleList" :key="single.topicId">
            <p>{{`${s_i+1}、${single.topicName}`}}</p>
            <div>
              <a-radio-group :name="single.topicId" v-model="answer.singleList[s_i].answerId">
                <a-radio
                  v-for="answer in single.topicSelectAnswer"
                  :key="answer.answerName"
                  :value="answer.answerId"
                >{{answer.answerName}}</a-radio>
              </a-radio-group>
            </div>
          </div>
        </div>

        <header
          v-if="test_data[0].multipleCount"
        >{{`多选题（共${test_data[0].multipleCount}题,合计${test_data[0].multipleAllScore}分）`}}</header>
        <div class="main-body" v-if="test_data[0].multipleCount">
          <div v-for="(mul, m_i) in test_data[0].multipleList" :key="mul.topicId">
            <p>{{`${m_i+1}、${mul.topicName}`}}</p>
            <div>
              <a-checkbox-group>
                <a-row>
                  <a-col
                    :span="3"
                    v-for="m_answer in mul.topicSelectAnswer"
                    :key="m_answer.answerName"
                  >
                    <a-checkbox :value="m_answer.answerId">{{m_answer.answerName}}</a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </div>
          </div>
        </div>

        <header
          v-if="test_data[0].shortAnswerCount"
        >{{`简答题（共${test_data[0].shortAnswerCount}题,合计${test_data[0].shortAnswerAllScore}分）`}}</header>
        <div class="main-body" v-if="test_data[0].shortAnswerCount">
          <div v-for="(shot, st_i) in test_data[0].shortAnswerList" :key="shot.topicId">
            <p>{{`${st_i+1}、${shot.topicName}`}}</p>
            <a-textarea placeholder="请简单" :rows="4" />
          </div>
        </div>

        <!-- <header>单选题（共6题,合计40分）</header>
      <div class="main-body">
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-radio-group name="radioGroup">
            <a-radio :value="1">互联网+体育</a-radio>
            <a-radio :value="2">在线学习教育平台</a-radio>
            <a-radio :value="3">电商平台</a-radio>
            <a-radio :value="4">以上都不对</a-radio>
          </a-radio-group>
        </div>
        <p>2.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-radio-group name="radioGroup">
            <a-radio :value="1">互联网+体育</a-radio>
            <a-radio :value="2">在线学习教育平台</a-radio>
            <a-radio :value="3">电商平台</a-radio>
            <a-radio :value="4">以上都不对</a-radio>
          </a-radio-group>
        </div>
        <p>3.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-radio-group name="radioGroup">
            <a-radio :value="1">互联网+体育</a-radio>
            <a-radio :value="2">在线学习教育平台</a-radio>
            <a-radio :value="3">电商平台</a-radio>
            <a-radio :value="4">以上都不对</a-radio>
          </a-radio-group>
        </div>
        <p>4.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-radio-group name="radioGroup">
            <a-radio :value="1">互联网+体育</a-radio>
            <a-radio :value="2">在线学习教育平台</a-radio>
            <a-radio :value="3">电商平台</a-radio>
            <a-radio :value="4">以上都不对</a-radio>
          </a-radio-group>
        </div>
        <p>5.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-radio-group name="radioGroup">
            <a-radio :value="1">互联网+体育</a-radio>
            <a-radio :value="2">在线学习教育平台</a-radio>
            <a-radio :value="3">电商平台</a-radio>
            <a-radio :value="4">以上都不对</a-radio>
          </a-radio-group>
        </div>
      </div>
      <header>多选题（共6题,合计40分）</header>
      <div class="main-body">
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
        <p>1.博锐尚格是一家做什么的公司？（2分）</p>
        <div>
          <a-checkbox-group>
            <a-row>
              <a-col :span="3">
                <a-checkbox value="A">A</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="B">B</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="C">C</a-checkbox>
              </a-col>
              <a-col :span="3">
                <a-checkbox value="D">D</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
      </div>
      <header>简答题（共一题，合计20分）</header>
      <div class="main-body">
        <a-textarea placeholder="请简单" :rows="4" />
        </div>-->
      </div>
      <div class="right">
        <div
          style="width:100%;height:150px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);padding:20px;"
        >
          <div>
            剩余时间：
            <span style="color:#4FBD70;">{{last_time}}</span>
          </div>
          <div style="margin-top:30px;">
            当前进度：
            <span>1/30</span>
          </div>
          <div style="display:flex;justify-content: flex-end;">
            <a-button style="background:#4FBD70;color:#fff;" @click="submitOk">提交试卷</a-button>
          </div>
        </div>
        <div
          style="width:100%;height:340px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);padding:20px;margin-top: 30px;"
        >
          <div>
            <p
              v-if="test_data[0].singleCount"
            >{{`单选题（共${test_data[0].singleCount}题,合计${test_data[0].singleAllScore}分）`}}</p>
            <div
              style="border-bottom:1px solid #ccc;padding-bottom:10px;"
              v-if="test_data[0].singleCount"
            >
              <a-badge
                count="1"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="2"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="3"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="4"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="5"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="6"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
            </div>
            <p
              style="margin-top: 30px;"
              v-if="test_data[0].multipleCount"
            >{{`多选题（共${test_data[0].singleCount}题,合计${test_data[0].multipleAllScore}分）`}}</p>
            <div
              style="border-bottom:1px solid #ccc;padding-bottom:10px;"
              v-if="test_data[0].multipleCount"
            >
              <a-badge
                count="1"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="2"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="3"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="4"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="5"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
              <a-badge
                count="6"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
            </div>
            <p
              style="margin-top: 30px;"
              v-if="test_data[0].shortAnswerCount"
            >{{`简答题（共${test_data[0].multipleCount}题,合计${test_data[0].shortAnswerAllScore}分）`}}</p>
            <div
              style="border-bottom:1px solid #ccc;padding-bottom:10px;"
              v-if="test_data[0].shortAnswerCount"
            >
              <a-badge
                count="1"
                :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
              />
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:100px;">
            <div>
              <div style="width: 20px;height:20px;border-radius:50%;background:#00BD70"></div>已答
            </div>
            <div>
              <div
                style="width: 20px;height:20px;border-radius:50%;background:#fff;border:1px solid #ddd;"
              ></div>未答
            </div>
          </div>
        </div>
      </div>
      <div
        style="position:absolute;top:0;bottom:0;right:0;left:0;z-index:490;background:rgba(0,0,0,.3)"
        v-if="isShow"
        @click="isShow = false"
      >
        <div style="width:100%;height:100%;position:relative;">
          <div
            style="position:absolute;top:50%;left:50%;margin-top:-100px;margin-left:-150px;z-index:900;width:300px;height:200px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);padding:20px;background:#fff;"
          >
            <div style="height: 200px;width:100%">
              <img
                src="../../static/images/best.png"
                width="200"
                height="150"
                style="margin-left: 30px;"
                alt
              />
              <p style="text-align:center;width:100%;">
                恭喜你在本次考试中获得
                <span style="color:#00BD70;font-size:16px;">{{course}}分</span>
              </p>
            </div>
          </div>
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
      last_time: "00:40:00",
      isShow: false,
      test_data: [{}],
      answer: {
        singleList: [],
        multipleList: [],
        shortAnswerList: []
      },
      course: ""
    };
  },
  methods: {
    singleChange(e) {
      console.log(e);
    },
    submitOk() {
      this.countTopicScore();
      this.isShow = true;
    },
    queryUserTopicResult() {
      this.$axios
        .post(
          "http://192.168.30.219:31002/geek-knife/examination/QueryUserTopicResult",
          { packageId: "1", userId: "1" }
        )
        .then(res => {
          this.course = this.data.content.score;
        });
    },
    countTopicScore() {
      let params = JSON.parse(JSON.stringify(this.answer));
      if (!params.singleList.length) delete params.singleList;
      if (!params.multipleList.length) delete params.multipleList;
      if (!params.shortAnswerList.length) delete params.shortAnswerList;
      this.$axios
        .post(
          "http://192.168.30.219:31002/geek-knife/examination/CountTopicScore",
          { ...params, packageId: "1", userId: "1" }
        )
        .then(res => {
          this.course = res.data.content[0].score;
        });
    }
  },
  computed: {},
  created() {
    this.$axios
      .post(
        "http://192.168.30.219:31002/geek-knife/examination/QueryTopicOfCourse",
        { packageId: "1" }
      )
      .then(res => {
        this.test_data = res.data.content;
        if (res.data.content[0].singleList) {
          res.data.content[0].singleList.map(item => {
            this.answer.singleList.push({
              topicId: item.topicId,
              answerId: ""
            });
          });
        }

        if (res.data.content[0].multipleList) {
          res.data.content[0].multipleList.map(item => {
            this.answer.multipleList.push({
              topicId: item.topicId,
              answerId: ""
            });
          });
        }

        if (res.data.content[0].shortAnswerList) {
          res.data.content[0].shortAnswerList.map(item => {
            this.answer.shortAnswerList.push({
              topicId: item.topicId,
              answerId: ""
            });
          });
        }
      });
  },
  mounted() {},
  components: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.bigbang {
  height: 100%;
  width:100%;
}
.test {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow: auto;
  > .left {
    width: 70%;
    padding-right: 20px;
    overflow: auto;
    header {
      height: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
    .main-body {
      display: flex;
      flex-direction: column;
      padding: 20px;
      p > {
        margin-top: 30px;
      }
    }
  }
  .right {
    width: 30%;
    padding: 20px;
  }
}
/deep/.ant-checkbox-group {
  width: 100%;
}
</style>