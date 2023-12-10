<template>
 
  <div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img :src="'../../../../stisla/assets/img/stisla-fill.svg'" alt="logo" width="100" class="shadow-light rounded-circle">
            </div>

            <router-view></router-view>
            <!-- <slot></slot> -->
            <!-- <h1>welcome auth</h1> -->

            <div class="simple-footer">
              Copyright &copy; Stisla 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>


<script>
export default {
    data () {
        return {}
    },
    created() {
        var scripts = [
          // General JS Scripts
            "https://code.jquery.com/jquery-3.3.1.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
            "../../../../stisla/assets/js/stisla.js",
            // Template JS File
            "../../../../stisla/assets/js/scripts.js",
            "../../../../stisla/assets/js/custom.js"

        ];
        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
        });
    },
    
    methods: {
    }
}
</script>



<style scoped>
  /* General CSS Files */
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

 /* CSS Libraries */
    @import '../../../public/stisla/assets/bootstrap-social/bootstrap-social.css';
    @import '../../../public/stisla/assets/css/style.css';
    @import '../../../public/stisla/assets/css/components.css';

</style>