<template>
    <nav-bar></nav-bar>
</template>

<script>
    var navBar = require("./Shared/navBar.vue");
    console.log("In App.vue");
    export default{
        components:{
            navBar:navBar
        }
    }
</script>

<style>


</style>
