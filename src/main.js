import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 菜单收缩时，字不能影藏的问题
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

// 页面鉴权
import "./authentication"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
