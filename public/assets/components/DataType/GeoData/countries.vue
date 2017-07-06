<template>

</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In country.vue");
    export default{
        data() {
            return {
                country: [],
                destroyed: false
            }
        },
        props:{
            number:{
                type: Number,
            },
            fieldName:{
                type:String
            }
        },
        created() {
            const vm = this;
            console.log("countryGenerator Created");
            dataBus.$emit("fieldFilled");
            dataBus.$on('calltoGenerateData',function () {
                if(!vm.destroyed){
                    axios.get(`api/countries?n=${vm.number}`).then(response => {
                        vm.country = [];
                        vm.country = response.data;
                        dataBus.dataCollector({
                            type:"country",
                            data: vm.country,
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
            console.log("countryGenerator Destroyed");
            dataBus.$emit("fieldDestroyed");
            vm.destroyed = true;
        }
    }

</script>

<style>

</style>
