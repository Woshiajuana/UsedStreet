<template>
    <div class="input-wrap"
         :style="styles"
         :class="{'active':is_active || input_value,'open': is_open}">
        <label class="input-prompt" v-text="placeholder"></label>
        <i class="input-bar"></i>
        <input :readonly="selectArr" class="input-con" v-if="selectArr" type="text" @input="change" v-model="inputValue" @focus="focusFun" @blur="blurFun">
        <input class="input-con" v-else-if="type == 'text'" type="text" @input="change" v-model="input_value" @focus="focusFun" @blur="blurFun">
        <input class="input-con" v-else type="password" v-model="input_value" @focus="is_active = true" @blur="is_active = false">
        <i class="input-clear" @click="clearInput" v-show="input_value">
            <svg class="clear-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#clear-icon"></use>
            </svg>
        </i>
        <ul v-if="selectArr" class="select-box">
            <li class="select-item" @click="selectValue(item)" v-for="(item,index) in selectArr" v-text="item.key"></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'user-input',
        props: [ 'type', 'placeholder', 'value', 'styles', 'selectArr'],
        created () {
            this.input_value = this.value;
        },
        data () {
            return {
                is_active: false,
                input_value: '',
                is_open: false
            }
        },
        computed: {
            inputValue () {
                return this.input_value ? this.input_value.key : '';
            }
        },
        methods: {
            clearInput () {
                this.input_value = '';
                if(!this.selectArr) this.focus();
            },
            change () {
                this.$emit('changeValue',this.input_value);
            },
            focus () {
                this.$el.getElementsByTagName('input')[0].focus()
            },
            selectValue (item) {
                this.focusFun();
                this.input_value = item;
                this.is_open = false;
                this.is_active = false;
            },
            blurFun () {
                setTimeout( () => {
                    this.is_active = false;
                    this.is_open = false;
                },50)
            },
            focusFun () {
                this.is_active = true;
                this.is_open = true;
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
    .select-box{
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %t50;
        @extend %oya;
        @extend %f14;
        @extend %c6;
        @include tst(height,.3s);
        margin-top: 10px;
        transform: translate3d(0,-50%,0);
        height: 0;
        background-color: #fff;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }
    .select-item{
        @extend %db;
        @extend %bsb;
        @extend %cp;
        @include tst2(background-color,.3s,color,.3s);
        padding-left: 16px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        background-color: #f5f5f5;
        &:first-child{
            border-top: 1px solid #ddd;
        }
        &:hover{
            @extend %cfff;
            background-color: $mc;
        }
    }
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
        &.open{
            .select-box{
                height: 160px;
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
