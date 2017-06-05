<template>
    <div class="user-container">
        <h1 class="user-container-title">我要出售：</h1>
        <div class="user-container-con user-data-con">
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'标题（一个好的标题可以大大增加吸引力哦）：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'邮箱：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_phone" :placeholder="'手机：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'QQ：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_email" :placeholder="'微信：'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" :selectArr="selectArr" :placeholder="'类别：'"></user-input>


            <upload-img :prompt="'图片：'"></upload-img>
            <p class="data-btn-con">
                <i class="data-btn data-sure-btn">提交</i>
            </p>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../../components/user-input.vue'
    import UploadImg from '../../../components/upload-img.vue'
    export default {
        name: 'sell',
        data () {
            return {
                user_name: '',
                user_email: '',
                user_phone: '',
                selectArr: [
                    { key: '出行类'},
                    { key: '图书类'},
                    { key: '电子商品类'},
                    { key: '服饰鞋子类'},
                    { key: '日常生活类'},
                    { key: '更多'}
                ]
            }
        },
        components: {
            UserInput,
            UploadImg
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
</style>
