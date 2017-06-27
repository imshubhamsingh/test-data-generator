<template>
    <div>
        <div class="container section">
            <div class="row">
                <div class="col s12 m12 l12 input-field">
                    <select id="dateOption">
                        <option disabled value="" selected>Choose your option</option>
                        <option value="m d,y">Jun 10, 2017</option>
                        <option value="M ds, y">June 10th 2017</option>
                        <option value="M d y">June 10 2017</option>
                        <option value="D, m d">Sat, Jun 10</option>
                        <option value="D, m ds y">Sat, Jun 10th, 2017</option>
                        <option value="m/d/y">06/10/2017</option>
                        <option value="d/m/y">16/04/2017</option>
                        <option value="d-m-y">10-06-2017</option>
                        <option value="d.m.y">06-10-2017</option>
                    </select>
                    <label>Select Date Type</label>
                </div>
                <div class="col s12 m12 l12">
                    <div class="input-field col s12 m6">
                        <input type="date" v-model="minDate" class="datepicker">
                        <label>From</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <input type="date" v-model="maxDate" class="datepicker">
                        <label>To</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    var axios = require("axios");
    console.log("In name.vue");
    export default{
        data:function(){
            return {
                number: 10,
                date: [],
                choice: "",
                minDate:new Date(25-3-2010),
                maxDate:new Date(),
            }
        },
        mounted:function(){
            var vm = this;
            $(document).ready(function() {
                $('#dateOption').material_select();
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15 // Creates a dropdown of 15 years to control year
                });
                $('#dateOption').on('change', function(event) {
                    console.log(event.currentTarget.value);
                    vm.choice = event.currentTarget.value;
                    if( $(".getdata").hasClass("disabled")){
                        $(".getdata").removeClass("disabled")
                    }
                    //console.log(choice);
                });
                console.log("In date Option")
            });
        },
        props:{
            dataReady:{
                type:Boolean
            }
        },
        watch:{
            dataReady: function () {
                //console.log("Name Type: "+this.selected+" Number: "+this.number );
                var vm = this;
                //console.log("/api/names/"+choice+"/?n="+vm.number);
                console.log("/api/dates?minYear=1997&maxYear=2018&format="+vm.choice+"&n="+vm.number);
                axios.get("/api/dates?minYear="+vm.minDate.getFullYear()+"&maxYear="+vm.maxDate.getFullYear()+"&format="+vm.choice+"&n="+vm.number).then(function (response) {
                    console.log(response.data.dateList);
                    vm.date = [];
                    vm.date = response.data.dateList;
                    var data = [
                        true,
                        vm.date
                    ];
                    vm.$emit('nameGenerated',data);
                }).catch(function (e) {
                    console.log("Error: ");
                    console.log(e);
                });
            }
        }
    }
</script>

<style>

</style>
