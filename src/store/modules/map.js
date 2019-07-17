const mapState = {
  state: {
    mapControl: null
  },
  mutations: {
    set_map: (state, mapControl) => {
      state.mapControl = mapControl
    }
  },
  actions: {
    set_map: ({commit}, mapControl) => commit('set_map', mapControl)
  },
  getters: {
    mapControl: state => state.mapControl
  }
}
export default mapState
