// import './styles/base.less'
// import {retina} from './utils'
import paper from './paper'

// import config from './config'
const components = {
  paper
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
  // retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  // config,
  install
}
export {
  // config,
  install
}
