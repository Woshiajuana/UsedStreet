<template>
    <div class="return-top-wrap">
        <div class="return-top-content">
            <svg class="return-top" :class="{'active': scrollTop > 600}" @click="returnTop">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#return-top-icon"></use>
            </svg>
        </div>
    </div>
</template>
<script>
    import types from '../store/mutation-types'
    export default {
        name: 'return-top',
        data () {
            return {
                scroll_top: 0
            }
        },
        computed: {
            scrollTop () {
                return this.$store.state.scroll_top;
            }
        },
        created () {
            this.$nextTick( () => {
                window.addEventListener('scroll', this.scrollFun)
            })
        },
        methods: {
            returnTop () {
                this.$top('header-wrap',100);
            },
            scrollFun () {
                var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
                this.$store.commit( types.SET_SCROLL_TOP, scroll_top )
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .return-top-wrap{
        @extend %pf;
        @extend %l0;
        @extend %r0;
        height: 35px;
        bottom: -35px;
    }
    .return-top-content{
        @extend %wm;
        @extend %pr;
    }
    .return-top{
        @extend %pa;
        @extend %cp;
        @extend %t0;
        @include tst(all,.3s);
        right: -40px;
        width: 20px;
        height: 20px;
        fill: #666;
        padding: 10px;
        background-color: transparent;
        &.active{
            top: -40px;
        }
        &:hover{
            fill: #ffd000;
            background-color: rgba(0,0,0,.6);
        }
    }
</style>
