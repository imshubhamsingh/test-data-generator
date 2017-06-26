<template>
    <div>
        <div class="container">
            <div class="">
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large waves-effect waves-light red large" href="#modal1"><i class="fa fa-plus" aria-hidden="true"></i></a>
                </div>

                <!-- Modal Structure -->
                <div id="modal1" class="modal bottom-sheet">
                    <div class="modal-content">
                        <h4>Column Details</h4>
                        <div  method="post">
                            <div class="input-field">
                                <input id="columnTitle" type="text" v-model="columnName" required aria-required="true">
                                <label for="columnTitle">Column Title</label>
                            </div>
                            <div>
                                <h6>Human Data</h6>
                                <div class="row">
                                    <p class="col s3 m2 l1">
                                        <input type="radio" value="name" id="names" v-model="columnType"/>
                                        <label for="names">Names</label>
                                    </p>
                                    <p class="col s3 m2 l1">
                                        <input type="radio" value="date" id="date" v-model="columnType" />
                                        <label for="date">Date</label>
                                    </p >
                                    <p class="col s3 m2 l1">
                                        <input type="radio" value="email" id="email" v-model="columnType" />
                                        <label for="email">Email</label>
                                    </p>
                                    <p class="col s3 m2 l1">
                                        <input type="radio" value="phone" id="phone" v-model="columnType" />
                                        <label for="phone">Phone</label>
                                    </p>
                                    <p class="col s3 m2 l1">
                                        <input type="radio" value="company" id="company" v-model="columnType" />
                                        <label for="company">Company</label>
                                    </p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="modal-action waves-effect waves-green btn-flat"  @click="addColumn">Add Column</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Trigger -->
            <div v-if="dataTypes.length>0">
                <ul class="collapsible" data-collapsible="accordion">
                    <li v-for="(dataType, index) in dataTypes">
                        <div class="collapsible-header"><a @click="remove($index)"><i class="fa fa-trash" aria-hidden="true"></i></a> {{dataType.columnName}}</div>
                        <div class="collapsible-body"><name-generator :dataReady="dataGenCall" @nameGenerated="dataGen=$event"></name-generator></div>
                    </li>
                </ul>
            </div>



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
                dataTypes: [
                    {
                        columnName:"Name",
                        columnType: "name"
                    }
                    ],
                columnName:"",
                columnType:"name"
            }
        },
        mounted:function () {
            $('.modal').modal();
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
        computed:{

        },
        methods:{
            remove: function (index) {
                this.dataTypes.splice(index,1);
            },
            addColumn: function () {
                if(this.columnName!==""){
                    this.dataTypes.push({
                        columnName:this.columnName,
                        columnType:this.columnType
                    });
                    $('#modal1').modal('close');
                }else{
                    Materialize.toast('Please enter the column title', 1000)
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    label{
    color:#000;
    }
    .modal{
        &.bottom-sheet{
            max-height: 60% !important;
        }
    }
    .collapsible-body{
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        background-color: #f1f1f1;
    }
    [type=radio]:checked+label, [type=radio]:not(:checked)+label{
        padding-left: 23px !important;
    }
    %colour{
        color: #000;
    }
    input[type=text]:focus:not([readonly]){
        & + label{
            @extend %colour ;
        }
        border-bottom: 1px solid #000;
        box-shadow: 0 1px 0 0 #000;
        color:#000;
    }

</style>
