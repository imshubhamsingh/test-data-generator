<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="input-field col s6">
                <i class="fa fa-table prefix" style="margin-top: 10px;color:#A89E9E" aria-hidden="true"></i>
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Enter Data set name</label>
            </div>
            <data-type :trigger="trigger" @dataGenerated="data=$event"></data-type>
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
    var dataType = require("./DataType/dataType.vue");
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
            dataType: dataType
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

    %colour {
        color:#302953;
    }
    input[type=text]:focus:not([readonly]){
        & + label{
            @extend %colour ;
        }
        border-bottom: 1px solid #302953;
        box-shadow: 0 1px 0 0 #302953;
        color:#302953;
    }


</style>
