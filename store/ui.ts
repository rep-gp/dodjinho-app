import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    inputAlert: false as boolean,
    sidebarExpanded: false as boolean,
    userbarExpanded: false as boolean
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_INPUT_ALERT(state, status: boolean) {
        state.inputAlert = status
    },
    SET_SIDEBAR_EXPAND(state, status: boolean) {
        state.sidebarExpanded = status
    },
    SET_USERBAR_EXPAND(state, status: boolean) {
        state.userbarExpanded = status
    }
}

export const actions: ActionTree<RootState, RootState> = {
    alertInput({ commit }) {
        commit('SET_INPUT_ALERT', true)
        setTimeout(() => commit('SET_INPUT_ALERT', false), 1000)
    },
    setSidebarExpand({ commit }, status: boolean) {
        commit('SET_SIDEBAR_EXPAND', status)
    },
    setUserbarExpand({ commit }, status: boolean) {
        commit('SET_USERBAR_EXPAND', status)
    },
}