<template>
    <div class="goods-list-item">
        <img src="../assets/img/1.jpg" alt="" class="goods-list-item-type-img">
        <p class="goods-list-item-name">裙子</p>
        <p class="goods-list-item-sum">50.00</p>
        <p class="goods-list-item-text">
            <a href="#" class="goods-list-item-detail">
                <svg class="goods-list-item-detail-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#eyes-icon"></use>
                </svg>
                <i class="goods-list-item-detail-number">(12)</i>
            </a>
            <a href="#" class="goods-list-item-detail">
                <svg class="goods-list-item-detail-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#opinion-icon"></use>
                </svg>
                <i class="goods-list-item-detail-number">(12)</i>
            </a>
            <a href="#" class="goods-list-item-detail">
                <svg class="goods-list-item-detail-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collect-icon"></use>
                </svg>
                <i class="goods-list-item-detail-number">(12)</i>
            </a>
            <span class="goods-list-item-time">上架时间：2017-06-02 14:25</span>
        </p>
        <p class="goods-item-operate-box">
            <i class="goods-item-operate" title="上架">
                <svg class="goods-item-operate-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#up-icon"></use>
                </svg>
            </i>
            <i class="goods-item-operate" title="下架">
                <svg class="goods-item-operate-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#down-icon"></use>
                </svg>
            </i>
            <i class="goods-item-operate" title="修改">
                <svg class="goods-item-operate-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#update-icon"></use>
                </svg>
            </i>
            <i class="goods-item-operate" title="删除">
                <svg class="goods-item-operate-icon goods-item-delete-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-icon"></use>
                </svg>
            </i>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'goods-list-item'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .goods-item-operate-box{
        @extend %dn;
        @extend %pa;
        @extend %r0;
        @extend %t0;
        height: 50px;
        line-height: 50px;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: operate-box;
    }
    @keyframes operate-box {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .goods-item-operate{
        @extend %vam;
        @extend %dib;
        @extend %cp;
        margin: 0 5px;
        height: 16px;
        width: 16px;
        line-height: 20px;
        &:hover{
            .goods-item-operate-icon{
                fill: $mc;
                &.goods-item-delete-icon{
                    fill: #FF4949;
                }
            }
        }
    }
    .goods-item-operate-icon{
        @include tst(fill,.3s);
        fill: #999;
        width: 16px;
        height: 16px;
    }
    .goods-list-item{
        @extend %pr;
        padding: 10px 10px 10px 126px;
        border-bottom: 1px solid #ccc;
        &:hover{
            .goods-item-operate-box{
                @extend %db;
            }
        }
    }
    .goods-list-item-type-img{
        @extend %pa;
        @extend %t50;
        left: 10px;
        width: 100px;
        height: 100px;
        margin-top: -50px;
    }
    .goods-list-item-name{
        @extend %f16;
        @extend %oh;
        height: 50px;
        line-height: 50px;
    }
    .goods-list-item-sum{
        @extend %pr;
        @extend %c9;
        @extend %tar;
        font-size: 32px;
        height: 50px;
        line-height: 50px;
        padding-right: 20px;
        &:after{
            @extend %pa;
            @extend %r0;
            @extend %f14;
            @extend %c9;
            content: '￥';
        }
    }
    .goods-list-item-text{
        @extend %oh;
        @extend %f12;
        @extend %c9;
        height: 20px;
        line-height: 20px;
    }
    .goods-list-item-time{
        @extend %fr;
    }
    .goods-list-item-detail{
        @extend %vam;
        @extend %fl;
        height: 20px;
        line-height: 20px;
        margin-left: 10px;
    }
    .goods-list-item-detail-icon{
        @extend %vam;
        width: 14px;
        height: 14px;
        fill: #bbb;
    }
    .goods-list-item-detail-number{
        @extend %vam;
        color: #bbb;
    }
</style>
