<template>
  <div>
    <div class="card card-primary">
      <div class="card-header"><h4>Login</h4></div>
      <div class="card-body">
        <form method="POST" action="#" class="needs-validation" novalidate="" @submit.prevent="postLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control"  v-model="email" tabindex="1" required autofocus>
            <div class="invalid-feedback">
              Please fill in your email
            </div>
          </div>

          <div class="form-group">
            <div class="d-block">
              <label for="password" class="control-label">Password</label>
              <div class="float-right">
                <a href="auth-forgot-password.html" class="text-small">
                  Forgot Password?
                </a>
              </div>
            </div>
            <input id="password" type="password" class="form-control" v-model="password" tabindex="2" required>
            <div class="invalid-feedback">
              please fill in your password
            </div>
          </div>

          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
              <label class="custom-control-label" for="remember-me">Remember Me</label>
            </div>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-5 text-muted text-center">
      Don't have an account? <router-link :to="{name: 'auth-register'} ">Register</router-link>
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
        this.$router.push({ name: "home" });
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
          if (res.code == 200) {
            this.CLEAR_ERRORS();
            this.$router.push({ name: "dashboard" });
            //  this.$router.push({ name: 'dashboard', query: { redirect: '/' } });
            //  router.push({ path: '/dashboard' });
          }
        });
      }            
    }
  }
</script>
