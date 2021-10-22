<template>
  <section class="section">
          <div class="section-header">
            <h1>Edit</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Edit</a></div>
              <div class="breadcrumb-item"><a href="#">Components</a></div>
              <div class="breadcrumb-item">Table</div>
            </div>
          </div>

          <div class="section-body">

           <h1>Edit</h1>
          </div>
        </section>
</template>



<script>
// import { mapActions, mapState } from "vuex";
export default {
    data () {
        return {
          // dataUser:{},
          current: 1,
        }
    },
    created() {
      // this.getData();
      var scripts = [
          // "https://code.jquery.com/jquery-3.3.1.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
          // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
          "../../../../../../stisla/assets/js/stisla.js",
          "../../../../../../stisla/node_modules/jquery-ui-dist/jquery-ui.min.js",
          "../../../../../../stisla/assets/js/scripts.js",
          "../../../../../../stisla/assets/js/custom.js",
          "../../../../../../stisla/assets/js/page/components-table.js"
      ];
      scripts.forEach(script => {
          let tag = document.createElement("script");
          tag.setAttribute("src", script);
          document.head.appendChild(tag);
        });
    },
    methods: {
    // ...mapActions("user_setting", ["getUser"]),

    //  getData() {
    //   let params = {
    //     page: this.current,
    //     // search: this.search,
    //   };
    //   this.getUser(params).then((res) => {
    //     // this.isLoading = false;
    //     this.dataUser = res
    //   });
    //   // this.getCodePremiumRateById(params.id);
    // },

    }
}
</script>



<style scoped>
    @import '../../../../../public/stisla/assets/css/style.css';
    @import '../../../../../public/stisla/assets/css/components.css';
</style>
