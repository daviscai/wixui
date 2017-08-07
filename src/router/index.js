/**
 * @author https://github.com/daviscai
 * @description vue router
 * @date 2017/08/07
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'
import route from './page'

// Object.values(route)
Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})

Vue.$router = router

export default router
