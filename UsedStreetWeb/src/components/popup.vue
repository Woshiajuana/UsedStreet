<template>
    <div class="popup-wrap">
        <div class="popup-mask"></div>
        <div class="popup-content animated slideInDown">
            <h3 class="popup-title" v-text="promptTitle"></h3>
            <svg class="popup-close" @click="close">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#danger-icon"></use>
            </svg>
            <slot></slot>
            <p class="popup-bottom">
                <i class="popup-sure" @click="sure">
                    <svg class="popup-sure-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#success-icon"></use>
                    </svg>
                    确认
                </i>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'popup',
        props: ['prompt_title'],
        computed: {
            promptTitle () {
                return this.prompt_title || '提示：';
            }
        },
        created () {
            this.$nextTick(() => {
                var nd_popup_con = this.$el.getElementsByClassName('popup-content')[0];
                nd_popup_con.style.marginTop = '-' + nd_popup_con.offsetHeight / 2 + 'px';
            })
        },
        methods: {
            sure () {
                this.$emit('sure');
            },
            close () {
                this.$emit('close');
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .popup-mask{
        @extend %pf;
        @extend %t0;
        @extend %r0;
        @extend %b0;
        @extend %l0;
        z-index: 98;
        background: rgba(55,58,71,.3);
        animation-duration: .5s;
        animation-name: popup-mask-fade;
    }
    .popup-content{
        @extend %pf;
        @extend %t50;
        @extend %l50;
        animation-duration: .5s;
        animation-name: popup-content-slideOutUp;
        z-index: 99;
        width: 300px;
        padding: 60px 50px;
        margin-left: -200px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    }
    @keyframes popup-content-slideOutUp {
        from {
            transform: translate3d(0, -10%, 0);
            visibility: visible;
            opacity: 0;
        }
        to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }
    @keyframes popup-mask-fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .popup-title{
        @extend %f16;
        @extend %fwn;
        @extend %c6;
        @extend %pa;
        @extend %t0;
        @extend %l0;
        padding-left: 20px;
        line-height: 50px;
        height: 50px;
    }
    .popup-close{
        @extend %pa;
        @extend %t0;
        @extend %cp;
        @extend %r0;
        @include tst(fill,.3s);
        padding: 10px;
        width: 20px;
        height: 20px;
        fill: #999;
        &:hover{
            fill: $mc;
        }
    }
    .popup-bottom{
        @extend %pa;
        @extend %b0;
        @extend %r0;
        @extend %l0;
        @extend %tac;
        height: 40px;
        background-color: #f5f5f5;
    }
    .popup-sure{
        @extend %dib;
        @extend %cp;
        @extend %c9;
        @extend %f14;
        @include tst(color,.3s);
        padding: 10px;
        height: 20px;
        fill: #999;
        &:hover{
            .popup-sure-icon{
                fill: $mc;
            }
            color: $mc;
        }
    }
    .popup-sure-icon{
        @extend %vam;
        @include tst(fill,.3s);
        width: 20px;
        height: 20px;
    }
</style>
