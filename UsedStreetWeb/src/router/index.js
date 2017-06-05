import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import Agreement from '../views/agreement/Agreement.vue'
import User from '../views/user/User.vue'
import Personal from '../views/user/children/Personal.vue'
import Data from '../views/user/children/Data.vue'
import Collect from '../views/user/children/Collect.vue'
import Opinion from '../views/user/children/Opinion.vue'
import Sell from '../views/user/children/Sell.vue'
import Set from '../views/user/children/Set.vue'
import Track from '../views/user/children/Track.vue'
import Details from '../views/details/Details.vue'

Vue.use(Router);

export default new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                position: 'fixed',
                is_show: true
            }
        },
        /**登录*/
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        /**注册*/
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        /**协议*/
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },
        /**用户*/
        {
            path: '/user',
            name: 'user',
            component: User,
            children: [
                /**中心*/
                {
                    path: ':user_name/personal',
                    name: 'personal',
                    component: Personal
                },
                /**资料*/
                {
                    path: ':user_name/data',
                    name: 'data',
                    component: Data
                },
                /**出售*/
                {
                    path: ':user_name/sell',
                    name: 'sell',
                    component: Sell
                },
                /**收藏*/
                {
                    path: ':user_name/collect',
                    name: 'collect',
                    component: Collect
                },
                /**足迹*/
                {
                    path: ':user_name/track',
                    name: 'track',
                    component: Track
                },
                /**反馈*/
                {
                    path: ':user_name/opinion',
                    name: 'opinion',
                    component: Opinion
                },
                /**设置*/
                {
                    path: ':user_name/set',
                    name: 'set',
                    component: Set
                }
            ]
        },
        {
            path: '/details/:goods_id',
            name: 'details',
            component: Details
        },
    ]
})
