const mapState = {
  state: {
    mapControl: null,
    center: null,
    zoom: null
  },
  mutations: {
    set_map: (state, mapControl) => {
      state.mapControl = mapControl
    },
    set_center: (state, center) => {
      state.center = center
    },
    set_zoom: (state, zoom) => {
      state.zoom = zoom
    }
  },
  actions: {
    set_map: ({commit}, mapControl) => commit('set_map', mapControl),
    set_center: ({commit}, center) => commit('set_center', center),
    set_zoom: ({commit}, zoom) => commit('set_zoom', zoom)
  },
  getters: {
    mapControl: state => state.mapControl,
    center: state => state.center,
    zoom: state => state.zoom
  }
}
export default mapState
