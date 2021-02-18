import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// 画面のvueクラスをimport
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',  // vueクラスのパスを定義
    name: 'Home',
    component: Home
  },
  {
    // 動的セグメント
    path: '/detail/:id',  // vueクラスのパスを定義
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
