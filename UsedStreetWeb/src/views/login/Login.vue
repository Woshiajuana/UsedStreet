<template>
    <div class="views-wrap login-view">
        <div class="login-box">
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_name" :placeholder="'请输入帐号'"></user-input>
            <user-input :styles="'margin:10px 0'" :type="'text'" v-model="user_password" :placeholder="'请输入密码'"></user-input>
        </div>
    </div>
</template>
<script>
    import UserInput from '../../components/user-input.vue'
    export default {
        name: 'login',
        data () {
            return {
                user_name: '',
                user_password: ''
            }
        },
        components: {
            UserInput
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .login-view{
        padding: 200px 0 50px;
    }
    .login-box{
        @extend %ma;
        @extend %bsb;
        width: 400px;
        height: 480px;
        padding: 50px;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
        background-color: #fff;
    }
</style>
