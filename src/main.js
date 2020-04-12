import Vue from 'vue'
import App from './App.vue'

// 在入口文件中导入vue-router第三方包
import VueRouter from 'vue-router'
// 在Vue中注册
Vue.use(VueRouter)

// 导入herolist.vue组件
import HeroList from './views/hero/herolist.vue'
import WeaponList from './views/weapon/weaponlist.vue'
import EquipList from './views/equip/equiplist.vue'
// 创建router的实例选项
const router = new VueRouter({
  // 路由构造函数选项进行全局配置
  linkExactActiveClass: "active",
  // 配置路由规则
  routes: [
    { name: 'herolist', path: '/hero', component: HeroList },
    { path: '/', redirect: '/hero' },
    { name: 'weaponlist', path: '/weapon', component: WeaponList },
    { name: 'equiplist', path: '/equip', component: EquipList }
  ]
})


Vue.config.productionTip = false

// 引入css文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  render: h => h(App),
  // 将实例选项挂载到vue上
  router
}).$mount('#app')
