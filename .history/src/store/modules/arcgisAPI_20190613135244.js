import esriloader from 'esri-loader'
// 通过vuex控制arcgis_js的加载，注意，initAPI需要在初始化时候加载
const arcgisAPI = {
  state: {
    esri: {
      map: null
    }
  },
  mutations: {
    setMap: (state, map) => {
      debugger
      state.esri.map = map
    }
  },
  actions: {
    initAPI ({commit}) {
      return new Promise((resolve) => {
        esriloader.loadScript({url: process.env.ARCGIS_API + 'init.js'})
        esriloader.loadCss(process.env.ARCGIS_API + 'esri/css/esri.css')
        debugger
        esriloader.loadModules(['esri/map']).then(([Map]) => {
          commit('setMap', Map)
          resolve()
        })
      })
    }
  }
}
export default arcgisAPI
