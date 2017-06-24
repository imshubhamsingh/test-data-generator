<template>
    <div>
        <div class="container section">
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
        </div>
    </div>
</template>

<script>
    var choice ="";
    $(document).ready(function() {
        $('select').material_select();
        $('select').on('change', function(event) {
            choice = event.currentTarget.value;
            if( $(".getdata").hasClass("disabled")){
                $(".getdata").removeClass("disabled")
            }
            //console.log(choice);
        });
    });
    var axios = require("axios");
    console.log("In name.vue");
    export default{
        data:function(){
            return {
                number: 0,
                names: [],
            }
        },
        props:{
            trigger:{
                type:Boolean,
                default: false
            }
        },
        watch:{
            trigger: function () {
                console.log("Name Type: "+this.selected+" Number: "+this.number );
                var vm = this;
                //console.log("/api/names/"+choice+"/?n="+vm.number);
                axios.get("/api/names/"+choice+"/?n="+vm.number).then(function (response) {
                    vm.names = [];
                    vm.names = response.data;
                      vm.$emit('nameWasGenerated',vm.names);
                      this.trigger = false;
                }).catch(function (e) {
                    console.log(e);
                });
            }
        }
    }
</script>

<style>

</style>
