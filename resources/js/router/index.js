import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store.js'


import LayoutDefault from '../layouts/default';
// import LayoutAuth from '../layouts/auth';

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

import Login from '../auth/Login'
import Register from '../auth/Register'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    }
//   {
//     path: '*',
//     name: '404-page',
//     component: Error404
//   },
//   {
//     path: '/',
//     name: 'home',
//     redirect: '/dashboard',
//     component: LayoutDefault,
//     meta: {
//       title: 'Home',
//       requiresAuth: true,
//     },
//     children: [
//       {
//         path: 'dashboard',
//         name: 'dashboard',
//         component: Dashboard,
//         meta: {
//           title: 'Dashboard',
//           breadcrumbUrlName: 'Dashboard',
//           requiresAuth: true,
//         }
//       },
//     ]
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
        next({name: 'login'})
      } else {
        next()
      }
    } else {
      next()
    }
  })

export default router
// develop
