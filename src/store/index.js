import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'
import router from '@/router'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI
  }
})

router.beforeEach((to, from, next) => {
  store.dispatch('initAPI').then(() => {
    next()
  })
})

export default store
