import esriloader from 'esri-loadeer'
import { resolve } from 'url'
const arcgisAPI = {
  state: {
    esri: {
      map: null,
      spaticalReference: null
    }
  },
  mutations: {
    setSpaticalReference: (state, spaticalReference) => {
      state.esri.spaticalReference = spaticalReference
    },
    setMap: (state, map) => {
      state.esri.map = map
    }
  },
  actions: {
    initAPI ({commit}) {
      return new Promise((resolve) => {
        esriloader.loadScript({url: process.env.ARCGIS_API + 'init.js'})
        esriloader.loadCss(process.env.ARCGIS_API + 'esri/css/esri.css')
        esriloader.loadModules([])

      })
    }
  }
}
export default arcgisAPI
