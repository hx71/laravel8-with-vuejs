import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store.js'

import LayoutDefault from '../layouts/default';
import LayoutAuth from '../layouts/auth';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import createUsers from '../pages/Create';

import Login from '../auth/Login';
import Register from '../auth/Register';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        redirect: '/dashboard',
        component: LayoutDefault,
        meta: {
            title: 'Home',
            requiresAuth: true,
        },
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: '/users',
                name: 'users',
                component: () =>
                    import ('../admin/users/Index.vue'),
                children: [{
                    path: '/create',
                    name: 'create-users',
                    component: () =>
                        import ('../admin/users/Create.vue'),
                }]


            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: LayoutAuth,
        children: [{
                path: 'login',
                name: 'auth-login',
                component: Login
            },
            {
                path: 'register',
                name: 'auth-register',
                component: Register
            },
        ]
    }
    //   {
    //     path: '*',
    //     name: '404-page',
    //     component: Error404
    //   },
]

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes
})

//Navigation Guards
router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            // cek exp_date in here
            next({ name: 'auth-login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
// develop