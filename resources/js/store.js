import Vue from 'vue'
import Vuex from 'vuex'

// import module section
import auth from './stores/auth.js'


Vue.use(Vuex)

// define root store vuex
const store = new Vuex.Store({
  modules: {
    auth,
  },
  state: {
    token: localStorage.getItem('token'),
    errors: []
  },
  getters: {
    isAuth: state => {
      return state.token != "null" && state.token != null
    },
    axiosConfig: state => {
      return {
        headers: {
          Authorization: state.token ? 'Bearer ' + state.token : '',
          'Content-Type': 'application/json'
        }
      }
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_ERRORS(state, payload) {
      state.errors = payload
    },
    CLEAR_ERRORS(state) {
      state.errors = []
    }
  }
})

export default store
