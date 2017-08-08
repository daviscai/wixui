/**
 * @author https://github.com/daviscai
 * @date 2017/08/07
 * @description 路由名字配置
 */

// import {retina} from './utils'
import paper from './paper'
import icon from './icon'

const components = {
  paper,
  icon
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
  // retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  install
}
export {
  install
}
