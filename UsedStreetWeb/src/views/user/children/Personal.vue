<template>
    <div class="user-container personal-wrap">
        <h1 class="user-container-title">我的主页：</h1>
        <div class="goods-list">
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
        </div>
    </div>
</template>
<script>
    import GoodsListItem from '../../../components/goods-list-item.vue'
    export default {
        name: 'personal',
        components: {
            GoodsListItem
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .goods-list{
        margin: 10px 20px;
    }
    .user-container-title{
        @extend %f16;
        @extend %fwn;
        border-left: 5px solid $mc;
        padding-left: 8px;
        color: #333;
    }
</style>
