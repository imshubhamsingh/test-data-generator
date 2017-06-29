<template>

</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In email.vue");
    export default{
        data() {
            return {
                company: []
            }
        },
        props:{
            number:{
                type: Number,
            }
        },
        created() {
            const vm = this;
            dataBus.$on('calltoGenerateData',function () {
                console.log(`/api/companies?n=${vm.number}`);
                axios.get(`/api/companies?n=${vm.number}`).then(response => {
                    // console.log("company data");
                    console.log(response.data);
                    vm.company = [];
                    vm.company = response.data;
                    dataBus.dataCollector({
                        type:"company",
                        data: vm.company
                    });
                }).catch(e => {
                    console.log("Error: ");
                    console.log(e);
                });
            })
        }
    }

</script>

<style>

</style>
