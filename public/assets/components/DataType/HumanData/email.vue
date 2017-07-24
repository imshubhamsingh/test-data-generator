<template>
    <div>
        <div class="container section">
            <div class="row">
                <p class="col s6">
                    <input type="checkbox" value="lat" id="lat" v-model="choice"/>
                    <label for="lat" class="black-text">Latitude</label>
                </p>
                <p class="col s3 m2 l1">
                    <input type="checkbox" value="lng" id="lng" v-model="choice" />
                    <label for="lng" class="black-text">Longitude</label>
                </p >
            </div>
        </div>
    </div>
</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In email.vue");
    export default{
        data() {
            return {
                data: [],
                choice: [],
                changed: false,
                destroyed: false
            }
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
                if(vm.choice!==""){
                    dataBus.$emit("fieldFilled");
                    vm.changed = true;
                }
            }
        },
        created() {
            const vm = this;
            console.log("lat&lng Created");
            dataBus.$on('calltoGenerateData',function () {
                if(!vm.destroyed){
                    if(vm.choice.length ===1){
                        axios.get(`/api/latlng/${vm.choice}?n=${vm.number}`).then(response => {
                            vm.data = [];
                            vm.data = response.data;
                            dataBus.dataCollector({
                                type:"email",
                                data: vm.data,
                                fieldName: vm.fieldName
                            });
                        }).catch(e => {
                            console.log("Error: ");
                            console.log(e);
                        });
                    }else{
                        axios.get(`/api/latlng?n=${vm.number}`).then(response => {
                            vm.data = [];
                            vm.data = response.data;
                            dataBus.dataCollector({
                                type:"lat&lng",
                                data: vm.data,
                                fieldName: vm.fieldName
                            });
                        }).catch(e => {
                            console.log("Error: ");
                            console.log(e);
                        });
                    }
                }
            })
        },
        destroyed(){
            var vm = this;
            console.log("lat&lng Destroyed");
            if(vm.choice.length ===0){
                dataBus.$emit("fieldDestroyedEmpty");
            }else{
                dataBus.$emit("fieldDestroyed");
            }
            vm.destroyed = true;
        }
    }

</script>

<style>

</style>
