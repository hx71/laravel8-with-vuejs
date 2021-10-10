import axios from 'axios';

import store from "./store";

const getToken = () => localStorage.getItem('token')

const $axios = axios.create({
    baseURL: '/api',
});

export default $axios;
