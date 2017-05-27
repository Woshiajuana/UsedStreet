<template>
    <div class="genre-wrap view-session" :style="{'top': scrollTop + 'px'}">
        <div class="genre-content">

        </div>
    </div>
</template>
<script>
    export default {
        name: 'genre',
        computed: {
            scrollTop () {
                return 170 - (this.$store.state.scroll_top*0.7);
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .genre-wrap{
//        @extend %pr;
        background-color: $mc;
        height: 1200px;
        padding: 80px 0 50px;
        margin-top: 440px;
    }
    .genre-content{
        @extend %wm;
    }
</style>
