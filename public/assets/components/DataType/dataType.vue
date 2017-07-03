<template>
    <div>
        <div class="container">
            <div class="">
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large waves-effect waves-light red large" href="#modal1" style="font-size: 35px;">+</a>
                </div>

                <!-- Modal Structure -->
                <div id="modal1" class="modal bottom-sheet">
                    <div class="modal-content">
                        <h4>Column Details</h4>
                        <div>
                            <div class="input-field">
                                <input id="columnTitle" type="text" v-model="columnName" required aria-required="true" autocomplete="off">
                                <label for="columnTitle" >Column Title</label>
                            </div>
                            <div class="row" style="margin-bottom: -21px;">
                                <div class="col s12">
                                    <ul class="tabs" id="optionList">
                                        <li class="tab col s3"><a href="#humanData" class="active">Human Data</a></li>
                                        <li class="tab col s3"><a href="#geoData">Geo Data</a></li>
                                        <li class="tab col s3"><a href="#creditCardData">Credit Card Data</a></li>
                                        <li class="tab col s3"><a href="#text">Text</a></li>
                                        <li class="indicator" style="background-color:#fafafa !important"></li>
                                    </ul>
                                </div>
                                <div id="humanData" class="col s12">
                                    <div class="row">
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="nameGenerator" id="names" v-model="columnType"/>
                                            <label for="names" class="black-text">Names</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="dateGenerator" id="date" v-model="columnType" />
                                            <label for="date" class="black-text">Date</label>
                                        </p >
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="emailGenerator" id="email" v-model="columnType" />
                                            <label for="email" class="black-text">Email</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="phoneGenerator" id="phone" v-model="columnType" />
                                            <label for="phone" class="black-text">Phone</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="companyGenerator" id="company" v-model="columnType" />
                                            <label for="company" class="black-text">Company</label>
                                        </p>
                                    </div>
                                </div>
                                <div id="geoData" class="col s12">
                                    <div class="row">
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="countryGenerator" id="country" v-model="columnType"/>
                                            <label for="country" class="black-text">Country</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="regionGenerator" id="region" v-model="columnType" />
                                            <label for="region" class="black-text">Region</label>
                                        </p >
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="cityGenerator" id="city" v-model="columnType" />
                                            <label for="city" class="black-text">City</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="zipGenerator" id="zip" v-model="columnType" />
                                            <label for="zip" class="black-text">Zip</label>
                                        </p>
                                        <p class="col s3 m2 l1">
                                            <input type="radio" value="latLongGenerator" id="latLong" v-model="columnType" />
                                            <label for="latLong" class="black-text">Latitude/Longitude</label>
                                        </p>

                                    </div>
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
                        <div class="collapsible-header"><a @click="remove($index)" class="deleteIcon"><i class="fa fa-trash" aria-hidden="true"></i></a> {{dataType.columnName}}</div>
                        <!--<div class="collapsible-body"><name-generator :dataReady="dataGenCall" @nameGenerated="dataGen+=$event"></name-generator></div>-->
                        <div class="collapsible-body"><component :is="dataType.columnType" :number="parseInt(number)" :dataCollector="dataCollector" :id="dataType.columnType+parseInt(index)"></component></div>
                    </li>
                </ul>
            </div>



        </div>
    </div>
</template>

<script>
    //Human data
    import nameGenerator from "./HumanData/names.vue";
    import dateGenerator from "./HumanData/dates.vue";
    import companyGenerator from "./HumanData/companies.vue";
    //Geo Data
    import countryGenerator from "./GeoData/countries.vue"

    console.log("In dataType.vue");
    export default{
        data() {
            return {
                dataTypes: [
                    {
                        columnName:"Name",
                        columnType: "nameGenerator"
                    }
                ],
                columnName:"",
                columnType:""
            }
        },
        mounted() {
            $('.modal').modal();
            $('ul#optionList').tabs();
            $('#optionList').tabs('select_tab', 'tab_id');
        },
        props:{
            number:{
                type: Number,
            }
        },
        components:{
            nameGenerator,
            dateGenerator,
            companyGenerator,
            countryGenerator
        },
        methods:{
            remove(index) {
                this.dataTypes.splice(index,1);
            },
            addColumn() {
                if(this.columnName==="" || this.columnType ===""){
                    if(this.columnName===""){
                        Materialize.toast('Please enter the column title', 1000)
                    }else{
                        Materialize.toast('Please choose the column data type', 1000)
                    }

                }else{
                    this.dataTypes.push({
                        columnName:this.columnName,
                        columnType:this.columnType
                    });
                    $('#modal1').modal('close');
                }
            },
        }

    }
</script>

<style lang="scss" scoped>
    label{
    color:#949494;
    }

    .modal{
        &.bottom-sheet{
            max-height: 70% !important;
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
    [type=radio]:checked {
        & + label:after{
            background-color: #343142 !important;
            border: 2px solid #343142 !important;
        }
    }
    .tab{
        background-color: #fafafa !important;
        .tabs & a{
            color:rgba(105, 105, 105, 0.7) !important;
        }
        .tabs & a.active, .tabs & a:hover{
            color:#000 !important;
        }
    }
    .tabs{
        background-color: #fafafa !important;
    }
    .deleteIcon{
        transition: all 0.5s;
        &:hover{
            color: #f44336;
        }
    }
</style>
