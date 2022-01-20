import axios from 'axios';

const getToken = () => localStorage.getItem('token')

const $axios = axios.create({
    baseURL: '/api',
});

export default $axios;