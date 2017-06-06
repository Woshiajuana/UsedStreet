<template>
    <div class="views-wrap details-view">
        <div class="details-goods-wrap">
            <div class="details-goods-img-box">
                <img src="../../assets/img/1.jpg" alt="" class="details-goods-img-inner">
            </div>
            <dl class="details-goods-text-box">
                <dt class="goods-name">裙子</dt>
                <dd class="goods-prompt-con">
                    <i class="goods-prompt-icon-box">
                        <svg class="goods-prompt-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person-icon"></use>
                        </svg>
                    </i>
                    <span class="goods-prompt-text">woshiajuana</span>
                </dd>
                <dd class="goods-prompt-con">
                    <i class="goods-prompt-icon-box">
                        <svg class="goods-prompt-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#place-icon"></use>
                        </svg>
                    </i>
                    <span class="goods-prompt-text">woshiajuana</span>
                </dd>
            </dl>
        </div>
        <p class="details-goods-remarks">
            裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子裙子
        </p>
        <div class="details-goods-comment">
            评论区域
        </div>
    </div>
</template>
<script>
    export default {
        name: 'details'
    }
</script>
<style lang="scss">
    @import '../../assets/scss/define';
    .details-view{
        @extend %wm;
    }
    .details-goods-wrap{
        @extend %clearfix;
    }
    .details-goods-img-box{
        @extend %fl;
        @extend %bsb;
        @include br(5px);
        width: 500px;
        height: 600px;
        background-color: #fff;
    }
    .details-goods-text-box{
        @extend %fr;
        width: 400px;
        height: 600px;
    }
    .details-goods-img-inner{
        @extend %ma;
        @extend %db;
        width: 460px;
        height: 460px;
        margin-top: 20px;
    }
    .goods-name{
        @extend %f20;
        border-left: 5px solid $mc;
        padding-left: 8px;
        margin-bottom: 50px;
    }
    .goods-prompt-con{
        @extend %c9;
        font-size: 13px;
        padding-left: 20px;
        margin: 10px;
    }
    .goods-prompt-icon-box{
        @extend %vam;
        @extend %dib;
        width: 20px;
        height: 20px;
    }
    .goods-prompt-icon{
        @extend %db;
        width: 20px;
        height: 20px;
        fill: #ccc;
    }
    .goods-prompt-text{

    }
    .details-goods-remarks{
        @extend %c9;
        @include br(5px);
        text-indent: 2em;
        margin: 20px 0;
        padding: 20px;
        background-color: #fff;
    }
    .details-goods-comment{
        @extend %c9;
        @include br(5px);
        margin: 20px 0;
        padding: 20px;
        background-color: #fff;
    }
</style>
