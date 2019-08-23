/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Person from "../components/person";

let router = [
    {
        path: '/person',
        name: 'person',
        component: Person,
    }
];



export default new Router({
  mode: 'history',
  routes: router,
})