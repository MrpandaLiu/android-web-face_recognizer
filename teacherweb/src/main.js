/*
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-13 19:13:23
 * @FilePath: \DIPproject\teacherweb\src\main.js
 * @Description: add some description
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
