import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'
import mapState from './modules/map'
import router from '@/router'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI,
    mapState
  }
})

router.beforeEach((to, from, next) => {
  store.dispatch('initAPI').then(() => {
    next()
  })
})

export default store
