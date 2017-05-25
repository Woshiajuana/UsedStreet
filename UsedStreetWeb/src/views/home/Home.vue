<template>
    <div class="views-wrap">
        <aj-carousel :carousel_arr="carousel_arr" :carousel_height="320" :active_index="active_index"></aj-carousel>
    </div>
</template>
<script>
    import ajCarousel from '../../components/aj-carousel.vue';
    export default {
        name: 'home',
        data () {
            return {
                carousel_arr: [
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/1.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/2.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/3.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/4.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/5.jpg'},
                    { url: 'http://www.owulia.com', img_url: 'http://www.owulia.com/static/temp/6.jpg'},
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
        padding-top: 170px;
    }
</style>
