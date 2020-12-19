/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-11-03 18:36:21
 * @FilePath: \reception\src\router\index.js
 * @Description: add some description
 */
/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-08 14:54:43
 * @FilePath: \数字图像处理\webapp\reception\src\router\index.js
 * @Description: add some description
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;