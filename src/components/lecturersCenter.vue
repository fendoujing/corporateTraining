<template>
  <div class="lecturers">
    <aside>
      <div class="btn-list">业务专家</div>
      <div class="btn-list">研发团队</div>
      <div class="btn-list">公共组</div>
    </aside>
    <section>
      <div class="class-list">
        <header>C#知识</header>
        <div class="list">
          <div class="t-panel">
              <div class="img">
                  <div>李玲|JAVA</div>
              </div>
              <div class="message-box">

              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
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
.lecturers {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  aside {
    width: 15%;
    height: 100%;
    .btn-list {
      line-height: 30px;
      text-align: center;
      width: 100%;
      height: 30px;
      border: 1px solid #ccc;
      border-top: 0;
      &:first-child {
        border-top: 1px solid #ccc;
      }
    }
  }
  section {
    width: 85%;
    height: 100%;
    padding-left: 20px;
    .class-list {
      header {
        line-height: 30px;
        height: 30px;
        padding: 0 10px;
      }
      .list {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        .t-panel {
          height: 200px;
          width: 170px;
          margin-left: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          .img {
              height: 100%;
              width: 100%;
          }
          &:hover .message-box{
              display:block;
          }
          .message-box {
              height: 100%;
              width: 100%;
              display: none;
              border: 1px solid #f00;
              background: #fff;
          }
        }
      }
    }
  }
}
</style>