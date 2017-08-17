/**
 * @author https://github.com/daviscai
 * @date 2017/08/07
 * @description 路由名字配置
 */


export default {
  index: {
    title: 'index',
    path: '/index',
    jsPath: 'views/index.js',
    component: require('../views/index.vue')
  },
  paper: {
    title: 'paper',
    path: '/paper',
    jsPath: 'views/wixui/paper/app.js',
    component: require('../views/wixui/paper/app.vue')
  },
  icon: {
    title: 'icon',
    path: '/icon',
    jsPath: 'views/wixui/icon/app.js',
    component: require('../views/wixui/icon/app.vue')
  },
  button: {
    title: 'button',
    path: '/button',
    jsPath: 'views/wixui/button/app.js',
    component: require('../views/wixui/button/app.vue')
  },
  layout: {
    title: 'layout',
    path: '/layout',
    jsPath: 'views/wixui/layout/app.js',
    component: require('../views/wixui/layout/app.vue')
  }
}
