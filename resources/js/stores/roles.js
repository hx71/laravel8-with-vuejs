import $axios from '../api.js'
import lib from "../lib/lib";

const state = () => ({
    data_roles: []
})

const mutations = {
    ASSIGN_DATA_ROLES(state, payload) {
        state.data_roles = payload
    },
}

const actions = {
    getRoles({ commit }, payload) {
        let page = payload && payload.page
        let search = payload && payload.search
        let type = payload && payload.type
        let pages = !page ? '' : `&page=${page}`
        let searchTerm = !search ? '' : `&search=${search}`
        let types = !type ? '' : `&type=${type}`
        return new Promise((resolve) => {
            $axios.get(`/roles?${pages}${searchTerm}${types}`, lib.getConfig())
                .then((response) => {
                    commit('ASSIGN_DATA_ROLES', response.data.data)
                    resolve(response.data.data)
                })
        })
    },

    createRoles({ dispatch }, payload) {
        console.log(payload)
        return new Promise((resolve) => {
            $axios.post(`/roles`, payload, lib.getConfig())
                .then((response) => {
                    resolve(response.data)
                })
        })
    },

    getRolesByID({ commit }, params) {
        return new Promise((resolve) => {
            $axios.get(`/roles/${params}`, lib.getConfig())
                .then((response) => {
                    resolve(response.data.data)
                })
        })
    },

    updateRoles({ dispatch }, params) {
        return new Promise((resolve) => {
            $axios.put(`/roles/${params.id}`, params, lib.getConfig())
                .then((response) => {
                    resolve(response.data)
                })
        })
    },

    removeRoles({ dispatch }, params) {
        return new Promise((resolve) => {
            $axios.delete(`/roles/${params}`, lib.getConfig())
                .then((response) => {
                    resolve(response.data)
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