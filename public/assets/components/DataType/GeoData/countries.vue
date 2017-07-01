<template>

</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In country.vue");
    export default{
        data() {
            return {
                country: []
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
                axios.get(`api/countries?n=${vm.number}`).then(response => {
                    // console.log("company data");
                    console.log(response.data);
                    vm.country = [];
                    vm.country = response.data;
                    dataBus.dataCollector({
                        type:"country",
                        data: vm.country
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
