<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="row">
                <div class="input-field col s12 m6 l6">
                    <i class="fa fa-table prefix" style="margin-top: 10px;color:#A89E9E" aria-hidden="true"></i>
                    <input id="last_name" type="text" class="validate" autocomplete="off">
                    <label for="last_name">Enter Data set name</label>
                </div>
                <div class="input-field col s12 m6 l6">
                    <input type="number" id="listSize" v-model="number" min="0" max="500">
                    <label for="listSize">List size</label>
                </div>
            </div>

            <data-type :number="parseInt(number)"></data-type>
            <div class="row col s12">
                <button class="waves-effect waves-light btn col s12 getdata" @click="getSampleData" :class="{disabled:!((fieldFilled===fieldPresent)&&(fieldPresent !==0))}">Get data</button>
            </div>
            <div class="row">
                <div class="card-content black-text col s12" v-for="dataset in data">
                    <p class="flow-text" style="margin-bottom: 0px !important;">{{dataset.fieldName}}</p>
                    {{dataset.data}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from "./Shared/navBar.vue";
    import dataType from "./DataType/dataType.vue";
    import {dataBus} from "../js/app";
    console.log("In App.vue");
    export default{
        data() {
            return {
                data: [],
                number:0,
                fieldFilled:0,
                fieldPresent:0,
            }
        },
        components:{
            navBar,
            dataType
        },
        methods:{
            getSampleData() {
                dataBus.data = [];
                dataBus.$emit('calltoGenerateData');
            }
        },
        created() {
            const vm = this;
            dataBus.$on("fieldFilled",()=>{
                vm.fieldFilled++;
            });
            dataBus.$on("fieldDestroyed",()=>{
                console.log("fieldDestroyed");
                vm.fieldFilled--;
                vm.fieldPresent--;
            });
            dataBus.$on("fieldDestroyedEmpty",()=>{
                console.log("fieldDestroyedEmpty");
                vm.fieldPresent--;
            });
            dataBus.$on("fieldGenerated",()=>{
                vm.fieldPresent++;
            });
            dataBus.$on('dataGenerated',(data) => {
                vm.data = [];
                vm.data = data;
                //console.log("new data");
                //console.log(vm.data);
            });
        }
    }
</script>

<style lang="scss" scoped>
    .name{
        color:#343142 !important;
    }
    .btn{
        background-color: #393d61 !important;
        :hover{
            background-color: #5c618e !important;
        }
        &.disabled{
            background-color: #dfdfdf !important;
        }
    }

    %colour {
        color:#302953;
    }
    input[type=text]:focus:not([readonly]),input[type=number]:focus:not([readonly]){
        & + label{
            @extend %colour ;
        }
        border-bottom: 1px solid #302953;
        box-shadow: 0 1px 0 0 #302953;
        color:#302953;
    }
    input[type=text]{
        &.valid{
            border-bottom: 1px solid #9e9e9e !important;
            box-shadow: 0 1px 0 0 #9e9e9e !important;
            color: #302953 !important;
        }
    }


</style>
