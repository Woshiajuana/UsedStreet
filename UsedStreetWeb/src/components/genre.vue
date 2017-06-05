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
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">自行车</a>
                            <a href="#">电动车</a>
                            <a href="#">摩托车</a>
                            <a href="#">其它出行</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#travel-icon"></use>
                        </svg>
                        出行类
                    </div>
                </li>
                <li>
                    <div class="hover-genre-box">
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">各类小说</a>
                            <a href="#">教科书</a>
                            <a href="#">其它图书</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item">
                        <svg class="genre-menu-item-icon" style="width: 20px;height: 20px;left: 22px;margin-top: -9px;">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#book-icon"></use>
                        </svg>
                        图书类
                    </div>
                </li>
                <li>
                    <div class="hover-genre-box">
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">电风扇</a>
                            <a href="#">电脑</a>
                            <a href="#">手机</a>
                            <a href="#">洗衣机</a>
                            <a href="#">其它电器</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fan-icon"></use>
                        </svg>
                        电子商品类
                    </div>
                </li>
                <li>
                    <div class="hover-genre-box">
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">鞋子</a>
                            <a href="#">衣服</a>
                            <a href="#">包包</a>
                            <a href="#">其它服饰</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dress-icon"></use>
                        </svg>
                        服饰鞋子类
                    </div>
                </li>
                <li>
                    <div class="hover-genre-box">
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">脸盆</a>
                            <a href="#">棉被</a>
                            <a href="#">其它</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item">
                        <svg class="genre-menu-item-icon" style="width: 20px;height: 20px;left: 22px;margin-top: -9px;">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#life-icon"></use>
                        </svg>
                        日常生活类
                    </div>
                </li>
                <li>
                    <div class="hover-genre-box">
                        <h3 class="genre-title">分类目录</h3>
                        <div class="genre-con">
                            <a href="#">其它</a>
                        </div>
                        <h3 class="genre-title">好货推荐</h3>
                        <div class="genre-con">
                            <a class="genre-goods-list-item" href=""></a>
                        </div>
                    </div>
                    <div class="genre-menu-item no-border">
                        <svg class="genre-menu-item-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#other-icon"></use>
                        </svg>
                        更多
                    </div>
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
    .genre-title{
        @extend %f16;
        @extend %cc;
        height: 50px;
        line-height: 50px;
        margin: 10px 30px;
    }
    .genre-con{
        @extend %f14;
        margin: 10px 50px;
        a{
            @extend %cfff;
            @include tst(border-bottom,.3s);
            margin: 0 10px;
            border-bottom: 1px solid transparent;
            &:hover{
                border-bottom: 1px solid #fff;
            }
        }
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
