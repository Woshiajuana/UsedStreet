<template>
    <div class="carousel-wrap">
        <ul class="carousel-inner">
            <li class="carousel-item active">
                <a class="carousel-item-main" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-top" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-bottom" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
            </li>
            <li class="carousel-item">
                <a class="carousel-item-main" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-top" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-bottom" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
            </li>
            <li class="carousel-item">
                <a class="carousel-item-main" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-top" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
                <a class="carousel-item-minor-bottom" href="#">
                    <!--<img class="carousel-img" src="../assets/img/1.jpg">-->
                </a>
            </li>
        </ul>
        <div class="carousel-trigger">
           <i class="carousel-trigger-item active"></i>
           <i class="carousel-trigger-item"></i>
           <i class="carousel-trigger-item"></i>
        </div>
        <i class="carousel-prev"></i>
        <i class="carousel-next"></i>
    </div>
</template>
<script>
    export default {
        name: 'aj-carousel',
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .carousel-wrap{
        @extend %wm;
        height: 320px;
    }
    .carousel-wrap,
    .carousel-inner{
        @extend %pr;
        @extend %h100;
    }
    .carousel-item{
        @extend %pa;
        @extend %dn;
        @extend %w100;
        @extend %l0;
        @extend %t0;
        @extend %h100;
        &.active{
            @extend %db;
        }
    }
    .carousel-item-main{
        @extend %pa;
        @extend %h100;
        @extend %t0;
        @extend %l0;
        width: 67%;
        background-color: #03133d;
    }
    .carousel-item-minor-top{
        @extend %pa;
        @extend %r0;
        @extend %t0;
        height: 50%;
        width: 33%;
        background-color: #65ce85;
    }
    .carousel-item-minor-bottom{
        @extend %pa;
        @extend %r0;
        @extend %b0;
        height: 50%;
        width: 33%;
        background-color: #ff2800;
    }
    .carousel-trigger{
        @extend %pa;
        @extend %r0;
        @extend %l0;
        @extend %tac;
        @extend %fs0;
        @extend %tac;
        bottom: 30px;
    }
    .carousel-trigger-item{
        @extend %cp;
        @extend %dib;
        width: 30px;
        height: 5px;
        background-color: #fff;
        margin: 0 5px;
        &.active{
            @extend %bgac;
        }
    }
    .carousel-prev{
        @extend %pa;
        @extend %l0;
        @extend %t50;
        @extend %cp;
        width: 30px;
        height: 60px;
        margin-top: -30px;
        background-color: aqua;
    }
    .carousel-next{
        @extend %pa;
        @extend %r0;
        @extend %cp;
        @extend %t50;
        width: 30px;
        height: 60px;
        margin-top: -30px;
        background-color: aqua;
    }
</style>
