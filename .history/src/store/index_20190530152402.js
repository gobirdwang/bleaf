import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI
  }
})

export default store
