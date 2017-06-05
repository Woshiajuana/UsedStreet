<template>
    <div class="user-container personal-wrap">
        <h1 class="user-container-title">我的主页：</h1>
        <div class="user-container-con">
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <goods-list-item></goods-list-item>
            <null-data :prompt="'没啥数据哦！'" :hrefUrl="'#/'" :hrefText="'再逛逛'"></null-data>
        </div>
    </div>
</template>
<script>
    import GoodsListItem from '../../../components/goods-list-item.vue'
    import NullData from '../../../components/null-data.vue'
    export default {
        name: 'personal',
        components: {
            GoodsListItem,
            NullData
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .user-container-title{
        @extend %f16;
        @extend %fwn;
        border-left: 5px solid $mc;
        padding-left: 8px;
        color: #333;
    }
</style>
