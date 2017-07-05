<template>
    <div>
        <div class="container section">
            <div class="row">
                <div class="col s12 m12 l12 input-field">
                    <select :id="id" v-model="choice">
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
                    <label :for="id">Select Date Type</label>
                </div>
                <div class="col s12 m12 l12">
                    <div class="input-field col s12 m6">
                        <input type="text" v-model="minDate" :id="id+'from'" class="datepicker">
                        <label :for="id+'from'"  >From</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <input type="text" v-model="maxDate" :id="id+'to'" class="datepicker">
                        <label :for="id+'to'" >To</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In date.vue");
    export default{
        data() {
            return {
                date: [],
                choice: "",
                minDate:"",
                maxDate:"",
                realMinDate:"",
                realMaxDate:"",
                changed: false,
                destroyed: false
            }
        },
        mounted() {
            Date.prototype.isValid = function () {
                return this.getTime() === this.getTime();
            };
            var vm = this;
            $(`#${vm.id}from`).pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year
                formatSubmit: 'mm/dd/yyyy',
                onClose() {
                  //  console.log('from');
                  //  console.log(vm.realMindate);
                    vm.realMinDate = new Date($(`#${vm.id}from`).val());
                    if(!vm.realMinDate.isValid()){
                        vm.minDate="";
                    }else{
                        vm.minDate = vm.realMinDate.toString().split(' ').slice(2,3).join(' ')+" "+vm.realMinDate.toString().split(' ').slice(1,2).join(' ')+", "+vm.realMinDate.toString().split(' ').slice(3,4).join(' ');
                    }
                }
            });
            $(`#${vm.id}to`).pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year
                formatSubmit: 'mm/dd/yyyy',
                onClose() {
                  //  console.log('to');
                    vm.realMaxDate = new Date($(`#${vm.id}to`).val());
                   // console.log(vm.realMaxDate);
                    if(!vm.realMaxDate.isValid()){
                        vm.maxDate=""
                    }else{
                        vm.maxDate = vm.realMaxDate.toString().split(' ').slice(2,3).join(' ')+" "+vm.realMaxDate.toString().split(' ').slice(1,2).join(' ')+", "+vm.realMaxDate.toString().split(' ').slice(3,4).join(' ');
                    }
                }
            });
            var suspend = false;
            $(`#${vm.id}`).material_select();
            $(`#${vm.id}`).on('change', function() {
                if (!suspend) {
                    suspend = true;
                    var event = new CustomEvent('change', {
                        detail: 'change',
                        bubbles: true
                    });
                    $(this).get(0).dispatchEvent(event);
                } else {
                    suspend = false;
                }
            });
        },
        props:{
            number:{
                type: Number,
            },
            id:{
                type:String
            },
            fieldName:{
                type:String
            }
        },
        updated(){
            const vm = this;
            if(vm.changed === false){
                if(vm.choice!=="" && vm.minDate!=="" && vm.maxDate !==""){
                    dataBus.$emit("fieldFilled");
                    vm.changed = true;
                }
            }
        },
        created() {
            const vm = this;
            console.log("dateGenerator Created");
            dataBus.$on('calltoGenerateData',function () {
                //console.log("/api/names/"+choice+"/?n="+vm.number);
              //  console.log(`/api/dates?minYear=${vm.realMinDate.getFullYear()}&maxYear=${vm.realMaxDate.getFullYear()}&format=${vm.choice}&n=${vm.number}`);
                if(!vm.destroyed){
                    axios.get(`/api/dates?realMinDate=${vm.realMinDate}&realMaxDate=${vm.realMaxDate}&format=${vm.choice}&n=${vm.number}`).then(response => {
                        // console.log(response.data.dateList);
                        vm.date = [];
                        vm.date = response.data.dateList;
                        dataBus.dataCollector({
                            type:"date",
                            data: vm.date,
                            fieldName: vm.fieldName
                        });
                    }).catch(e => {
                        console.log("Error: ");
                        console.log(e);
                    });
                }
            })
        },
        destroyed(){
            var vm = this;
            console.log("dateGenerator Destroyed");
            if(vm.choice==="" || vm.minDate==="" || vm.maxDate ===""){
                dataBus.$emit("fieldDestroyedEmpty");
            }else{
                dataBus.$emit("fieldDestroyed");
            }
            vm.destroyed = true;
        }
    }

</script>

<style>
    .picker__box {
        margin-top: 10% !important;
    }
</style>
