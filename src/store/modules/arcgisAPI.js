import esriloader from 'esri-loader'

const arcgisAPI = {
  state: {
    esri: {
      Color: null,
      geometry: {
        Point: null
      },
      graphic: null,
      layers: {
        ArcGISDynamicMapServiceLayer: null,
        ArcGISTiledMapServiceLayer: null,
        FeatureLayer: null
      },
      map: null,
      symbols: {
        SimpleLineSymbol: null,
        SimpleMarkerSymbol: null
      }
    }
  },
  mutations: {
    setColor: (state, Color) => {
      state.esri.Color = Color
    },
    setPoint: (state, Point) => {
      state.esri.geometry.Point = Point
    },
    setGraphic: (state, graphic) => {
      state.esri.graphic = graphic
    },
    setArcGISDynamicMapServiceLayer: (state, ArcGISDynamicMapServiceLayer) => {
      state.esri.layers.ArcGISDynamicMapServiceLayer = ArcGISDynamicMapServiceLayer
    },
    setArcGISTiledMapServiceLayer: (state, ArcGISTiledMapServiceLayer) => {
      state.esri.layers.ArcGISTiledMapServiceLayer = ArcGISTiledMapServiceLayer
    },
    setFeatureLayer: (state, FeatureLayer) => {
      state.esri.layers.FeatureLayer = FeatureLayer
    },
    setMap: (state, map) => {
      state.esri.map = map
    },
    setSimpleLineSymbol: (state, SimpleLineSymbol) => {
      state.esri.symbols.SimpleLineSymbol = SimpleLineSymbol
    },
    setSimpleMarkerSymbol: (state, SimpleMarkerSymbol) => {
      state.esri.symbols.SimpleMarkerSymbol = SimpleMarkerSymbol
    }
  },
  actions: {
    // 将整个API进行初始化，然后扔到store里，不用多次加载，方便使用
    initAPI ({commit}) {
      return new Promise((resolve) => {
        esriloader.loadScript({url: process.env.ARCGIS_API + 'init.js'})
        esriloader.loadCss(process.env.ARCGIS_API + 'esri/css/esri.css')
        esriloader.loadModules([
          'esri/Color',
          'esri/geometry/Point',
          'esri/graphic',
          'esri/layers/ArcGISDynamicMapServiceLayer',
          'esri/layers/ArcGISTiledMapServiceLayer',
          'esri/layers/FeatureLayer',
          'esri/map',
          'esri/symbols/SimpleLineSymbol',
          'esri/symbols/SimpleMarkerSymbol'
        ]).then(([
          Color,
          Point,
          graphic,
          ArcGISDynamicMapServiceLayer,
          ArcGISTiledMapServiceLayer,
          FeatureLayer,
          map,
          SimpleLineSymbol,
          SimpleMarkerSymbol
        ]) => {
          commit('setColor', Color)
          commit('setPoint', Point)
          commit('setGraphic', graphic)
          commit('setArcGISDynamicMapServiceLayer', ArcGISDynamicMapServiceLayer)
          commit('setArcGISTiledMapServiceLayer', ArcGISTiledMapServiceLayer)
          commit('setFeatureLayer', FeatureLayer)
          commit('setMap', map)
          commit('setSimpleLineSymbol', SimpleLineSymbol)
          commit('setSimpleMarkerSymbol', SimpleMarkerSymbol)
          resolve()
        })
      })
    }
  },
  getters: {
    Color: state => state.esri.Color,
    Point: state => state.esri.geometry.Point,
    graphic: state => state.esri.graphic,
    ArcGISDynamicMapServiceLayer: state => state.esri.layers.ArcGISDynamicMapServiceLayer,
    ArcGISTiledMapServiceLayer: state => state.esri.layers.ArcGISTiledMapServiceLayer,
    FeatureLayer: state => state.esri.layers.FeatureLayer,
    map: state => state.esri.map,
    SimpleLineSymbol: state => state.esri.symbols.SimpleLineSymbol,
    SimpleMarkerSymbol: state => state.esri.symbols.SimpleMarkerSymbol
  }
}
export default arcgisAPI
