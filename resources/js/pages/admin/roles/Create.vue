<template>
<section class="section">
    <div class="section-header">
        <h1>Create</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Roles</a></div>
            <div class="breadcrumb-item"><a href="#">Form</a></div>
            <div class="breadcrumb-item">Create</div>
        </div>
    </div>

    <div class="section-body">

        <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                    <form method="POST" @submit.prevent="postCreate">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Role</label>
                                <input type="text" class="form-control" v-model="roles.role">
                            </div>
                            <div class="form-group">
                                <label>Role Name</label>
                                <div class="input-group">
                                    <input type="text" class="form-control phone-number" v-model="roles.role_name">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <router-link to="/users" class="btn btn-danger">
                                Cancel
                            </router-link>
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
} from "vuex";
export default {
    data() {
        return {
            // dataUser:{},
            current: 1,
            roles: {}
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
        ...mapActions("roles", ["createRoles"]),

        postCreate() {
            this.createRoles(this.roles).then((res) => {
                if (res.message == "success") {
                    iziToast.success({
                        title: 'Successfull.',
                        message: 'Save it data!',
                        position: 'topRight',
                        timeout: 1500
                    });
                    this.$router.push({
                        name: "roles"
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
