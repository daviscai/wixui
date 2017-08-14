/**
 * @author https://github.com/daviscai
 * @date 2017/08/06
 * @description 程序入口启动配置
 */

import App from './App.vue'
import router from './router'

import Wixui from './components/wixui'

Vue.use(Wixui) 

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router`.
new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')