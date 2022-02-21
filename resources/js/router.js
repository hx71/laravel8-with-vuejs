import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store.js'

import LayoutDefault from './layouts/default';
import LayoutAuth from './layouts/auth';

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
                path: 'dashboard',
                name: 'dashboard',
                component: () =>
                    import ('./pages/Dashboard.vue'),
            },
            {
                path: 'users',
                name: 'users',
                component: () =>
                    import ('./pages/admin/users/Index.vue')
            },
            {
                path: '/users/create',
                name: 'create-users',
                component: () =>
                    import ('./pages/admin/users/Create.vue')
            },
            {
                path: '/users/:id/edit',
                name: 'edit-users',
                component: () =>
                    import ('./pages/admin/users/Edit.vue')
            },
            {
                path: 'roles',
                name: 'roles',
                component: () =>
                    import ('./pages/admin/roles/Index.vue')
            },
            {
                path: '/roles/create',
                name: 'create-roles',
                component: () =>
                    import ('./pages/admin/roles/Create.vue')
            },
            {
                path: '/roles/:id/edit',
                name: 'edit-roles',
                component: () =>
                    import ('./pages/admin/roles/Edit.vue')
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
                component: () =>
                    import ('./auth/Login')
            },
            {
                path: 'register',
                name: 'auth-register',
                component: () =>
                    import ('./auth/Register')
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