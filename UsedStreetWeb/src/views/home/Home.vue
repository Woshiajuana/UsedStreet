<template>
    <div class="views-wrap">
        <aj-carousel :carousel_arr="carousel_arr" :carousel_height="320" :active_index="active_index"></aj-carousel>

        <div class="genre-wrap">
            <i class="genre-arrow"></i>
        </div>
        <ul class="goods-wrap">
                <li class="goods-group">
                    <a href="#/" class="goods-item goods-1">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                </li>
                <li class="goods-group">
                    <a href="#/" class="goods-item goods-2 fl">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-3 fr">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                </li>
                <li class="goods-group">
                    <a href="#/" class="goods-item goods-4 fl">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-5 fr">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-6 fr">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-7 fl">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                </li>
                <li class="goods-group">
                    <a href="#/" class="goods-item goods-4 fr">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-5 fl">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-6 fl">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                    <a href="#/" class="goods-item goods-7 fr">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                </li>
                <li class="goods-group">
                    <a href="#/" class="goods-item goods-8">
                        <i class="goods-img"></i>
                        <div class="goods-info">
                            <h3 class="goods-name">自行车</h3>
                            <span class="goods-num">30￥</span>
                        </div>
                    </a>
                </li>
            </ul>
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
    .genre-wrap{
        background-color: $mc;
        height: 100px;
        padding: 80px 0 50px;
        margin-top: 120px;
    }
    .goods-wrap{
        @extend %wm;
        @extend %pr;
        padding-top: 80px;
    }
    .goods-group{
        @extend %clearfix;
    }
    .goods-item{
        @extend %pr;
        @extend %db;
        @extend %oh;
        margin-top: 40px;
        height: 376px;
        &.fl{
            @extend %fl;
        }
        &.fr{
            @extend %fr;
        }
        &.goods-1{
            width: 960px;
        }
        &.goods-2{
            width: 620px;
        }
        &.goods-3{
            width: 300px;
        }
        &.goods-4{
            width: 300px;
        }
        &.goods-5{
            width: 620px;
            height: 180px;
        }
        &.goods-6{
            width: 620px;
        }
        &.goods-7{
            width: 300px;
            height: 180px;
        }
        &.goods-8{
            width: 960px;
            height: 180px;
        }
        &:hover{
            .goods-info{
                @extend %b0;
            }
            .goods-img{
                top: -40px;
            }
        }
    }
    .goods-info{
        @extend %pa;
        @extend %l0;
        @extend %r0;
        @include tst(bottom,.5s);
        bottom: -90px;
        height: 90px;
        background-color: #cccccc;
    }
    .goods-img{
        @extend %pa;
        @extend %w100;
        @extend %h100;
        @extend %bsc;
        @extend %t0;
        @include tst(top,.5s);
        background-image: url("../../assets/img/1.jpg");
    }
</style>
