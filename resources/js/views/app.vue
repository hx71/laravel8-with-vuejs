<template>
    <div class="container" style="margin-top:50px">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Base Project Laravel - VueJs</div>

                    <div class="card-body">
                         {{message}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          message:'Hello World...'
      }
  }
};
</script>