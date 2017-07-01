<template>
<nav class="nav-extended">
    <div class="nav-wrapper fixed">
        <a href="#" class="brand-logo center">
            <span class="generator">test</span>
            <span class="generator">data</span>
            <span class="generator">generator</span>
        </a>
    </div>
    <div class="nav-content">
        <ul class="tabs tabs-transparent">
            <li class="tab col s4"><a href="/">Generate</a></li>
            <li class="tab col s4"><a class="active" href="/about">About</a></li>
        </ul>
    </div>
</nav>
</template>

<script>
    console.log("In header.vue");
    export default{

    }
</script>

<style lang="scss" scoped>
    nav{
        background: linear-gradient(#3D3B49,#3D3B49) !important;
        .generator{
            font-family: 'Pacifico', cursive !important;
            font-size: 96%;
        }
        .data{
            font-family: 'Permanent Marker', cursive !important;
            font-size: 96%;
        }
    }
</style>