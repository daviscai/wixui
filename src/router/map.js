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
      // path: route.mine.path
      path: route.paper.path
    }
  },
  {
    title: route.paper.title,
    path: route.paper.path,
    component: route.paper.component
  }

]
