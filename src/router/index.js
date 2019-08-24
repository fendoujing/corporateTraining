/** 定义导出路由模块 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Person from "../components/person"
import classMain from "../components/classMain"
import classList from "../components/classList"
import classDetail from "../components/classDetail"
import Message from "../components/message"
import Test from "../components/test"
import TeacherDetail from "../components/teacherDetail"
import LecturersCenter from "../components/lecturersCenter"
 
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
    path: '/classDetail/:classId/:userId',
    name: 'classDetail',
    component: classDetail,
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/teacherDetail',
    name: 'teacherDetail',
    component: TeacherDetail,
  },
  {
    path: '/lecturersCenter',
    name: 'lecturersCenter',
    component: LecturersCenter,
  },
];



export default new Router({
  mode: 'hash',
  routes: router,
})