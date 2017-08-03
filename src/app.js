import Wxui from './wxui'

//import App from './index.vue'

import App from './demo/appBar.vue'

Vue.use(Wxui)

new Vue({
  el: '#root',
  render: h => h(App)
})
