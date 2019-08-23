/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Person from "../components/person"
import classMain from "../components/classMain"
import Message from "../components/message"

let router = [{
    path: '/person',
    name: 'person',
    component: Person,
  },
  {
    path: '/classMain',
    name: 'classMain',
    component: classMain,
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
  },

];



export default new Router({
  mode: 'hash',
  routes: router,
})