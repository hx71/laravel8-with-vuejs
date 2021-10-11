<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card card-default">
            <div class="card-header">Login</div>
            <div v-if="error">
                <div class="alert bg-danger text-white m-4">
                {{ error }}
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="postLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" v-model="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"  v-model="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">
                Login
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
        email: "",
        password: "",  
        error: "",
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
      ...mapActions("auth", ["login"]),
      ...mapMutations(["CLEAR_ERRORS"]),
      postLogin() {
        let data = {
          email : this.email,
          password : this.password,
        }
        this.login(data).then((res) => {
          console.log(res)
          if (res.code == 200) {
            this.CLEAR_ERRORS();
            this.$router.push({ name: "dashboard" });
          }
        });
      }            
    }
  }
</script>
