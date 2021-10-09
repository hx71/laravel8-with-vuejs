<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card card-default">
            <div class="card-header">Register</div>
            <!-- <div v-if="errors" class="alert bg-danger text-white m-4">
                <div v-for="(v, k) in errors" :key="k">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
                </div>
            </div> -->
            <div class="card-body">
                <form @submit.prevent="postRegister">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="user.name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="user.email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="user.password" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirm Password</label>
                        <input type="password" v-model="user.password_confirmation" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
            </div>
        </div>
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
