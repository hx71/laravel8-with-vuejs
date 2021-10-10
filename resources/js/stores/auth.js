import $axios from '../api.js'

const state = () => ({
})

const mutations = {
}

const actions = {
    login({ commit }, payload) {
        localStorage.setItem('token', null)
        commit('SET_TOKEN', null, { root: true })

        return new Promise((resolve, reject) => {
            console.log(payload);
            $axios.post('/auth/login', payload)
            .then((response) => {
                if (response.data.code == 200) {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userdata', JSON.stringify(response.data.data))
                    localStorage.setItem('exp_date', new Date(Date.now() + ( 3600 * 1000 * 24)))
                    commit('SET_TOKEN', response.data.token, { root: true })
                } else {
                    commit('SET_ERRORS', { invalid: 'Email/Password Salah' }, { root: true })
                }
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })
        })
    },
    logout ({commit}) {
        localStorage.setItem('token', null)
        commit('SET_TOKEN', null, { root: true })
    },

    register({ commit }, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload);
            $axios.post('/auth/register', payload)
            .then((response) => {
                // if (response.data.code == 200) {
                //     localStorage.setItem('token', response.data.token)
                //     localStorage.setItem('userdata', JSON.stringify(response.data.data))
                //     localStorage.setItem('exp_date', new Date(Date.now() + ( 3600 * 1000 * 24)))
                //     commit('SET_TOKEN', response.data.token, { root: true })
                // } else {
                //     commit('SET_ERRORS', { invalid: 'Email/Password Salah' }, { root: true })
                // }
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
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
