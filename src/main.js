import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入css文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
