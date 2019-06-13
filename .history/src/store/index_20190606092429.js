import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'
import getters from './getter'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI
  },
  getters: getters
})

export default store
