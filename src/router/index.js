/**
 * @author https://github.com/daviscai
 * @description vue router
 * @date 2017/08/07
 */

// import Vue from 'vue' // 巨坑！！！  WeexSDK（>= 0.9.5）中已经包含了 Vue.js Runtime，所以不需要再引入一遍 Vue.js ，否则router-view页面在App里白屏，根本找不到原因
import VueRouter from 'vue-router'
import map from './map'
import route from './page'

// Object.values(route)
Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  mode: 'abstract',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})

Vue.$router = router

export default router
