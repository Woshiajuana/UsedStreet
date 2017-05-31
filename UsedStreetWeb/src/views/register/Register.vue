<template>
    <div class="views-wrap register-view">
        <div class="register-box">
            <user-input
                :styles="'margin:10px 0'"
                :type="'text'"
                v-model="user_name"
                :placeholder="'昵称（最长7个汉字或14个英文）'"></user-input>
            <user-input
                :styles="'margin:10px 0'"
                :type="'text'"
                v-model="user_email"
                :placeholder="'邮箱（可用于找回密码与登录）'"></user-input>
            <user-input
                :styles="'margin:10px 0'"
                :type="'password'"
                v-model="user_password"
                :placeholder="'密码（6~12个字母、数字组成）'"></user-input>
            <user-input
                :styles="'margin:10px 0'"
                :type="'password'"
                v-model="user_too_password"
                :placeholder="'确认密码（6~12个字母、数字组成）'"></user-input>
            <p class="agreement-prompt">
                点击「注册」按钮，即代表你同意<a href="#/agreement">《UsedStreet协议》</a>
            </p>
            <i class="register-btn" @click="register" :class="{'active': user_name && user_password && user_password && ( user_too_password == user_password ) }">注册</i>
            <a href="#/login" class="user-link">已有帐号？点我<span>去登录</span></a>
            <other-login></other-login>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../components/user-input.vue'
    import OtherLogin from '../../components/other-login.vue'
    import Tool from '../../assets/lib/Tool'
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
                szReg: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
            }
        },
        components: {
            UserInput,
            OtherLogin
        },
        methods: {
            register () {
                if ( this.checkInput() ) return;

            },
            checkInput () {
                if ( !this.user_name.trim() ) {
                    this.$message({
                        msg: '昵称不能为空',
                        type: 'danger'
                    });
                    return true;
                }
                if ( Tool.GetLength( this.user_name.trim() ) > 14 ) {
                    this.$message({
                        msg: '最长7个汉字或14个英文',
                        type: 'danger'
                    });
                    return true;
                }
                if ( !this.user_email.trim() ) {
                    this.$message({
                        msg: '邮箱不能为空',
                        type: 'danger'
                    });
                    return true;
                }
                if ( !this.szReg.test( this.user_email.trim() ) ) {
                    this.$message({
                        msg: '邮箱格式错误',
                        type: 'danger'
                    });
                    return true;
                }
                if ( !this.user_password.trim() ) {
                    this.$message({
                        msg: '密码不能为空',
                        type: 'danger'
                    });
                    return true;
                }
                if ( Tool.GetLength( this.user_password.trim() ) > 12 || Tool.GetLength( this.user_password.trim() ) < 6 ) {
                    this.$message({
                        msg: '密码6~12个字母、数字组成',
                        type: 'danger'
                    });
                    return true;
                }
                if ( !this.user_too_password.trim() ) {
                    this.$message({
                        msg: '请确认密码',
                        type: 'danger'
                    });
                    return true;
                }
                if ( this.user_too_password !== this.user_password ) {
                    this.$message({
                        msg: '两次密码不一致',
                        type: 'danger'
                    });
                    return true;
                }
                return false;
            }
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
    .agreement-prompt{
        @extend %f12;
        @extend %c9;
        margin: 20px 0;
        a{
            color: $mc;
        }
    }
</style>
