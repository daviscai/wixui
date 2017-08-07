/**
 * @author https://github.com/daviscai
 * @date 2017/08/06
 * @description 程序入口启动配置
 */

import App from './App.web.vue'
import router from 'router'

import Wixui from './components/wixui'
Vue.use(Wixui)

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: {
    App
  }
})
