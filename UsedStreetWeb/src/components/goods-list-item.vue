<template>
    <div class="goods-list-item">
        <img src="../assets/img/1.jpg" alt="" class="goods-list-item-type-img">
        <p class="goods-list-item-name">裙子</p>
        <p class="goods-list-item-sum">50</p>
        <p class="goods-list-item-time">2017 06 02</p>
        <i class="goods-list-item-cancel">取消</i>
    </div>
</template>
<script>
    export default {
        name: 'goods-list-item'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .goods-list-item{
        @extend %pr;
        /*height: 120px;*/
        padding: 10px 10px 10px 110px;
        border-bottom: 1px solid #ccc;
    }
    .goods-list-item-type-img{
        @extend %pa;
        @extend %t50;
        @extend %l0;
        width: 100px;
        height: 100px;
        margin-top: -50px;
    }
    .goods-list-item-name{
        @extend %f16;
        height: 50px;
        line-height: 50px;
    }
    .goods-list-item-sum{
        @extend %pr;
        @extend %tar;
        font-size: 36px;
        height: 50px;
        line-height: 50px;
        padding-right: 20px;
        &:after{
            @extend %pa;
            @extend %r0;
            @extend %f14;
            content: '￥';
        }
    }
    .goods-list-item-time{
        @extend %oh;
        @extend %tar;
        @extend %f12;
        @extend %c9;
        margin-right: 40px;
        height: 20px;
        line-height: 20px;
    }
    .goods-list-item-cancel{
        @extend %pa;
        @extend %f12;
        @extend %cfff;
        @extend %cp;
        padding: 0 5px;
        right: 10px;
        bottom: 12px;
        background-color: #FF4949;
        border-radius: 5px;
    }
</style>
