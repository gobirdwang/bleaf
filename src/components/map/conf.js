/**
 * 与地图有关的配置都写在这里，实现了地图业务的分离
 */
const conf = {
  // 空间参考
  spaticalReference: 4326,
  map: null,
  graphics: null,
  // 点的样式，避免了过于冗长的代码
  pointStyle: {
    // 定位点
    location: () => {
      return new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 12, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([210, 105, 30, 0.5]), 8), new esri.Color([210, 105, 30, 0.9]))
    }
  },
  // 线样式
  lineStyle: {

  },
  // 面样式
  polygonStyle: {

  }
}
export default conf
