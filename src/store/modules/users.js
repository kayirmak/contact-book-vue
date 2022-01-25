import { sendRequest } from '@/api'
import { setItem, getItem } from '@/helpers/localStorage'
import { DATA_API } from '@/helpers/localStorage'

const state = {
    users: getItem(DATA_API) || [],
    user: null,
}

export const getterTypes = {
    users: '[users] users',
    user: '[users] user'
}

export const mutationTypes = {
    getUsersSuccess: '[users] getUsersSuccess',
    getOneUser: '[users] getOneUser',
    changeUserDataSuccess: '[users] changeUserDataSuccess',
    sortUsersData: '[users] sortUsersData'
}

export const actionTypes = {
    getUsers: '[users] getUsers',
    getOneUser: '[users] getOneUser',
    sortUsersData: '[users] sortUsersData',
    changeUserData: '[users] changeUserData'
}

const getters = {
    [getterTypes.users]: state => state.users,
    [getterTypes.user]: state => {
        return state.user ? state.user : state.users[0]
    }
}

const mutations = {
    [mutationTypes.getUsersSuccess](state, data) {
        state.users = data
    },

    [mutationTypes.getOneUser](state, payload) {
        state.user = payload
    },
    
    [mutationTypes.changeUserDataSuccess](state, payload) {
        state.user = payload
    },

    [mutationTypes.sortUsersData](state, data) {
        state.users = data
    },

}

const actions = {
    [actionTypes.getUsers]({ commit }) {
        if(!getItem(DATA_API)) {
            sendRequest('users').then(res => {
                setItem(DATA_API, res)
                commit(mutationTypes.getUsersSuccess, res)
            })
        }
        else commit(mutationTypes.getUsersSuccess, getItem(DATA_API))
    },

    [actionTypes.getOneUser]({ commit }, user) {
        commit(mutationTypes.getOneUser, user)
    },

    [actionTypes.sortUsersData]({ commit }, users) {
        return new Promise(resolve => {
            users.sort((a, b) => {
                let nameA = a.username,
                    nameB = b.username
                if(nameA < nameB) return -1
                if(nameA > nameB) return 1
                return 0
            })
            commit(mutationTypes.sortUsersData, users)
            resolve(users)
        })
    },

    [actionTypes.changeUserData]({ commit, dispatch }, user) {
        commit(mutationTypes.changeUserDataSuccess, user)
        let users = getItem(DATA_API)
        users = users.map(item => {
            if(item.id === user.id) {
                return item = user
            }
            return item
        })
        setItem(DATA_API, users)
        dispatch(actionTypes.sortUsersData, users)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}