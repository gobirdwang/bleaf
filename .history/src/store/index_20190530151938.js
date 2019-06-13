import Vue from 'vue'
import Vuex from 'vuex'
import arcgisAPI from './modules/arcgisAPI'

const store = new Vuex.Store({
  modules: {
    arcgisAPI
  }
})

export default store
