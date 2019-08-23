import Vue from 'vue'
import App from './App.vue'
/** 引入路由模块 **/
import router from './router/index';
/** 引入VUEX **/
import store from './store/index';
/** 项目引入ant-design-vue **/
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
