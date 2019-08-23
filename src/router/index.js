/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = [
    {
        path: '/s',
        name: 'main',
        
    }
];



export default new Router({
  mode: 'history',
  routes: router,
})