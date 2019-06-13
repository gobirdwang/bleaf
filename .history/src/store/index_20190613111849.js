import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'
import getters from './getter'
import router from '@/router'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI
  },
  getters: getters
})

router.beforeEach((to, from, next) => {
  const store1 = new Vuex.Store({
    modules: {
      arcgisAPI
    },
    getters: getters
  })
  debugger
  store.dispatch('Init_Api').then(() => {
    next()
  })
})

export default store
