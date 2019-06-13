import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    arcgisAPI
  },
  getters: {
    Map: state => state.esri.map
  }
})

export default store
