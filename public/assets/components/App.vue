<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="row">
                <button class="waves-effect waves-light btn col s12" @click="getSampleData">Get data</button>
            </div>
            <div class="row">
                <div v-if="data" class="card-content white-text col s12">
                    <div class="card-title name" v-for="name in data">
                        {{name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var axios = require("axios");
    var navBar = require("./Shared/navBar.vue");
    console.log("In App.vue");
    export default{
        data:function(){
            return{
                data: '',
            }
        },
        components:{
            navBar:navBar
        },
        methods:{
            getSampleData: function () {
                var vm = this;
                axios.get("https://node-data-generator.herokuapp.com/api/names/fullNames?n=20").then(function (response) {
                    // JSON responses are automatically parsed.
                    vm.data = response.data;
                }).catch(function (e) {
                    console.log(e);
                });
            }
        }
    }
</script>

<style>
.name{
 color:#343142 !important;
}
</style>
