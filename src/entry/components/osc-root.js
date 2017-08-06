
/**
 * @author walid
 * @date 2016/03/20
 * @description 程序入口启动配置
 */

const App = require("../../components/osc-root.vue")


// Vue.component('wix-paper', require("components/wixui/paper"))
const Wixui = require("components/wixui")

// import Wixui from './components/wixui'
Vue.use(Wixui)

// 全局注册组件
Vue.component('osc-root', require("components/osc-root"))
Vue.component('osc-navpage', require("components/osc-navpage"))
Vue.component('osc-navbar', require("components/osc-navbar")) 
Vue.component('osc-tabbar', require("components/osc-tabbar"))
Vue.component('osc-list', require("components/osc-list"))
Vue.component('osc-scroller', require("components/osc-scroller"))

App.el = '#root'
new Vue(App)
