// 存放路由模块

// 导入vue
import Vue from 'vue'
// 在入口文件中导入vue-router第三方包
import VueRouter from 'vue-router'
// 在Vue中注册
Vue.use(VueRouter)

// 导入herolist.vue组件
import HeroList from './views/hero/herolist.vue'
import WeaponList from './views/weapon/weaponlist.vue'
import EquipList from './views/equip/equiplist.vue'

// 导入添加英雄组件
import HeroAdd from './views/hero/HeroAdd.vue'
// 导入编辑英雄组件
import HeroEdit from './views/hero/HeroEdit.vue'
// 创建router的实例选项
const router = new VueRouter({
    // // 路由构造函数选项进行全局配置
    // linkExactActiveClass: "active",

    linkActiveClass: "active",
    // 配置路由规则
    routes: [
        { name: 'herolist', path: '/hero', component: HeroList },
        { path: '/', redirect: '/hero' },
        { name: 'weaponlist', path: '/weapon', component: WeaponList },
        { name: 'equiplist', path: '/equip', component: EquipList },
        // 配置添加英雄的路由组件
        { name: 'heroadd', path: '/hero/add', component: HeroAdd },
        // 配置编辑英雄的路由组件
        { name: 'heroedit', path: '/hero/edit/:id', component: HeroEdit }
    ]

})
// 将router路由对象导出
export default router