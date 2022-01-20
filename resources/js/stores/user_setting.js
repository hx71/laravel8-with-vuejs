import $axios from '../api.js'
import lib from "../lib/lib";

const state = () => ({
    data_users: []
})

const mutations = {
    ASSIGN_DATA_USERS(state, payload) {
        state.data_users = payload
    },
}

const actions = {
    getUser({ commit }, payload) {
        console.log('token ==>', lib.getConfig());
        console.log("get data users")
        let page = payload && payload.page
        let search = payload && payload.search
        let type = payload && payload.type
        let pages = !page ? '' : `&page=${page}`
        let searchTerm = !search ? '' : `&search=${search}`
        let types = !type ? '' : `&type=${type}`
        return new Promise((resolve) => {
            $axios.get(`/users?${pages}${searchTerm}${types}`, lib.getConfig())
                .then((response) => {
                    commit('ASSIGN_DATA_USERS', response.data.data)
                    resolve(response.data.data)
                })
        })
    },
    createUser({ dispatch }, payload) {
        return new Promise((resolve) => {
            $axios.post(`/users`, payload, lib.getConfig())
                .then((response) => {
                    resolve(response.data)
                })
        })
    },
    removeUser({ dispatch }, payload) {
        return new Promise((resolve) => {
            $axios.delete(`/users/${payload}`, lib.getConfig())
                .then(() => {
                    dispatch('getUser').then(() => resolve())
                        // dispatch('getGenerateCode').then(() => resolve())
                })
        })
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}