<template>
    <div>
        <div class="container">
            <!--<div class="fixed-action-btn toolbar">-->
                <!--<a class="btn-floating btn-large red">-->
                    <!--<i class="large material-icons">mode_edit</i>-->
                <!--</a>-->
                <!--<ul>-->
                    <!--<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">insert_chart</i></a></li>-->
                    <!--<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">format_quote</i></a></li>-->
                    <!--<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">publish</i></a></li>-->
                    <!--<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">attach_file</i></a></li>-->
                <!--</ul>-->
            <!--</div>-->
            <div class="fixed-action-btn toolbar">
                <a class="btn-floating btn-large red">
                    <i class="fa fa-plus large" aria-hidden="true"></i>
                </a>
                <ul>
                    <li class="waves-effect">
                        <div class="input-field container">
                            <input id="columnTitle" type="text" class="validate" placeholder="" v-model="columnTitle">
                            <label for="columnTitle">Column Title</label>
                        </div>
                    </li>
                    <li class="waves-effect">
                        <div class="input-field container">
                            <select id="options">
                                <optgroup label="Human Data">
                                    <option value="name">Names</option>
                                    <option value="2">Option 2</option>
                                </optgroup>
                                <optgroup label="team 2">
                                    <option value="3">Option 3</option>
                                    <option value="4">Option 4</option>
                                </optgroup>
                            </select>
                            <label>Data Type</label>
                        </div>
                    </li>
                    <li class="waves-effect waves-light">
                        <a @click="addColumn">Add Column</a>
                    </li>
                </ul>
            </div>


            <ul class="collapsible" data-collapsible="accordion">
                <li v-for="dataType in dataTypes">
                    <div class="collapsible-header">{{dataType}}</div>
                    <div class="collapsible-body"><name-generator :dataReady="dataGenCall" @nameGenerated="dataGen=$event"></name-generator></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    var nameGenerator = require("./HumanData/names.vue");
    console.log("In dataType.vue");
    export default{
        data:function(){
            return {
                dataGen: [],
                dataGenCall: this.trigger,
                dataTypes: ["Name"],
                columnTitle:"",
                dataTypeChosen:""
            }
        },
        mounted:function () {
            $('#options').material_select();
                $('#options').on('change', function(event){
                    console.log("hi");
                    //choice = event.currentTarget.value;
                });
        },
        props:{
            trigger:{
                type: Boolean
            }
        },
        components:{
            nameGenerator: nameGenerator
        },
        watch:{
            dataGen: function () {
                if(this.dataGen[0] === true){
                    this.$emit('dataGenerated',this.dataGen[1]);
                }
            },
            trigger: function () {
                this.dataGenCall = !this.dataGenCall;
            }
        },
        methods:{
            addColumn: function () {
                this.dataTypes.push(this.columnTitle);
                this.columnTitle ="";
            }
        }

    }
</script>

<style lang="scss" scoped>
    label{
        color:#fff !important;
    }

</style>
