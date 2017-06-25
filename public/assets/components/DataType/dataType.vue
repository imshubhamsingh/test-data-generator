<template>
    <div>
        <div class="container">
            <ul class="collapsible" data-collapsible="accordion">
                <li>
                    <div class="collapsible-header">Name</div>
                    <div class="collapsible-body"><name-generator :dataReady="dataGenCall" @nameGenerated="dataGen=$event"></name-generator></div>
                </li>
                <li>
                    <div class="collapsible-header">Second</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class="collapsible-header">Third</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
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
                dataGenCall: this.trigger
            }
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
        }
    }
</script>

<style lang="scss" scoped>

</style>
