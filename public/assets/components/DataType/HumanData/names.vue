<template>
    <div>
        <div class="container section">
            <div class="row">
                <div class="col s12 input-field">
                    <select id="nameOption" v-model="choice">
                        <option disabled value="" selected>Choose your option</option>
                        <option value="fullNames">Full Names</option>
                        <option value="maleNames">Male Names</option>
                        <option value="femaleNames">Female Names</option>
                        <option value="surnames">Surname</option>
                        <option value="middleNames">With middle name</option>
                    </select>
                    <label>Select Name Type</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {dataBus} from "../../../js/app";
    import axios from "axios";
    console.log("In name.vue");
    export default{
        data() {
            return {
                names: [],
                choice: ""
            }
        },
        mounted() {
            var suspend = false;
            $('#nameOption').material_select();
            $('#nameOption').on('change', function() {
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
                type: Number
            }
        },
        created() {
          //  console.log(dataBus);
            const vm = this;
            dataBus.$on('calltoGenerateData',function () {
                console.log(vm.number);                //console.log("/api/names/"+choice+"/?n="+vm.number);
                console.log(`/api/names/${vm.choice}/?n=${vm.number}`);
                axios.get(`/api/names/${vm.choice}/?n=${vm.number}`).then(response => {
                    console.log(response);
                    vm.names = [];
                    vm.names = response.data;
                    dataBus.dataCollector({
                        type: "name",
                        data: vm.names
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
