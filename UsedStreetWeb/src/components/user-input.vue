<template>
    <div class="input-wrap"
         :style="styles"
         :class="{'active':is_active || input_value, 'error':is_error}">
        <label class="input-prompt" v-text="placeholder"></label>
        <i class="input-bar"></i>
        <input class="input-con" v-if="type == 'text'" type="text" v-model="input_value" @focus="is_active = true" @blur="is_active = false">
        <input class="input-con" v-else type="password" v-model="input_value" @focus="is_active = true" @blur="is_active = false">
        <i class="input-clear" @click="clearInput" v-show="input_value">
            <svg class="clear-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#clear-icon"></use>
            </svg>
        </i>
    </div>
</template>
<script>
    export default {
        name: 'user-input',
        props: [ 'type', 'placeholder', 'value', 'styles', 'is_error'],
        created () {
            this.input_value = this.value;
        },
        data () {
            return {
                is_active: false,
                input_value: ''
            }
        },
        methods: {
            clearInput () {
                this.input_value = '';
                this.focus();
            },
            input_value () {
                this.$emit('changeValue',this.input_value);
            },
            focus () {
                this.$el.getElementsByTagName('input')[0].focus()
            }
        },
        watch: {
            value (val) {
                this.input_value = val
            },
            input_value (newVal) {
                this.$emit('input', newVal);
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .input-wrap{
        @extend %pr;
        @extend %df;
        height: 32px;
        padding: 20px 0 0;
        border-bottom: 1px solid #ddd;
        &.active{
            .input-prompt{
                @extend %f12;
                bottom: 26px;
                color: $mc;
            }
            .input-bar{
                @extend %l0;
                @extend %r0;
                @extend %w100;
                background-color: $mc;
            }
        }
    }
    .input-con{
        @extend %df1;
        @extend %pr;
        @extend %db;
        @extend %f14;
        @extend %c6;
        border: none;
        background-color: transparent;
    }
    .input-prompt{
        @extend %pa;
        @extend %f14;
        @extend %c9;
        @extend %b0;
        @include tst(all,.3s);
        height: 32px;
        line-height: 32px;
        &.active{
            @extend %f12;
            bottom: 26px;
            color: $mc;
        }
    }
    .input-clear{
        @extend %pr;
        @extend %cp;
        width: 32px;
        height: 32px;
    }
    .input-bar{
        @extend %pa;
        @extend %l50;
        bottom: -2px;
        height: 2px;
        width: 2px;
        margin-left: -1px;
        @include tst(all,.3s);
        background-color: transparent;
    }
</style>
