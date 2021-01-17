import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    sidebarExpanded: false as boolean,
    userbarExpanded: false as boolean
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_SIDEBAR_EXPAND(state, status: boolean) {
        state.sidebarExpanded = status
    },
    SET_USERBAR_EXPAND(state, status: boolean) {
        state.userbarExpanded = status
    }
}

export const actions: ActionTree<RootState, RootState> = {
    setSidebarExpand({ commit }, status: boolean) {
        commit('SET_SIDEBAR_EXPAND', status)
    },
    setUserbarExpand({ commit }, status: boolean) {
        commit('SET_USERBAR_EXPAND', status)
    },
}