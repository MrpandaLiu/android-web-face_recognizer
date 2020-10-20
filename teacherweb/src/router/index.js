/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-16 19:51:27
 * @FilePath: \DIPproject\teacherweb\src\router\index.js
 * @Description: add some description
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
