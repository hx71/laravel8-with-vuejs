<template>
  <section class="section">
          <div class="section-header">
            <h1>Table</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div class="breadcrumb-item"><a href="#">Components</a></div>
              <div class="breadcrumb-item">Table</div>
            </div>
          </div>

          <div class="section-body">

            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <!-- <h4>Simple Table</h4> -->
                     <div class="card-header-form">
                     <button class="btn btn-primary btn-rounded btn-sm">
                            <span class="btn-label">
                                <i class="fa fa-plus"></i>
                            </span>
                            Add New
                        </button>

                             <router-link to="/users/create" class="btn btn-primary btn-rounded btn-sm">
                            <span class="btn-label">
                                <i class="fa fa-plus"></i>
                            </span>
                            Add New
                            </router-link>
                     </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-md">
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                        <tr v-for="(val, index) in dataUser" :key="val.id">
                          <!-- <td v-if="val.from">{{ index + val.from }}</td>
                          <td v-else>{{ index + 1 }}</td> -->
                          <td>{{ index == 0 ?  1 :  index + 1 }}</td>
                          <td>{{ val.name }}</td>
                          <td>{{ val.email }}</td>
                          <td>
                            <!-- <button type="button" class="btn btn-icon btn-round btn-warning btn-sm">
                              <i class="fa fa-pencil-alt"></i>
                            </button> -->

                            <router-link :to="{name: 'edit-user', params: { id: val.id }}" class="btn btn-icon btn-round btn-warning btn-sm">
                              <i class="fa fa-pencil-alt"></i>
                            </router-link>
                                
                                    <button type="button" class="btn btn-icon btn-round btn-danger btn-sm">
                                        <i class="fa fa-trash-alt"></i>
                                    </button>
                              <!-- <div class="btn-group" role="group">
                                  <router-link :to="{name: 'edit', params: { id: val.id }}" class="btn btn-primary">Edit
                                  </router-link>
                                  <button class="btn btn-danger" @click="deletePost(val.id)">Delete</button>
                              </div> -->
                          </td>
                      </tr>
                        <!-- <tr v-for="(role, index) in dataUser" :key="role.code">
                          <td v-if="roles.from">{{ index + roles.from }}</td>
                          <td v-else>{{ index + 1 }}</td>
                          <td>{{ role.code }}</td>
                          <td>{{ role.name }}</td>
                          <td class="text-center">
                              <router-link :to="{name: 'editRole', params: { id: role.code }}"
                                            class="btn btn-success btn-sm">
                                  <i class="fa fa-edit"></i>
                              </router-link>
                              <button class="btn btn-danger btn-sm" @click="deletePost(role.code)">
                                  <i class="fa fa-trash"></i>
                              </button>

                          </td>
                      </tr> -->
                      </table>
                    </div>
                  </div>
                  <!-- <div class="card-footer text-right">
                    <nav class="d-inline-block">
                      <ul class="pagination mb-0">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                        </li>
                      </ul>
                    </nav>
                  </div> -->
                </div>
              </div> 
            </div>  
          </div>
        </section>
</template>



<script>
import { mapActions, mapState } from "vuex";
export default {
    data () {
        return {
          dataUser:{},
          current: 1,
        }
    },
    created() {
      this.getData();
      var scripts = [
          // "https://code.jquery.com/jquery-3.3.1.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
          // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
          "../../../../stisla/assets/js/stisla.js",
          "../../../../stisla/node_modules/jquery-ui-dist/jquery-ui.min.js",
          "../../../../stisla/assets/js/scripts.js",
          "../../../../stisla/assets/js/custom.js",
          "../../../../stisla/assets/js/page/components-table.js"
      ];
      scripts.forEach(script => {
          let tag = document.createElement("script");
          tag.setAttribute("src", script);
          document.head.appendChild(tag);
        });
    },
    methods: {
    ...mapActions("user_setting", ["getUser"]),

     getData() {
      let params = {
        page: this.current,
        // search: this.search,
      };
      this.getUser(params).then((res) => {
        // this.isLoading = false;
        this.dataUser = res
      });
      // this.getCodePremiumRateById(params.id);
    },

    }
}
</script>



<style scoped>
    @import '../../../public/stisla/assets/css/style.css';
    @import '../../../public/stisla/assets/css/components.css';
</style>