<template>
 
    <div id="app">
        <div class="main-wrapper">

            <div>
                <div class="navbar-bg"></div>
                <nav class="navbar navbar-expand-lg main-navbar">
                    <form class="form-inline mr-auto">
                    <ul class="navbar-nav mr-3">
                        <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
                        <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i class="fas fa-search"></i></a></li>
                    </ul>
                    </form>
                    <ul class="navbar-nav navbar-right">
                    <li class="dropdown"><a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg nav-link-user">
                        <img alt="image" :src="'../../../../stisla/assets/img/avatar/avatar-1.png'" class="rounded-circle mr-1">
                        <div class="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a>
                        <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-title">Logged in 5 min ago</div>
                        <a href="features-profile.html" class="dropdown-item has-icon">
                            <i class="far fa-user"></i> Profile
                        </a>
                        <a href="features-activities.html" class="dropdown-item has-icon">
                            <i class="fas fa-bolt"></i> Activities
                        </a>
                        <a href="features-settings.html" class="dropdown-item has-icon">
                            <i class="fas fa-cog"></i> Settings
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item has-icon text-danger" @click="logout">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                        </div>
                    </li>
                    </ul>
                </nav>
            </div>

             <div class="main-sidebar">
            <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <router-link class="nav-link" :to="{name: 'dashboard'} ">ADMIN</router-link>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <a href="#"></a>
            </div>
            <ul class="sidebar-menu">
                <li class="menu-header">Dashboard</li>
                <li class="active">
                <router-link class="nav-link" :to="{name: 'dashboard'} "><i class="fas fa-fire"></i> <span>Dashboard</span></router-link>
                </li>
                <li class="menu-header">User Setting</li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link has-dropdown"><i class="far fa-user"></i> <span>User Setting</span></a>
                    <ul class="dropdown-menu">
                    <li>
                        <router-link :to="{name: 'users'} ">Users</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'create-users'} ">Create Users</router-link>
                    </li>
                    <li>
                        <router-link to="/users/1/edit ">Edit Users</router-link>
                    </li>
                    </ul>
                </li> 
                <li><a class="nav-link" href="#"><i class="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
                </ul>

                <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                <button class="btn btn-danger btn-lg btn-block btn-icon-split" @click="logout">
                    <i class="fas fa-rocket"></i> Logout
                </button>
                </div>
            </aside>
        </div>

            <!-- Main Content -->
            <div class="main-content">
                <!-- <slot></slot> -->
                <router-view></router-view>
            </div>

            <Footer />
        
        </div>
    </div>
    
</template>


<script>
import Header from "./header.vue"
import Sidebar from "./sidebar.vue"
import Footer from "./footer.vue"
export default {
    components: { Header, Sidebar, Footer },
    data () {
        return {}
    },
    created() {
        var scripts = [
            "https://code.jquery.com/jquery-3.3.1.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
            // "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
            // "../../../../stisla/assets/js/stisla.js",
            // "../../../../stisla/assets/js/scripts.js",
            // "../../../../stisla/assets/js/custom.js"
        ];
        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
        });
    },
    beforeMount () {
        this.showUserdata()
    },
    methods: {
        showUserdata(){
            let value = localStorage.getItem('userdata')
            let exp_date = localStorage.getItem('exp_date')
            if(value){ 
                let userData = JSON.parse(value) 
                this.userData = {
                name: userData.name
                }
            }
        },
        logout() {
            this.$store.dispatch('auth/logout').then(() => {
                this.$router.push({name: 'auth-login'})
            })
        },
    }
}
</script>


<style scoped>
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

    /* @import '../../stisla/node_modules/bootstrap-social/bootstrap-social.css'; */
    /* @import '../../../public/stisla/assets/css/style.css'; */
    /* @import '../../../public/stisla/assets/css/components.css'; */
</style>