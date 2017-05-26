<template>
    <div id="app">
        <!--header-->
        <my-header></my-header>
        <!--/header-->
        <router-view></router-view>
        <!--svg-->
        <svg-template></svg-template>
        <!--/svg-->
        <!--footer-->
        <my-footer></my-footer>
        <!--/footer-->
        <!--return-top-->
        <return-top></return-top>
        <!--/return-top-->
    </div>
</template>

<script>
    import SvgTemplate from './components/svg-template.vue'
    import MyHeader from './components/my-header.vue'
    import MyFooter from './components/my-footer.vue'
    import ReturnTop from './components/return-top.vue'
    export default {
        name: 'app',
        components: {
            SvgTemplate,
            MyHeader,
            MyFooter,
            ReturnTop
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/common";
</style>
