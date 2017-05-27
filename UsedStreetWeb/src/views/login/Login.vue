<template>
    <div class="views-wrap login-view">
        <div class="login-box" :class="{'active': is_user_code}">
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'请输入帐号'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'password'" v-model="user_password" :placeholder="'请输入密码'"></user-input>
            <div class="check-code-box">
                <div><user-input :type="'text'" v-model="user_code" :placeholder="'请输入验证码'"></user-input></div>
                <img title="看不清？换一张" class="check-code-img" src="" alt="">
            </div>
            <div class="user-relevant">
                <span @click=" is_remember = !is_remember " :class="{ 'remember-active-user': is_remember }" class="remember-user">
                    <i class="remember-type"></i>
                    记住密码
                </span>
                <a href="#/retrieve" class="back-password">忘记密码？</a>
            </div>
            <i class="login-btn" @click=" is_user_code = !is_user_code" :class="{'active': user_name && user_password && (!is_user_code || user_code) }">登录</i>
            <a href="#/register" class="user-link">没有帐号？点我<span>去注册</span></a>
            <other-login></other-login>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../components/user-input.vue'
    import OtherLogin from '../../components/other-login.vue'
    export default {
        name: 'login',
        data () {
            return {
                is_remember: true,
                user_name: '',
                user_password: '',
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
    .register-view,
    .login-view{
        padding: 180px 0 80px;
    }

    .login-box{
        @extend %ma;
        @extend %bsb;
        @include tst(height,.5s);
        width: 400px;
        height: 480px;
        padding: 50px;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
        background-color: #fff;
        &.active{
            height: 543px;
            .check-code-box{
                @extend %o1;
                height: 54px;
                margin: 10px 0 20px;
            }
        }
    }
    .check-code-box{
        @extend %df;
        @extend %oh;
        @extend %o0;
        @include tst(all,.5s);
        height: 0;
        > div{
            @extend %df1;
        }
    }
    .check-code-img{
        @extend %cp;
        width: 80px;
        height: 35px;
        margin-top: 18px;
        margin-left: 10px;
        background-color: #f5f5f5;
    }
    .register-btn,
    .login-btn{
        @extend %db;
        @extend %f16;
        @extend %tac;
        @extend %cfff;
        @extend %cp;
        @include tst(background-color,.3s);
        height: 40px;
        background-color: #999999;
        line-height: 40px;
        margin: 20px 0;
        &.active{
            background-color: $mc;
        }
    }
    .user-link{
        @extend %c9;
        @extend %f12;
        span{
            color: $mc;
        }
    }
    .user-relevant{
        @extend %c9;
        @extend %pr;
        @extend %clearfix;
        @extend %f12;
        margin: 10px 0 20px;
    }
    .remember-user{
        @extend %fl;
        @extend %cp;
        @extend %pr;
        padding-left: 16px;
        transition: color .5s;
        &.remember-active-user{
            color: $mc;
            .remember-type{
                &:after{
                    background-color: $mc;
                }
            }
        }
    }
    .remember-type{
        @extend %pa;
        @extend %t50;
        @extend %l0;
        margin-top: -6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid $mc;
        &:after{
            @extend %pa;
            @extend %t50;
            @extend %l50;
            margin-top: -3px;
            margin-left: -3px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            content: '';
            transition: background-color .5s;
            background-color: #fff;
        }
    }
    .back-password{
        @extend %fr;
        @extend %c9;
        &:hover{
            color: $mc;
        }
    }
</style>
