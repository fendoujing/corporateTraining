
<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback" animated>
      <a-tab-pane tab="管理类" key="1" forceRender>Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane tab="经营类" key="2" >Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane tab="商业类" key="3">Content of Tab Pane 3</a-tab-pane>
      <a-tab-pane tab="营销类" key="4">Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane tab="领导力类" key="5">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {

  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>
