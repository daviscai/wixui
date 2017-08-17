/**
 * @author https://github.com/daviscai
 * @date 2017/08/07
 * @description 路由配置页
 */

import route from './page'

export default [
  {
    path: '/',
    redirect: {
      path: route.index.path
    }
  },
  {
    title: route.index.title,
    path: route.index.path,
    component: route.index.component
  },
  {
    title: route.paper.title,
    path: route.paper.path,
    component: route.paper.component
  },
  {
    title: route.icon.title,
    path: route.icon.path,
    component: route.icon.component
  },
  {
    title: route.button.title,
    path: route.button.path,
    component: route.button.component
  },
  {
    title: route.layout.title,
    path: route.layout.path,
    component: route.layout.component
  }

]
