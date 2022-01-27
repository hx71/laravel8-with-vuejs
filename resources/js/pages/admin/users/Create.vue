<template>
<section class="section">
    <div class="section-header">
        <h1>Create</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Users</a></div>
            <div class="breadcrumb-item"><a href="#">Form</a></div>
            <div class="breadcrumb-item">Create</div>
        </div>
    </div>

    <div class="section-body">
        <!-- <h2 class="section-title">Advanced Forms</h2> -->
        <!-- <p class="section-lead">We provide advanced input fields, such as date picker, color picker, and so on.</p> -->

        <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                    <!-- <div class="card-header">
                        <h4>Input Text</h4>
                    </div> -->
                    <form method="POST" @submit.prevent="postCreate">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" v-model="user.name">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <div class="input-group">
                                    <input type="text" class="form-control phone-number" v-model="user.email">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" v-model="user.password">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <!-- <router-link class="nav-link" :to="{name: 'dashboard'} ">
                         
                       </router-link> -->

                            <button type="submit" class="btn btn-danger">
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
export default {
    data() {
        return {
            // dataUser:{},
            current: 1,
            user: {}
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
            "../../../../../../stisla/node_modules/sweetalert/dist/sweetalert.min.js",
            "../../../../../../stisla/node_modules/izitoast/dist/js/iziToast.min.js",
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
        ...mapActions("user_setting", ["createUser"]),

        postCreate() {
            this.createUser(this.user).then((res) => {
                if (res.message == "success") {
                    iziToast.success({
                        title: 'Successfull.',
                        message: 'Save it data!',
                        position: 'topRight',
                        timeout: 1500
                    });
                    this.$router.push({
                        name: "users"
                    });
                } else {
                    iziToast.error({
                        title: 'Failed,',
                        message: 'Save it data!',
                        position: 'topRight',
                        timeout: 1500
                    });
                }
            });
        }

    }
}
</script>

<style scoped>
@import '../../../../../public/stisla/assets/css/style.css';
@import '../../../../../public/stisla/assets/css/components.css';
@import '../../../../../public/stisla/node_modules/izitoast/dist/css/iziToast.min.css';
</style>
