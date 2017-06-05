<template>
    <div class="user-container">
        <h1 class="user-container-title">我的资料：</h1>
        <div class="user-container-con">
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'昵称：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'邮箱：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_phone" :placeholder="'手机：'"></user-input>
            <user-select :styles="'margin:10px 0'" :type="'text'" :selectArr="selectArr" :placeholder="'请选择地点'"></user-select>
            <p class="data-btn-con">
                <i class="data-btn data-sure-btn">提交</i>
            </p>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../../components/user-input.vue'
    import UserSelect from '../../../components/user-select.vue'
    export default {
        name: 'data',
        data () {
            return {
                user_name: '',
                user_email: '',
                user_phone: '',
                selectArr: [
                    { key: '第一个选择'},
                    { key: '第二个选择'},
                    { key: '第三个选择'},
                    { key: '第四个选择'},
                    { key: '第五个选择'},
                    { key: '第六个选择'},
                ]
            }
        },
        components: {
            UserInput,
            UserSelect
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .data-btn-con{
        margin: 50px 0;
    }
    .data-btn{
        @extend %dib;
        @extend %f16;
        @extend %cp;
        @extend %cfff;
        @extend %tac;
        @include br(3px);
        width: 80px;
        height: 36px;
        line-height: 36px;
        background-color: #bbb;
        &.active{
            background-color: $mc;
        }
    }
</style>
