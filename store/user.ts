import { ActionTree, MutationTree } from 'vuex'
import { userFriendsData } from '@/use/mocked-data'

export const state = () => ({
    userData: null as unknown as any,
    userFriends: userFriendsData
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_USER_DATA(state, data: any) {
        state.userData = data
    }
}

export const actions: ActionTree<RootState, RootState> = {
    seUserData({ commit }, data) {
        commit('SET_USER_DATA', data)
    }
}