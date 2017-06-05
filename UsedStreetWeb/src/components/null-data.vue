<template>
    <div class="null-data-wrap">
        <svg class="null-data-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#null-icon"></use>
        </svg>
        <p class="null-data-prompt">
            {{prompt}}
            <a v-if="hrefUrl" :href="hrefUrl" v-text="hrefText"></a>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'null-data',
        props: [ 'prompt', 'hrefUrl', 'hrefText' ]
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .null-data-icon{
        @extend %db;
        @extend %ma;
        width: 60px;
        height: 60px;
        fill: #ccc;
    }
    .null-data-prompt{
        @extend %f14;
        @extend %c9;
        @extend %tac;
        line-height: 30px;
        a{
            color: $mc;
        }
    }
</style>
