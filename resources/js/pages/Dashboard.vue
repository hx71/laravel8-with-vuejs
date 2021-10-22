<template>
    <section class="section">
        <div class="section-header">
            <h1>Default Layout</h1>
            <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div class="breadcrumb-item"><a href="#">Layout</a></div>
            <div class="breadcrumb-item">Default Layout</div>
            </div>
        </div>

        <div class="section-body">
            <h2 class="section-title">This is Example Page</h2>
            <p class="section-lead">This page is just an example for you to create your own page.</p>
            <div class="card">
            <div class="card-header">
                <h4>Dashboard</h4>
            </div>
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,  </p>
            </div>
            <div class="card-footer bg-whitesmoke">
                This is card footer
            </div>
            </div>
        </div>
    </section>
</template>


<script>
// import LayoutDefault from '../layouts/default';
export default {
    // name:"Dasboard",
    // components: {
    //     LayoutDefault
    // },
    data () {
        return {}
    },
    created() {
        var scripts = [
            // "https://code.jquery.com/jquery-3.3.1.min.js",
            // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
            // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
            // "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
            // "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
            "../../../../stisla/assets/js/stisla.js",
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
    /* @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'); */
    /* @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css'); */

    /* @import '../../stisla/node_modules/bootstrap-social/bootstrap-social.css'; */
    @import '../../../public/stisla/assets/css/style.css';
    @import '../../../public/stisla/assets/css/components.css';
</style>