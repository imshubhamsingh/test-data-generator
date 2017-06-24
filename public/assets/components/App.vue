<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <name-generator :trigger="trigger" @nameWasGenerated="data=$event"></name-generator>
            <div class="row col s12">
                <button class="waves-effect waves-light btn col s12 getdata disabled" @click="getSampleData">Get data</button>
            </div>
            <div class="row">
                <div v-if="data" class="card-content white-text col s12">
                    <div class="card-title name" v-for="name in data">
                        {{name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var navBar = require("./Shared/navBar.vue");
    var nameGenerstor = require("./DataType/HumanData/names.vue");
    console.log("In App.vue");
    export default{
        data:function(){
            return {
                data: [],
                trigger:false
            }
        },
        components:{
            navBar:navBar,
            nameGenerator: nameGenerstor
        },
        methods:{
            getSampleData: function () {
                this.trigger = !this.trigger;
            }
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
</style>
