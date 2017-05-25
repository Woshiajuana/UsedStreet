<template>
    <div class="carousel-wrap">
        <div class="carousel-inner-box">
            <a class="carousel-inner-item"
               v-for="(item,index) in carousel_arr"
               :class="{'active': index == carousel_index}"
               :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
               :href="item.url"></a>
        </div>
        <div class="container-minor-box">
            <div class="container-minor"
                 :class="{'active': is_animate}"
                 :style="{top: top + 'px'}">
                <a class="carousel-minor-item"
                   v-for="(item,index) in carouselArr"
                   :style="{ backgroundImage: 'url(' + item.img_url + ')' }"
                   :href="item.url"></a>
            </div>
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
                top: -480,
                is_animate: true,
                carousel_length: (this.carousel_arr && this.carousel_arr.length) || 0,
                carousel_index: this.active_index || 0
            }
        },
        computed: {
            carouselArr () {
                if(!this.carousel_arr) return [];
                var arr = [...this.carousel_arr];
                arr.push(this.carousel_arr[0]);
                arr.push(this.carousel_arr[1]);
                arr.unshift(this.carousel_arr[this.carousel_arr.length-1]);
                arr.unshift(this.carousel_arr[this.carousel_arr.length-2]);
                return arr;
            }
        },
        methods: {
            prevFun () {
                this.carousel_index--;
                if ( this.carousel_index < 0) {
                    this.carousel_index = this.carousel_length -1;
                }
                this.is_animate = true;
                this.top = this.top + 160;
                if ( this.carousel_index == this.carousel_length - 3 ) {
                    setTimeout( () => {
                        this.is_animate = false;
                        this.top = -480 - (this.carousel_length - 3) * 160;
                    },500)
                }
            },
            nextFun () {
                this.carousel_index++;
                if ( this.carousel_index >= this.carousel_length ) {
                    this.carousel_index = 0
                }
                this.is_animate = true;
                this.top = this.top - 160;
                if( this.carousel_index == this.carousel_length - 1 ){
                    setTimeout( () => {
                        this.is_animate = false;
                        this.top = -320;
                    },500)
                }


            },
            triggerFun ( index ) {
                this.carousel_index = index;
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .carousel-wrap{
        @extend %wm;
        @extend %oh;
        @extend %pr;
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
    .carousel-inner-box{
        @extend %pa;
        @extend %h100;
        @extend %t0;
        @extend %l0;
        width: 67%;
    }
    .carousel-inner-item{
        @extend %pa;
        @extend %w100;
        @extend %l0;
        @extend %t0;
        @extend %h100;
        @extend %o0;
        @include tst(opacity,.5s);
        z-index: 0;
        &.active{
            @extend %o1;
            z-index: 1;
        }
    }
    .carousel-minor-item,
    .carousel-inner-item{
        @extend %bsc;
        background-image: url("../assets/img/1.jpg");
        background-position: center;
    }
    .container-minor-box{
        @extend %pa;
        @extend %r0;
        @extend %b0;
        @extend %h100;
        width: 33%;
    }
    .container-minor{
        @extend %pa;
        @extend %t0;
        @extend %l0;
        @extend %w100;
        &.active{
            @include tst(top,.5s);
        }
    }
    .carousel-minor-item{
        @extend %db;
        height: 160px;
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
        @include tst(background-color,.5s);
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
