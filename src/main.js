import Vue from 'vue'
import App from './App.vue'

// 导入路由模块
import router from './router.js'


Vue.config.productionTip = false

import axios from 'axios';
// 让所有的vue实例都具有一个属性axios,给Vue构造函数的原型增加成员
Vue.prototype.axios = axios

// 引入css文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  render: h => h(App),
  // 将实例选项挂载到vue上
  router//router 不需要动位置,因为我们会把路由模块导入进来
}).$mount('#app')
