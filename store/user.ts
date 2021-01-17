import { ActionTree, MutationTree } from 'vuex'
import { userFriendsData } from '@/use/mocked-data'

export const state = () => ({
    userData: null as unknown as any,
    avatar: null as unknown as any,
    userFriends: [...userFriendsData]
})

const mockedUser = {
    points: 0,
    credit: 0,
    avatar: {
        hair: '#2D729B',
        pants: '#42B5A4',
        shirt: '#F3901A',
        shirtSecondary: '#642D9B',
        shoes: '#3C9B2D',
        gender: 'female'
    }
}

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    SET_USER_DATA(state, data: any) {
        state.userData = data
    },
    SET_USER_AVATAR(state, avatar: any) {
        state.avatar = avatar
    },
    PUSH_USER_FRIEND(state, name: string) {
        state.userFriends.push({ ...mockedUser, name })
    }
}

export const actions: ActionTree<RootState, RootState> = {
    setUserData({ commit }, data) {
        console.log(data)
        commit('SET_USER_DATA', data)
    },
    setUserAvatar ({ commit }, data) {
        commit('SET_USER_AVATAR', data)
    },
    addFriend ({ commit }, name) {
        commit('PUSH_USER_FRIEND', name)
    }
}