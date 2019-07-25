import esriloader from 'esri-loader'

const arcgisAPI = {
  state: {
    esri: {
      Color: null,
      dijit: {
        Basemap: null
      },
      geometry: {
        Extent: null,
        Point: null
      },
      graphic: null,
      layers: {
        ArcGISDynamicMapServiceLayer: null,
        ArcGISTiledMapServiceLayer: null,
        FeatureLayer: null,
        TileInfo: null,
        WebTiledLayer: null
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
    setBaseMap: (state, Basemap) => {
      state.esri.dijit.Basemap = Basemap
    },
    setExtent: (state, Extent) => {
      state.esri.geometry.Extent = Extent
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
    setTileInfo: (state, TileInfo) => {
      state.esri.layers.TileInfo = TileInfo
    },
    setWebTiledLayer: (state, WebTiledLayer) => {
      state.esri.layers.WebTiledLayer = WebTiledLayer
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
          'esri/dijit/Basemap',
          'esri/geometry/Extent',
          'esri/geometry/Point',
          'esri/graphic',
          'esri/layers/ArcGISDynamicMapServiceLayer',
          'esri/layers/ArcGISTiledMapServiceLayer',
          'esri/layers/FeatureLayer',
          'esri/layers/TileInfo',
          'esri/layers/WebTiledLayer',
          'esri/map',
          'esri/symbols/SimpleLineSymbol',
          'esri/symbols/SimpleMarkerSymbol'
        ]).then(([
          Color,
          Basemap,
          Extent,
          Point,
          graphic,
          ArcGISDynamicMapServiceLayer,
          ArcGISTiledMapServiceLayer,
          FeatureLayer,
          TileInfo,
          WebTiledLayer,
          map,
          SimpleLineSymbol,
          SimpleMarkerSymbol
        ]) => {
          commit('setColor', Color)
          commit('setBaseMap', Basemap)
          commit('setExtent', Extent)
          commit('setPoint', Point)
          commit('setGraphic', graphic)
          commit('setArcGISDynamicMapServiceLayer', ArcGISDynamicMapServiceLayer)
          commit('setArcGISTiledMapServiceLayer', ArcGISTiledMapServiceLayer)
          commit('setFeatureLayer', FeatureLayer)
          commit('setTileInfo', TileInfo)
          commit('setWebTiledLayer', WebTiledLayer)
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
    Basemap: state => state.esri.dijit.Basemap,
    Extent: state => state.esri.geometry.Extent,
    Point: state => state.esri.geometry.Point,
    graphic: state => state.esri.graphic,
    ArcGISDynamicMapServiceLayer: state => state.esri.layers.ArcGISDynamicMapServiceLayer,
    ArcGISTiledMapServiceLayer: state => state.esri.layers.ArcGISTiledMapServiceLayer,
    FeatureLayer: state => state.esri.layers.FeatureLayer,
    TileInfo: state => state.esri.layers.TileInfo,
    WebTiledLayer: state => state.esri.layers.WebTiledLayer,
    map: state => state.esri.map,
    SimpleLineSymbol: state => state.esri.symbols.SimpleLineSymbol,
    SimpleMarkerSymbol: state => state.esri.symbols.SimpleMarkerSymbol
  }
}
export default arcgisAPI
