<template>
    <div class="views-wrap">
        <aj-carousel></aj-carousel>
    </div>
</template>
<script>
    import ajCarousel from '../../components/aj-carousel.vue';
    export default {
        name: 'home',
        components: {
            ajCarousel
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .views-wrap{
        @extend %w100;
    }
</style>
