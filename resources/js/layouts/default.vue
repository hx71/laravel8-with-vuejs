<template>
 
    <div id="default">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link :to="{name: 'dashboard'} " class="nav-brand">Base Project Laravel Vue Js</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                         
                        <li class="nav-item">
                            <router-link :to="{name: 'login'} " class="nav-link">Login</router-link>
                        </li>
                    
                        <li class="nav-item">
                            <router-link :to="{name: 'register'} " class="nav-link">Register</router-link>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                Admin
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="logout">
                                    Logout
                                </a>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <router-view></router-view>
         
        </main>
    </div>
    
</template>


<script>
// import menus from '../router/menus'
export default {
  data () {
    return {
    //   menus,
    //   userData: {},
    //   bottomMenus: [],
    //   onlineStatus: 'online',
    //   isLoadingProfile: false,
    //   isLoadingSidebarMenu: false
    }
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
            this.$router.push({name: 'login'})
        })
    },
  }
}
</script>
