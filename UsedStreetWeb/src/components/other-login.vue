<template>
    <div class="other-login-box">
        <p class="tripartite-title">您也可以使用下边第三方帐号快捷登录：</p>
        <div class="tripartite-box">
            <a href="#" title="QQ登录" class="tripartite-box-item">
                <svg class="">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qq-icon"></use>
                </svg>
            </a>
            <a href="#" title="微信登录" class="tripartite-box-item">
                <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wx-icon"></use>
                </svg>
            </a>
            <a href="#" title="微博登录" class="tripartite-box-item">
                <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#xlwb-icon"></use>
                </svg>
            </a>
            <a href="#" title="GitHub登录" class="tripartite-box-item">
                <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gh-icon"></use>
                </svg>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'other-login'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .tripartite-title{
        @extend %c6;
        height: 38px;
        line-height: 38px;
        margin-top: 15px;
        border-top: 1px solid #ddd;
    }
    .tripartite-box{
        @extend %tac;
        margin: 16px 0;
    }
    .tripartite-box-item{
        @extend %dib;
        margin: 0 2px;
        width: 32px;
        height: 32px;
        svg{
            @extend %w100;
            @extend %h100;
            @include tst(fill,.3s);
            fill: #999;
            &:hover{
                fill: $mc;
            }
        }
    }
</style>
