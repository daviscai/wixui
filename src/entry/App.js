
/**
 * @author https://github.com/daviscai
 * @date 2017/08/07
 * @description 程序入口启动配置
 */

const App = require('../App.vue')

const Wixui = require('components/wixui')
Vue.use(Wixui)

App.el = '#root'
new Vue(App)
