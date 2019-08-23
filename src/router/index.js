/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Person from "../components/person"
import classMain from "../components/classMain"

let router = [
    {
        path: '/person',
        name: 'person',
        component: Person,
    },
    {
      path: '/classMain',
      name: 'classMain',
      component: classMain,
  },

];



export default new Router({
  mode: 'history',
  routes: router,
})