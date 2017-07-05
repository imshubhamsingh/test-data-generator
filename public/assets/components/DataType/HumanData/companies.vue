<template>

</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In company.vue");
    export default{
        data() {
            return {
                company: [],
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
            console.log("companyGenerator Created");
            dataBus.$emit("fieldFilled");
            dataBus.$on('calltoGenerateData',function () {
                if(!vm.destroyed){
                    //console.log(`/api/companies?n=${vm.number}`);
                    axios.get(`/api/companies?n=${vm.number}`).then(response => {
                        // console.log("company data");
                        // console.log(response.data);
                        vm.company = [];
                        vm.company = response.data;
                        dataBus.dataCollector({
                            type:"company",
                            data: vm.company,
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
            console.log("companyGenerator Destroyed");
            dataBus.$emit("fieldDestroyed");
            vm.destroyed = true;
        }
    }

</script>

<style>

</style>
