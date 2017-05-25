<template>
    <header class="header-wrap">
        <div class="header-content">
            <a href="#/" class="header-logo">
                <svg class="logo-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
                </svg>
            </a>

            <div class="user-link-box">
                <a href="#/login" class="login-link">登录</a>
                <a href="#/register" class="register-link">注册</a>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'my-header'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .header-wrap{
        @extend %pf;
        @extend %t0;
        @extend %w100;
        z-index: 99;
        height: 170px;;
    }
    .header-content{
        @extend %wm;
        @extend %pr;
        height: 130px;
    }
    .header-logo{
        @extend %pa;
        top: 20px;
        width: 72px;
        height: 90px;
        .logo-icon{
            @extend %vam;
            width: 72px;
            height: 90px;
            fill: #ffd000;
        }
    }
    .user-link-box{
        @extend %pa;
        @extend %r0;
        @extend %f16;
        top: 0;
        height: 90px;
        line-height: 90px;
        a{
            margin-left: 10px;
        }
    }
    .login-link{
        @extend %c6;
    }
    .register-link{
        color: #ffd000;
    }
</style>
