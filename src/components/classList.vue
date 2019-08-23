<template>
  <div class="classList">
    <div>
      <tab-component></tab-component>
      <div v-on:click="detailClick()">详情</div>
    </div>
  </div>
</template>

<script>
import TabComponent from "./tabComponent";
export default {
  name: "classList",
  data() {
    return {
      nowMenu: {}
    };
  },
  methods: {
    detailClick:function(){
      this.$router.push({name:'classDetail'});
    }
  },
  computed: {},
  created() {},
  mounted() {},
  components: {
    TabComponent
  },
  beforeRouteEnter(to, from, next) {
    next(function(vm) {
      vm.nowMenu = to.query.class;
    });
  },
  watch: {
    $route: function(to, from) {
      var ss = 1;
    }
  }
};
</script>

<style  scoped>
</style>