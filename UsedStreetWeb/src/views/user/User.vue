<template>
    <div class="views-wrap user-view">
        <div class="user-menu">
            <a href="#/" class="user-menu-item active">
                <svg class="user-menu-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person-icon"></use>
                </svg>
                主页
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon" style="width: 16px;height: 16px;margin-top: -8px;">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#data-icon"></use>
                </svg>
                资料
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collect-icon"></use>
                </svg>
                出售
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sell-icon"></use>
                </svg>
                收藏
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon" style="width: 24px;height: 24px;margin-top: -12px;">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#track-icon"></use>
                </svg>
                足迹
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#opinion-icon"></use>
                </svg>
                反馈
            </a>
            <a href="#/" class="user-menu-item">
                <svg class="user-menu-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#set-icon"></use>
                </svg>
                设置
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'user'
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .user-view{
        @extend %pr;
        @extend %wm;
        @extend %clearfix;
        min-height: 500px;
    }
    .user-menu{
        @extend %fl;
        @extend %f16;
        width: 160px;
    }
    .user-menu-item{
        @extend %db;
        @extend %c9;
        @extend %pr;
        @extend %tac;
        @include tst(color,.3s);
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        &:hover{
            @extend %c3;
            .user-menu-item-icon{
                fill: #333;
            }
            &:after{
                border-left: 6px solid #333;
            }
        }
        &.active{
            &:hover{
                color: $mc;
                .user-menu-item-icon{
                    fill: $mc;
                }
                &:after{
                    border-left: 6px solid $mc;
                }
            }
            color: $mc;
            .user-menu-item-icon{
                fill: $mc;
            }
            &:after{
                border-left: 6px solid $mc;
            }
        }
        &:after{
            @extend %pa;
            @extend %t50;
            @include tst(border-left,.3s);
            right: 20px;
            margin-top: -6px;
            content: '';
            width: 0;
            height: 0;
            border-bottom: 6px solid transparent;
            border-top: 6px solid transparent;
            border-left: 6px solid #999;
        }
    }
    .user-menu-item-icon{
        @extend %pa;
        @extend %t50;
        @include tst(fill,.3s);
        left: 20px;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        fill: #999;
    }
    .user-container{
        @extend %fr;
        @extend %r0;
        width: 700px;
        min-height: 500px;
        background-color: #fff;
    }
</style>
