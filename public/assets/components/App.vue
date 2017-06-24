<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="row">
                <div class="col s6 input-field">
                    <select>
                        <option disabled value="" selected>Choose your option</option>
                        <option value="fullNames">Full Names</option>
                        <option value="maleNames">Male Names</option>
                        <option value="femaleNames">Female Names</option>
                        <option value="surnames">Surname</option>
                    </select>
                    <label>Select Name Type</label>
                </div>
                <div class="input-field col s6">
                    <input type="number" v-model="number" min="0">
                    <label>List size</label>
                </div>
            </div>
            <div class="row col s12">
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
    var choice ="";
    $(document).ready(function() {
        $('select').material_select();
        $('select').on('change', function(event) {
            choice = event.currentTarget.value;
            console.log(choice);
        });
    });
    var axios = require("axios");
    var navBar = require("./Shared/navBar.vue");
    console.log("In App.vue");
    export default{
        data:function(){
            return {
                data: "",
                number: 0
            }
        },
        components:{
            navBar:navBar
        },
        methods:{
            getSampleData: function () {
                console.log("Name Type: "+this.selected+" Number: "+this.number );
                var vm = this;
                console.log("/api/names/"+choice+"/?n="+vm.number);
                axios.get("/api/names/"+choice+"/?n="+vm.number).then(function (response) {
                    console.log(response);
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
