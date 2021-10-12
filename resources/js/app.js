require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import router from './router';
import store from './store.js'

import App from './App.vue'
// import App from './layouts/default'
// import App from './layouts/auth'

const app = new Vue({
    router,
    store,
    components: { App }
  }).$mount('#spa')