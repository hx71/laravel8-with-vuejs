require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import router from './router.js';
import store from './store.js'

import App from './App.vue'

const app = new Vue({
    router,
    store,
    components: { App }
  }).$mount('#spa')