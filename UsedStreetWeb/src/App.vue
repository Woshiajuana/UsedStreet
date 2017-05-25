<template>
    <div id="app">
        <!--header-->
        <my-header></my-header>
        <!--/header-->
        <router-view></router-view>
        <!--svg-->
        <svg-template></svg-template>
        <!--/svg-->
    </div>
</template>

<script>
    import SvgTemplate from './components/svg-template.vue'
    import MyHeader from './components/my-header.vue'
    export default {
        name: 'app',
        components: {
            SvgTemplate,
            MyHeader
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/common";
</style>
