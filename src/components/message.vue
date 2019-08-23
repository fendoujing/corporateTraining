<template>
  <div class="message">
    <aside class="aside">
        <img src="../../static/images/bigimg.png" width="200" alt="">
    </aside>
    <section class="main">
      <a-list itemLayout="horizontal" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <!-- <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
          </a-list-item-meta> -->
          <div class="box" style="display: flex;width: 100%;flex-direction: column;">
              <div class="time" style="color:#97C159;font-weight:900;margin-left:8px;">2019.8.23</div>
              <div style="font-weight:900;">「{{item.title}}」{{item.sub_title}}</div>
            <div class="content" style="color:#C2C2C2;font-size:12px;padding-left:8px;">
                <p>大数据技术可以预测未来交通情况</p>
                <p>为改善交通状况提供优化方案</p>
                <p>有助于交通部门提高对道路交通的把控能力,大数据是眼下非常时髦的热词，同时也催生出了一些与大数据处理相关的职业，通过对数据的挖掘分析来影响企业的商业决策。</p>
                <p>防止和缓解交通拥堵同时也催生出了一些与大数据处理相关的职业</p> 
                <p>提供更加人性化的服务</p>
            </div>
            <div style="color:#83C2F0;font-size:12px;padding-left:8px;cursor:pointer;">{{index == 1 ?'立即学习':'立即报名'}}</div>
          </div>
           
        </a-list-item>
      </a-list>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data: [
        {
          title: "新课首发",
          sub_title: "大数据分析师训练营正式开始招生"
        },
        {
          title: "必修",
          sub_title: "四期C++编程训练营火热招生中！仅限50席！"
        },
        {
          title: "第六届Code+程序设计大赛",
          sub_title: "火热报名中！"
        },
        {
          title: "第四届javascript+程序设计大赛",
          sub_title: "火热报名中！"
        },
      ]
    };
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
.message {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  .aside,
  .main {
    height: 100%;
    overflow-y: auto;
  }
  .aside {
    width: 15%;
  }
  .main {
    width: 85%;
    padding-left: 20px;
  }
}
</style>