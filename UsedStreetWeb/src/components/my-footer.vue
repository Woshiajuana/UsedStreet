<template>
    <footer class="footer-wrap">
        <div class="footer-top"></div>
        <div class="footer-bottom">
            <div class="footer-icon">
                <a title="新浪微博" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#xlwb-icon"></use>
                    </svg>
                </a>
                <a title="腾讯微博" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txwb-icon"></use>
                    </svg>
                </a>
                <a title="微信" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wx-icon"></use>
                    </svg>
                </a>
                <a title="QQ" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#qq-icon"></use>
                    </svg>
                </a>
                <a title="空间" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#kj-icon"></use>
                    </svg>
                </a>
                <a title="GitHub" class="icon-item" href="javascript:;">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gh-icon"></use>
                    </svg>
                </a>
            </div>
            <div class="footer-link">
                <a href="javascript:;">网站首页</a>
                <a href="javascript:;">企业合作</a>
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">意见反馈</a>
                <a href="javascript:;">人才合作</a>
                <a href="javascript:;">联系我们</a>
                <a href="http://www.owulia.com/page/about/about.html">留言弹幕</a>
                <a href="javascript:;">友情链接</a>
            </div>
            <p class="footer-copy">
                Copyright &copy; 2016 owulia.com All Rights Reserved | <a href="http://www.miitbeian.gov.cn/">粤ICP备16081042号</a>
            </p>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'my-footer'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .footer-wrap{
    }
    .footer-top{
        height: 476px;
        @extend %bgmc;
    }
    .footer-bottom{
        padding: 80px 0 50px;
        background-color: $mc;
    }
    .footer-icon,.footer-link,.footer-copy{
        @extend %pr;
        @extend %wm;
        @extend %tac;
    }
    .footer-icon{
        @extend %oh;
        height: 32px;
    }
    .icon-item{
        @extend %dib;
        @extend %oh;
        margin: 0 10px;
        width: 32px;
        height: 32px;
        opacity: 0.5;
        svg{
            @extend %w100;
            @extend %h100;
            @include tst(fill,.5s);
            fill: #ddd;
        }
        &:hover{
            svg{
                fill: #fff;
            }
        }
    }
    .footer-link{
        @extend %oh;
        @extend %f14;
        padding: 25px 0 15px;
        a{
            margin: 0 10px;
            color: #ddd;
            &:hover{
                text-decoration: none;
                border-bottom: 1px solid #ddd;
            }
        }
    }
    .footer-copy{
        @extend %cc;
        @extend %f12;
        a{
            @extend %cc;
        }
    }
</style>
