import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    userScore: 0,
    adversaryScore: 0
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_USER_SCORE(state, status: number) {
        state.userScore = status
    },
    SET_ADVERSARY_SCORE(state, status: number) {
        state.adversaryScore = status
    }
}

export const actions: ActionTree<RootState, RootState> = {
    setUserScore({ commit }, status: number) {
        commit('SET_USER_SCORE', status)
    },
    setAdversaryScore({ commit }, status: number) {
        commit('SET_ADVERSARY_SCORE', status)
    }
}
