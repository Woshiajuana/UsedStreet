<template>
    <div class="views-wrap">
        <aj-carousel :carousel_arr="carousel_arr" :active_index="active_index"></aj-carousel>
    </div>
</template>
<script>
    import ajCarousel from '../../components/aj-carousel.vue';
    export default {
        name: 'home',
        data () {
            return {
                carousel_arr: [
                    { url: 'http://www.owulia.com', img_url: 'http://img.mukewang.com/5784503f00017aac06000338-240-135.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://img.mukewang.com/57fb48700001289806000338-240-135.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://img.mukewang.com/5704ae0000015fe706000338-240-135.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://img.mukewang.com/56f22f160001bac306000338-240-135.jpg'}
                ],
                active_index: 0
            }
        },
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
