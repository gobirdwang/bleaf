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

store.dispatch('initAPI')

export default store
