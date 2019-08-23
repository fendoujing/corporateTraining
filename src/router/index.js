/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Person from "../components/person"
import classMain from "../components/classMain"
import classList from "../components/classList"
import classDetail from "../components/classDetail"
 
let router = [{
    path: '/person',
    name: 'person',
    component: Person,
  },
  {
    path: '/',
    name: 'classMain',
    component: classMain,
  },
  {
    path: '/classList',
    name: 'classList',
    component: classList,
  },
  {
    path: '/classDetail',
    name: 'classDetail',
    component: classDetail,
  }
];



export default new Router({
  mode: 'history',
  routes: router,
})