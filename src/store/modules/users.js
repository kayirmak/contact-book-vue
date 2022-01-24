import { sendRequest } from '@/api'
import { setItem, getItem } from '@/helpers/localStorage'
import { DATA_API } from '@/helpers/localStorage'

const state = {
    users: getItem(DATA_API) || [],
    user: getItem(DATA_API) ? getItem(DATA_API)[0] : {},
    sortUsers: []
}

const getters = {
    users: state => state.users,
    sortUsers: state => state.sortUsers,
    user: state => state.user
}

const mutations = {
    getUsersSuccess(state, data) {
        state.users = data
    },

    getOneUser(state, payload) {
        state.user = payload
    },
    
    changeUserDataSuccess(state, payload) {
        state.user = payload
    },

    sortUsersData(state, data) {
        state.users = data
    },

}

const actions = {
    getUsers({ commit }) {
        if(!getItem(DATA_API)) {
            sendRequest('users').then(res => {
                console.log(res, 'RESP');
                setItem(DATA_API, res)
                commit('getUsersSuccess', res)
            })
        }
        else commit('getUsersSuccess', getItem(DATA_API))
    },
    getOneUser({ commit }, user) {
        commit('getOneUser', user)
    },
    sortUsersData({ commit }, users) {
        return new Promise(resolve => {
            users.sort((a, b) => {
                let nameA = a.username,
                    nameB = b.username
                if(nameA < nameB) return -1
                if(nameA > nameB) return 1
                return 0
            })
            commit('sortUsersData', users)
            resolve(users)
        })
    },
    changeUserData({ commit, dispatch }, user) {
        commit('changeUserDataSuccess', user)
        let users = getItem(DATA_API)
        users = users.map(item => {
            if(item.id === user.id) {
                return item = user
            }
            return item
        })
        setItem(DATA_API, users)
        dispatch('sortUsersData', users)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}