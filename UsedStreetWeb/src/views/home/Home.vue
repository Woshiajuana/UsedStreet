<template>
    <div class="views-wrap home-view">
        <div class="view-session" :style="{'top': scrollTop + 'px'}">
            <aj-carousel :carousel_arr="carousel_arr" :carousel_height="320" :active_index="active_index"></aj-carousel>
        </div>
        <genre></genre>
        <slogan></slogan>
    </div>
</template>
<script>
    import ajCarousel from '../../components/aj-carousel.vue'
    import genre from '../../components/genre.vue'
    import slogan from '../../components/slogan.vue'
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
        computed: {
            scrollTop () {
                return 170 - (this.$store.state.scroll_top * 0.2);
            }
        },
        components: {
            ajCarousel,
            genre,
            slogan
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .view-session{
        @extend %pf;
        @extend %l0;
        @extend %r0;
    }
    .views-wrap{
        @extend %w100;
        padding-top: 170px;
    }
    .home-view{
        height: 2500px;
    }
</style>
