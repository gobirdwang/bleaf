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
  store.dispatch('initAPI').then(() => {
    next()
  })
})

export default store
