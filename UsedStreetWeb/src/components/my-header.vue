<template>
    <header class="header-wrap" id="header-wrap" :style="{'position': headerPosition}">
        <div class="header-content">
            <a href="#/" class="header-logo">
                <svg class="logo-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
                </svg>
            </a>
            <nav class="nav-wrap">
                <router-link to="/" exact class="nav-item">
                    <svg class="find-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#find-icon"></use>
                    </svg>
                    发现
                </router-link>
                <router-link to="/filter" class="nav-item">
                    <svg class="about-icon" style="width: 19px;height: 19px;">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#filter-icon"></use>
                    </svg>
                    淘货
                </router-link>
                <router-link to="/about" class="nav-item">
                    <svg class="about-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#about-icon"></use>
                    </svg>
                    关于
                </router-link>
            </nav>
            <div class="search-wrap"
                :class="{'active': is_input}">
                <input type="text" class="search-input" @blur="is_input = false" @focus="is_input = true" v-model="key_words" placeholder="搜索">
                <i class="search-clear" v-show="key_words" @click="clearInput">
                    <svg class="clear-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#clear-icon"></use>
                    </svg>
                </i>
                <i class="search-btn">
                    <svg class="search-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search-icon"></use>
                    </svg>
                </i>
            </div>
            <div class="user-link-box">
                <a href="#/login" class="login-link">登录</a>
                <a href="#/register" class="register-link">注册</a>
            </div>
            <div class="user-info-box hiddenImportant">
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
                            <svg class="user-info-link-icon" style="width: 18px;height: 18px">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sell-icon"></use>
                            </svg>
                        </i>
                        <span>出售</span>
                    </a>
                    <a class="user-info-link" href="#/">
                        <i>
                            <svg class="user-info-link-icon" style="width: 18px;height: 18px;">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#opinion-icon"></use>
                            </svg>
                        </i>
                        <span>意见与反馈</span>
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
                key_words: '',
                is_input: false
            }
        },
        computed: {
            headerPosition () {
                return this.$route.meta.position || 'fixed';
            }
        },
        methods: {
            clearInput () {
                this.key_words = '';
                this.$el.getElementsByTagName('input')[0].focus();
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    //导航条
    .nav-wrap{
        @extend %pa;
        @extend %f16;
        top: 52px;
        left: 100px;
    }
    .nav-item{
        @extend %c6;
        @include tst(background-color,.5s);
        background-color: transparent;
        padding: 10px 16px;
        &.router-link-active{
            color: $mc;
            svg{
                fill: $mc;
            }
            &:hover{
                background-color: transparent;
            }
        }
        &:hover{
            background-color: #ddd;
        }
    }
    .find-icon,
    .about-icon{
        @extend %vam;
        @extend %pr;
        top: -2px;
        width: 22px;
        height: 22px;
        fill: #999;
    }
    //搜索
    .search-wrap{
        @extend %pa;
        @extend %r0;
        @include tst(all,.5s);
        top: 80px;
        width: 300px;
        height: 32px;
        padding: 0 10px;
        border-bottom: 1px solid #999;
        &.active{
            border-bottom: 1px solid $mc;
            &:after,
            &:before{
                background-color: $mc;
            }
        }
        &:after,
        &:before{
            content: '';
            @extend %pa;
            @extend %b0;
            width: 1px;
            height: 5px;
            background-color: #999;
        }
        &:after{
            @extend %r0;
        }
        &:before{
            @extend %l0;
        }
    }
    .search-input{
        @extend %pa;
        left: 10px;
        width: 250px;
        border: none;
        height: 32px;
        line-height: 32px;
        background-color: transparent;
    }
    .search-clear{
        @extend %pa;
        @extend %t50;
        @extend %cp;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        right: 35px;
        &:hover{
            .clear-icon{
                fill: #999;
            }
        }
    }
    .clear-icon{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        @include tst(fill,.3s);
        margin-top: -8px;
        margin-left: -8px;
        width: 16px;
        height: 16px;
        fill: #ccc;
    }
    .search-btn{
        @extend %pa;
        @extend %cp;
        @extend %t50;
        right: 10px;
        width: 24px;
        height: 24px;
        margin-top: -12px;
        .search-icon{
            @extend %w100;
            @extend %h100;
            fill: #999;
        }
        &:hover{
            .search-icon{
                fill: $mc;
            }
        }
    }
    //头部
    .header-wrap{
        @extend %pf;
        @extend %t0;
        @extend %w100;
        @extend %bgmc;
        z-index: 99;
        height: 170px;
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
            width: 60px;
            height: 30px;
            line-height: 30px;
            border: 1px solid transparent;
            &.register-link{
                border: 1px solid #999;
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
            background-color: #ccc;
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
