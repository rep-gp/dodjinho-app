import { ActionTree, MutationTree } from 'vuex'
import { userFriendsData } from '@/use/mocked-data'

export const state = () => ({
    userData: null as unknown as any,
    avatar: null as unknown as any,
    userFriends: userFriendsData
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_USER_DATA(state, data: any) {
        state.userData = data
    },
    SET_USER_AVATAR(state, avatar: any) {
        state.avatar = avatar
    }
}

export const actions: ActionTree<RootState, RootState> = {
    setUserData({ commit }, data) {
        console.log(data)
        commit('SET_USER_DATA', data)
    },
    setUserAvatar ({ commit }, data) {
        commit('SET_USER_AVATAR', data)
    }
}