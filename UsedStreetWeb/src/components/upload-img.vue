<template>
    <div class="upload-img-wrap">
        <p class="prompt-title" v-text="prompt"></p>
        <ul class="upload-img-con">
            <li class="upload-img-item">
                <img class="upload-img" src="../assets/img/1.jpg" alt="">
                <div class="upload-img-operate">
                    <i class="upload-img-delete" title="删除">
                        <svg class="upload-img-delete-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-icon"></use>
                        </svg>
                    </i>
                </div>
            </li>
            <li class="upload-img-item upload-add">
                <svg class="upload-img-add-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add-icon"></use>
                </svg>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'upload-img',
        props: [ 'prompt' ]
    }
</script>
<style lang="scss">
    @import '../assets/scss/define';
    .upload-img-operate{
        @extend %pa;
        @extend %tac;
        @extend %l0;
        @extend %dn;
        @extend %r0;
        @extend %b0;
        @extend %t0;
        background-color: rgba(255,255,255,.5);
    }
    .upload-img-delete{
        @extend %pa;
        @extend %l50;
        @extend %t50;
        @extend %cp;
        width: 20px;
        line-height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        height: 20px;
    }
    .upload-img-delete-icon{
        width: 20px;
        height: 20px;
        fill: #FF4949;
    }
    .prompt-title{
        @extend %f12;
        @extend %c9;
        height: 30px;
        line-height: 30px;
    }
    .upload-img-con{
        @extend %clearfix;
        margin: 10px 0;
    }
    .upload-img-item{
        @extend %pr;
        @extend %fl;
        @extend %oh;
        width: 80px;
        height: 80px;
        margin: 0 10px 10px 0;
        &:hover{
            .upload-img-operate{
                @extend %db;
            }
            .upload-img{
                -webkit-filter: blur(3px);
                -moz-filter: blur(3px);
                -ms-filter: blur(3px);
                filter: blur(3px);

            }
        }
    }
    .upload-img{
        @extend %db;
        @extend %w100;
        @extend %h100;
    }
    .upload-add{
        @extend %bsb;
        @extend %cp;
        border: 2px solid #ccc;
    }
    .upload-img-add-icon{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        margin-left: -20px;
        fill: #ccc;
    }
</style>
