<template>
    <div class="user-container personal-wrap">
        <h1 class="user-container-title">我的主页：</h1>
    </div>
</template>
<script>
    export default {
        name: 'personal'
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
