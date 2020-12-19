/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-08 14:03:22
 * @FilePath: \数字图像处理\webapp\reception-app\src\main.js
 * @Description: add some description
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");