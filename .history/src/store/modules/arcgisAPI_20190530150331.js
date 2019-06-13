import esriloader from 'esri-loadeer'
import { resolve } from 'url'
const arcgisAPI = {
  state: {
    esri: {
      map: null
    }
  },
  mutations: {
    setMap: (state, map) => {
      state.esri.map = map
    }
  },
  actions: {
    initAPI ({commit}) {
      return new Promise((resolve) => {
        esriloader.loadScript({url: process.env.ARCGIS_API + 'init.js'})
        esriloader.loadCss(process.env.ARCGIS_API + 'esri/css/esri.css')
        esriloader.loadModules(['esri/Map'])
      }).then(([Map]) => {
        commit('setMap', Map)
        resolve()
      })
    }
  }
}
export default arcgisAPI