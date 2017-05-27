<template>
    <div class="slogan-wrap">
        <svg class="slogan-svg">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#footer-svg"></use>
        </svg>
        <svg class="slogan-svg slogan-svg-2">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#footer-svg"></use>
        </svg>
    </div>
</template>
<script>
    export default {
        name: 'slogan',
        computed: {
            scrollTop () {
                return this.$store.state.scroll_top;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .slogan-svg{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        @include tst(fill,.5s);
        margin-left: -200px;
        margin-top: -75px;
        width: 400px;
        height: 150px;
    }
    .slogan-svg-2{
        margin-top: -76px;
        -webkit-animation: fillColor 3s linear infinite;
        animation: fillColor 3s linear infinite;
    }
    @keyframes fillColor {
        0%{
            fill: #000;
        }
        50%{
            fill: $mc;
        }
        100%{
            fill: #000;
        }
    }
    .slogan-wrap{
        @extend %bgmc;
        @extend %pr;
        @extend %oh;
        height: 476px;
        margin-top: 2000px;
    }
</style>
