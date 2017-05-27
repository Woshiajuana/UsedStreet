<template>
    <div class="views-wrap register-view">
        <div class="register-box">
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'请输入帐号'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'请输入邮箱'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'password'" v-model="user_password" :placeholder="'请输入密码'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'password'" v-model="user_too_password" :placeholder="'请确认密码'"></user-input>
            <i class="register-btn" :class="{'active': user_name && user_password && user_password && ( user_too_password == user_password ) }">注册</i>
            <a href="#/login" class="user-link">已有帐号？点我<span>去登录</span></a>
            <other-login></other-login>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../components/user-input.vue'
    import OtherLogin from '../../components/other-login.vue'
    export default {
        name: 'register',
        data () {
            return {
                is_remember: true,
                user_name: '',
                user_password: '',
                user_too_password: '',
                user_email: '',
                user_code: '',
                is_user_code: false,
            }
        },
        components: {
            UserInput,
            OtherLogin
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .register-box{
        @extend %ma;
        @extend %bsb;
        width: 400px;
        padding: 50px;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
        background-color: #fff;
    }

</style>
