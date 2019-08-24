<template>
  <div class="qualification">
    <div class="box">
      <div class="top-line">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="time">2019.8.3</div>

      <div class="img-box">
          <img v-if="fen>=90" src="../../static/images/best.png" width="180" height="130" style="margin-left:15px" alt="">
          <img v-if="fen>60 && fen<90" src="../../static/images/ok.png" width="180" height="130" style="margin-left:15px" alt="">
      </div>
      <div class="fen">
        <div>
          成绩：
          <span style="color:red;">{{fen}}</span>分
        </div>
        <div>
          等级：
          <span style="color:red;">{{fen>=90?'优秀':'良好'}}</span>
        </div>
      </div>
      <div class="title" @click="$emit('changpin')" style="cursor:pointer;">产品经理的日常</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ['fen',],
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

<style lang="less" scoped>
.box {
  position: relative;
  width: 210px;
  height: 200px;
  border: 1px dashed #ccc;
  border-top: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  background: #fff;
  .top-line {
    position: absolute;
    top: 0;
    width: 100%;
    .left {
      position: absolute;
      left: 0;
      display: inline-block;
      width: 10%;
      border-top: 1px dashed #ccc;
    }
    .right {
      position: absolute;
      right: 0;
      display: inline-block;
      width: 50%;
      border-top: 1px dashed #ccc;
    }
  }
  .time {
    position: absolute;
    top: -10px;
    left: 18%;
  }
  .img-box {
    height: 130px;
    width: 100%;
  }
  .fen {
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding: 3px 10px;
  }
  .title {
      font-size: 16px;
      color: #5CB1EC;
      margin-top: 10px;
      padding: 0 10px;
  }
}
</style>