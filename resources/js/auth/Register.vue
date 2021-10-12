<template>
    <div>
        <div class="card card-primary">
            <div class="card-header"><h4>Register</h4></div>

            <div class="card-body">
            <form method="POST" @submit.prevent="postRegister">
                <div class="form-group">
                    <label for="first_name">Username</label>
                    <input id="first_name" type="text" class="form-control" v-model="user.name"  autofocus>
                </div>

                <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" class="form-control" name="email" v-model="user.email">
                <div class="invalid-feedback">
                </div>
                </div>

                <div class="form-group">
                    <label for="password" class="d-block">Password</label>
                    <input id="password" type="password" class="form-control pwstrength" data-indicator="pwindicator" v-model="user.password">
                    <div id="pwindicator" class="pwindicator">
                    <div class="bar"></div>
                    <div class="label"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password2" class="d-block">Password Confirmation</label>
                    <input id="password2" type="password" class="form-control"  v-model="user.password_confirmation">
                </div>
                
                <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block">
                    Register
                </button>
                </div>
            </form>
            </div>
        </div>
        <div class="mt-5 text-muted text-center">
        I already have an account? <router-link :to="{name: 'auth-login'} ">Login</router-link>
        </div>
    </div>
</template>


<script>
import {  mapActions,  mapMutations,  mapGetters,  mapState  } from "vuex";

  export default {
    data() {
        return {
            user:{
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
            }, 
            error: null,
        };
    },
    created() {
        if (this.isAuth) {
            this.$router.push({ name: "dashboard" });
        }
    },
    computed: {
        ...mapGetters(["isAuth"]),
        ...mapState(["errors"]),
    },
    methods: {
        ...mapActions("auth", ["register"]),
        ...mapMutations(["CLEAR_ERRORS"]),

        postRegister() {
            console.log(this.user);
            this.register(this.user).then((res) => {
                console.log(res)
                if (res.code == 200) {
                    this.CLEAR_ERRORS();
                    this.$router.push({ name: "login" });
                }
            });
        }            
    }
  }
</script>
