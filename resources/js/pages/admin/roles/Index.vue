<template>
<section class="section">
    <div class="section-header">
        <h1>Roles</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Roles</a></div>
            <div class="breadcrumb-item"><a href="#">Table</a></div>
            <div class="breadcrumb-item">Data</div>
        </div>
    </div>

    <div class="section-body">

        <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-form">
                            <router-link to="/roles/create" class="btn btn-primary btn-rounded btn-sm">
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
                                    <th>Role</th>
                                    <th>Role Name</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="(val, index) in dataRoles" :key="val.id">
                                    <td>{{ index == 0 ?  1 :  index + 1 }}</td>
                                    <td>{{ val.role }}</td>
                                    <td>{{ val.role_name }}</td>
                                    <td>
                                        <a v-bind:href="'roles/'+val.id+'/edit'" class="btn btn-icon btn-round btn-warning btn-sm">
                                            <i class="fa fa-pencil-alt"></i>
                                        </a>
                                        <button type="button" class="btn btn-icon btn-round btn-danger btn-sm" @click="deleteRoles(val.id)">
                                            <i class="fa fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
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
            dataRoles: {},
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
        ...mapActions("roles", ["getRoles", "removeRoles"]),

        getData() {
            let params = {
                page: this.current,
            };
            this.getRoles(params).then((res) => {
                this.dataRoles = res
            });
        },

        deleteRoles(id) {
            console.log('delete', id)
            swal({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to delete it?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        this.removeRoles(id).then((res) => {
                            console.log('loggg -->', res)
                            if (res.message == "success") {
                                this.getData();
                                iziToast.success({
                                    title: 'Successfull.',
                                    message: 'Save it data!',
                                    position: 'topRight',
                                    timeout: 1500
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
                });
        },

    }
}
</script>

<style scoped>
@import '../../../../../public/stisla/assets/css/style.css';
@import '../../../../../public/stisla/assets/css/components.css';
@import '../../../../../public/stisla/node_modules/izitoast/dist/css/iziToast.min.css';
</style>
