<template>
    <div class="genre-wrap view-session" :style="{'top': (170 - scrollTop * 0.7) + 'px'}">
        <div class="genre-content">
            <div class="genre-goods-list" :style="{'top': (100 - this.scrollTop * 0.6) + 'px'}">
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
                <a class="genre-goods-list-item" href=""></a>
            </div>
            <ul class="genre-menu" :style="{'top': (100 + this.scrollTop * 0.2) + 'px'}">
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item" href="#">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#travel-icon"></use>
                        </svg>
                        出行类
                    </a>
                </li>
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item" href="#">
                        <svg class="genre-menu-item-icon" style="width: 20px;height: 20px;left: 22px;margin-top: -9px;">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#book-icon"></use>
                        </svg>
                        图书类
                    </a>
                </li>
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item" href="#">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fan-icon"></use>
                        </svg>
                        电子商品类
                    </a>
                </li>
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item" href="#">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dress-icon"></use>
                        </svg>
                        服饰鞋子类
                    </a>
                </li>
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item" href="#">
                        <svg class="genre-menu-item-icon" style="width: 20px;height: 20px;left: 22px;margin-top: -9px;">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#life-icon"></use>
                        </svg>
                        日常生活类
                    </a>
                </li>
                <li>
                    <div class="hover-genre-box">

                    </div>
                    <a class="genre-menu-item no-border" href="#">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#other-icon"></use>
                        </svg>
                        更多
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'genre',
        computed: {
            scrollTop () {
                return this.$store.state.scroll_top;
            },
            contentTop () {
                var top = (200 - this.scrollTop * 0.3);
                if ( top <= 0) {
                    top = this.scrollTop * 0.1
                }
                return top;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .genre-wrap{
        background-color: $mc;
        height: 1200px;
        padding: 80px 0 50px;
        margin-top: 440px;
    }
    .genre-content{
        @extend %wm;
        @extend %pr;
        @extend %oh;
        @extend %h100;
    }
    .genre-menu{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        width: 220px;
        li{
            @include tst(background-color,.5s);
            padding: 0 10px;
            background-color: #58B7FF;
            &:hover{
                background-color: #1D8CE0;
                .hover-genre-box{
                    @extend %o1;
                    z-index: 0;
                    left: 220px;
                }
            }
        }
    }
    .genre-menu-item{
        @extend %db;
        @extend %cp;
        @extend %pr;
        @extend %f18;
        @extend %cfff;
        height: 64px;
        line-height: 64px;
        border-bottom: 1px solid #cccccc;
        padding-left: 60px;
        &.no-border{
            border-bottom: none;
        }
    }
    .genre-menu-item-icon{
        @extend %pa;
        @extend %t50;
        left: 20px;
        margin-top: -13px;
        height: 26px;
        width: 26px;
        fill: #fff;
    }
    .hover-genre-box{
        @extend %pa;
        @extend %h100;
        @extend %t0;
        @extend %o0;
        @include tst2(left,.5s,opacity,.5s);
        z-index: -1;
        left: 250px;
        width: 740px;
        background-color: rgba(29,140,224,.9);
    }
    .genre-goods-list{
        @extend %pa;
        @extend %r0;
        @extend %t0;
        width: 700px;
    }
    .genre-goods-list-item{
        @extend %db;
        @extend %ma;
        @extend %bsc;
        width: 640px;
        height: 180px;
        background-image: url("http://www.owulia.com/static/temp/3.jpg");
        margin-top: 80px;
    }
</style>
