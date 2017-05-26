<template>
    <header class="header-wrap">
        <div class="header-content">
            <a href="#/" class="header-logo">
                <svg class="logo-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
                </svg>
            </a>
            <div class="search-wrap"
                :class="{'active': is_input}">
                <input type="text" class="search-input" placeholder="搜索">
                <i class="search-btn" @click="is_input = !is_input">
                    <svg class="search-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search-icon"></use>
                    </svg>
                </i>
            </div>

            <div class="user-link-box">
                <a href="#/login" class="login-link">登录</a>
                <a href="#/register" class="register-link">注册</a>
            </div>
            <div class="user-info-box">
                <img src="../assets/img/1.jpg" alt="" class="user-header">
                <div class="user-info">
                    <span class="user-name">woshiajuana</span>
                    <a class="user-info-link" href="#/">
                        <i>
                            <svg class="user-info-link-icon">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person-icon"></use>
                            </svg>
                        </i>
                        <span>我的主页</span>
                    </a>
                    <a class="user-info-link" href="#/">
                        <i>
                            <svg class="user-info-link-icon" style="width: 18px;height: 18px">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collect-icon"></use>
                            </svg>
                        </i>
                        <span>我的收藏</span>
                    </a>
                    <a class="user-info-link" href="#/">
                        <i>
                            <svg class="user-info-link-icon">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#exit-icon"></use>
                            </svg>
                        </i>
                        <span>退出</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'my-header',
        data () {
            return {
                is_input: false
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    //搜索
    .search-wrap{
        @extend %pa;
        @include tst(all,.5s);
        left: 100px;
        top: 60px;
        width: 24px;
        height: 32px;
        padding: 0 10px;
        border-bottom: 1px solid transparent;
        &.active{
            width: 200px;
            border-bottom: 1px solid $mc;
            &:after,
            &:before{
                background-color: $mc;
            }
            .search-icon{
                fill: $mc;
            }
        }
        &:after,
        &:before{
            content: '';
            @extend %pa;
            @extend %b0;
            width: 1px;
            height: 5px;
            background-color: transparent;
        }
        &:after{
            @extend %r0;
        }
        &:before{
            @extend %l0;
        }
    }
    .search-input{
        @extend %dn;
    }
    .search-btn{
        @extend %pa;
        @extend %cp;
        @extend %t50;
        left: 10px;
        width: 24px;
        height: 24px;
        margin-top: -12px;
        .search-icon{
            @extend %w100;
            @extend %h100;
            fill: #999;
        }
    }

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
            fill: $mc;
        }
    }
    .user-link-box{
        @extend %pa;
        @extend %r0;
        @extend %f14;
        top: 25px;
        a{
            @extend %dib;
            @extend %tac;
            @include br(8px);
            width: 80px;
            height: 30px;
            line-height: 30px;
            border: 1px solid transparent;
            &.register-link{
                border: 1px solid $mc;
            }
        }
    }
    .login-link{
        @extend %c6;
        &:hover{
            color: $mc;
        }
    }
    .register-link{
        @include tst(background-color,.3s);
        color: $mc;
        &:hover{
            @extend %cfff;
            background-color: #58B7FF;
        }
    }
    .user-info-box{
        @extend %pa;
        @extend %f14;
        @extend %cp;
        @extend %r0;
        top: 20px;
        padding: 0 16px 16px 16px;
        &:after{
            @extend %pa;
            @extend %t50;
            @extend %r0;
            margin-top: -10px;
            content: '';
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #999;
        }
        &:hover{
            .user-info{
                @extend %db;
            }
        }
    }
    .user-header{
        @extend %vam;
        @extend %bsb;
        @include br(50%);
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
    }
    .user-info{
        @extend %pa;
        @extend %dn;
        @extend %r0;
        width: 120px;
        background-color: #fff;
        padding: 10px 0;
        border: 1px solid #ddd;
        top: 50px;
        >span,a{
            @extend %db;
            height: 35px;
            line-height: 35px;
            padding: 0 10px;
        }
        &:after{
            @extend %pa;
            right: 25px;
            top: -6px;
            content: '';
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #fff;
        }
        &:before{
            @extend %pa;
            right: 24px;
            top: -7px;
            content: '';
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #ddd
        }
    }
    .user-name{
        @extend %f14;
        @extend %c3;
    }
    .user-info-link{
        @extend %f12;
        @extend %c6;
        @include tst(all,.5s);
        background-color: #fff;
        span,i{
            @extend %vam;
        }
        i{
            @extend %pr;
            @extend %dib;
            width: 20px;
            height: 20px;
            line-height: 20px;
        }
        &:hover{
            background-color: #ddd;
            color: $mc;
            .user-info-link-icon{
                fill: $mc;
            }
        }
    }
    .user-info-link-icon{
        @include tst(fill,.5s);
        width: 20px;
        height: 20px;
        fill: #999;
    }
</style>
