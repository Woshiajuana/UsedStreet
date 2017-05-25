<template>
    <div class="carousel-wrap">
        <div class="carousel-inner">
            <transition-group  tag="p" name="fade">
                <div class="carousel-item"
                     v-for="(item,index) in carousel_arr"
                     v-bind:key="item"
                     :class="{'active': index == carousel_index}">
                    <a class="carousel-item-main"
                       :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
                       :href="item.url"></a>
                    <a class="carousel-item-minor-top"
                       :style="{ backgroundImage: carousel_arr[index + 1] ? 'url(' + carousel_arr[index + 1].img_url + ')' : 'url(' + carousel_arr[0].img_url + ')' }"
                       :href="carousel_arr[index + 1] ? carousel_arr[index + 1].url : carousel_arr[0].url"></a>
                    <a class="carousel-item-minor-bottom"
                       :style="{ backgroundImage: carousel_arr[index + 2] ? 'url(' + carousel_arr[index + 2].img_url + ')' : carousel_arr[index + 1] ? 'url(' + carousel_arr[0].img_url + ')' : 'url(' + carousel_arr[1].img_url + ')' }"
                       :href="carousel_arr[index + 2] ? carousel_arr[index + 2].url : carousel_arr[0].url"></a>
                </div>
            </transition-group>
        </div>
        <div class="carousel-trigger">
           <i class="carousel-trigger-item"
              v-for="(item,index) in carousel_arr"
              @click="triggerFun(index)"
              :class="{'active': index == carousel_index}"></i>
        </div>
        <i class="carousel-prev" @click.stop="prevFun">
            <svg class="carousel-arrow-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-icon"></use>
            </svg>
        </i>
        <i class="carousel-next" @click.stop="nextFun">
            <svg class="carousel-arrow-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-icon"></use>
            </svg>
        </i>
    </div>
</template>
<script>
    export default {
        name: 'aj-carousel',
        props: ['carousel_arr','active_index'],
        data () {
            return {
                is_animate: false,
                is_left: false,
                is_right: false,
                carousel_length: (this.carousel_arr && this.carousel_arr.length) || 0,
                carousel_index: this.active_index || 0
            }
        },
        methods: {
            prevFun () {
                if( this.carousel_index <= 0 ) this.carousel_index = this.carousel_length;
                this.carousel_index--;
            },
            nextFun () {
                this.is_left = true;
                this.is_animate = true;
                setTimeout(() => {
                    this.is_animate = false;
                },500)
                if( this.carousel_index >= ( this.carousel_length - 1 ) ) this.carousel_index = -1;
                this.carousel_index++;
            },
            triggerFun ( index ) {
                this.carousel_index = index;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-leave-active{
        .carousel-item-minor-top,
        .carousel-item-minor-bottom{
            @include tft((0,-100%,0));
        }
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .carousel-wrap{
        @extend %wm;
        @extend %oh;
        height: 320px;
        &:hover{
            .carousel-prev{
                @extend %l0;
                @extend %o1;
            }
            .carousel-next{
                @extend %r0;
                @extend %o1;
            }
        }
    }
    .carousel-wrap,
    .carousel-inner{
        @extend %pr;
        @extend %h100;
    }
    .carousel-item{
        @extend %pa;
        @extend %db;
        @extend %w100;
        @extend %l0;
        @extend %t0;
        @extend %h100;
        z-index: 0;
        &.active{
            @extend %db;
            z-index: 1;
            .carousel-item-main{
                @extend %o1;
            }
        }
        &.left{
            .carousel-item-minor-top,
            .carousel-item-minor-bottom{
                @include tft((0,100%,0));
            }
        }
        &.right{
            .carousel-item-main{

            }
            .carousel-item-minor-top,
            .carousel-item-minor-bottom{
                @include tft((0,-100%,0));
            }
        }
        &.next{
            .carousel-item-minor-top,
            .carousel-item-minor-bottom{
                @include tft((0,100%,0));
            }
        }
    }

    .carousel-item-main,
    .carousel-item-minor-top,
    .carousel-item-minor-bottom{
        @extend %pa;
        @extend %bsc;
        @include tst(all,.5s);
        background-image: url("../assets/img/1.jpg");
        background-position: center;
    }
    .carousel-item-main{
        @extend %h100;
        @extend %t0;
        @extend %l0;
        @extend %o0;
        width: 67%;
        background-color: #03133d;
    }
    .carousel-item-minor-top{
        @extend %r0;
        @extend %t0;
        height: 50%;
        width: 33%;
        background-color: #65ce85;
    }
    .carousel-item-minor-bottom{
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
        bottom: 20px;
        z-index: 2;
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

    .carousel-prev,
    .carousel-next{
        @extend %pa;
        @extend %t50;
        @extend %cp;
        @extend %o0;
        @include tst(all,.5s);
        @include br(5px);
        width: 30px;
        z-index: 2;
        height: 60px;
        margin-top: -30px;
        background-color: rgba(0,0,0,0.5);
    }
    .carousel-prev{
        left: -30px;
    }
    .carousel-next{
        right: -30px;
        .carousel-arrow-icon{
            @include tfr(180deg)
        }
    }
    .carousel-arrow-icon{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        margin-left: -15px;
        fill: #fff;
    }
</style>
