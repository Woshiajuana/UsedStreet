<template>
    <div class="user-container">
        <h1 class="user-container-title">我的资料：</h1>
        <div class="user-container-con user-data-con">
            <user-input :readonly="true" :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'昵称：'"></user-input>
            <user-input :readonly="true" :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'邮箱：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_phone" :placeholder="'手机：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'QQ：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'微信：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" :selectArr="selectArr" :placeholder="'性别：'"></user-input>
            <p class="data-btn-con">
                <i class="data-btn data-sure-btn">提交</i>
            </p>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../../components/user-input.vue'
    export default {
        name: 'data',
        data () {
            return {
                user_name: '',
                user_email: '',
                user_phone: '',
                selectArr: [
                    { key: '保密'},
                    { key: '男'},
                    { key: '女'}
                ]
            }
        },
        components: {
            UserInput
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .user-data-con{
        width: 50%;
    }
    .data-btn-con{
        margin: 50px 0;
    }
    .data-btn{
        @extend %db;
        @extend %f16;
        @extend %cp;
        @extend %cfff;
        @extend %tac;
        @include br(3px);
        @include tst(background-color,.3s);
        height: 40px;
        line-height: 40px;
        background-color: #bbb;
        &.active{
            background-color: $mc;
        }
    }
</style>
