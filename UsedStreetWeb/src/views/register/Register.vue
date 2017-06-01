<template>
    <div class="views-wrap register-view">
        <div class="register-box">
            <user-input
                :styles="'margin:10px 0'"
                :type="'text'"
                v-model="user_name"
                @changeValue="checkUserName"
                :placeholder="'昵称（最长7个汉字或14个英文）'"></user-input>
            <user-input
                :styles="'margin:10px 0'"
                :type="'text'"
                v-model="user_email"
                @changeValue="checkUserEmail"
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
            <i class="register-btn" @click="sendEmail" :class="{'active': isBtnActive }">注册</i>
            <a href="#/login" class="user-link">已有帐号？点我<span>去登录</span></a>
            <other-login></other-login>
        </div>
        <Popup
            v-if="is_popup"
            @sure="register"
            @close="is_popup = false">
            <p class="email_code_prompt">验证码已发送至邮箱：<strong>{{user_email}}</strong></p>
            <user-input
                :styles="'margin:10px 0'"
                :type="'text'"
                v-model="user_email_code"
                @changeValue="checkUserEmail"
                :placeholder="'请输入验证码'"></user-input>
        </Popup>
    </div>
</template>
<script>
    import UserInput from '../../components/user-input.vue'
    import OtherLogin from '../../components/other-login.vue'
    import Tool from '../../assets/lib/Tool'
    import Popup from '../../components/popup.vue'
    export default {
        name: 'register',
        data () {
            return {
                is_popup: false,
                is_remember: true,
                user_name: '',
                user_password: '',
                user_too_password: '',
                user_email: '',
                user_code: '',
                is_user_code: false,
                szReg: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
                user_name_timer: '',
                user_email_timer: '',
                user_email_code: ''
            }
        },
        computed: {
            isBtnActive () {
                return  this.user_name && this.user_email && this.user_password && this.user_password && ( this.user_too_password == this.user_password );
            }
        },
        components: {
            UserInput,
            OtherLogin,
            Popup
        },
        methods: {
            /**发送邮件*/
            sendEmail () {
                this.is_popup = true;
                if ( this.checkInput() ) return;
            },
            /**注册*/
            register () {
                if ( this.checkInput() ) return;

            },
            /**检测用户昵称是否已注册*/
            checkUserName ( user_name ) {
                clearTimeout( this.user_name_timer );
                console.log( user_name )
                this.user_name_timer = setTimeout(() => {
                    console.log( '去检测' + user_name)
                },1000);
            },
            /**检测用户邮箱是否已注册*/
            checkUserEmail ( user_email ) {
                clearTimeout( this.user_email_timer );
                console.log( user_email )
                this.user_email_timer = setTimeout(() => {
                    console.log( '去检测' + user_email)
                },1000);
            },
            /**检测*/
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
    .email_code_prompt{
        @extend %f12;
        @extend %c9;
        line-height: 1.5;
        strong{
            color: $mc;
        }
    }
</style>
