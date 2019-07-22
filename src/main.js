import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import utils from './utils'

Vue.config.productionTip = false
Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  utils,
  components: { App },
  template: '<App/>'
})
