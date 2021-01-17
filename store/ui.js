export const state = () => ({
    sidebarExpanded: false,
    userbarExpanded: false
})
  
export const mutations = {
    SET_SIDEBAR_EXPAND(state, status) {
        state.sidebarExpanded = status
    },
    SET_USERBAR_EXPAND(state, status) {
        state.userbarExpanded = status
    }
}

export const actions = {
    setSidebarExpand({ commit }, status) {
        commit('SET_SIDEBAR_EXPAND', status)
    },
    setUserbarExpand({ commit }, status) {
        commit('SET_USERBAR_EXPAND', status)
    },
}
