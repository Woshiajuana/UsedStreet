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

Vue.use(Router);

export default new Router({
    routes: [
        /**首页*/
        {
            path: '/',
            name: 'home',
            component: Home
        },
        /**登录*/
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                position: 'relative',
                is_show: false
            }
        },
        /**注册*/
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                position: 'relative',
                is_show: false
            }
        },
        /**协议*/
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement,
            meta: {
                position: 'relative',
                is_show: false
            }
        },
        /**用户*/
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: {
                position: 'relative',
                is_show: false
            },
            children: [
                /**中心*/
                {
                    path: 'personal',
                    name: 'personal',
                    component: Personal,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**资料*/
                {
                    path: 'data',
                    name: 'data',
                    component: Data,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**出售*/
                {
                    path: 'sell',
                    name: 'sell',
                    component: Sell,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**收藏*/
                {
                    path: 'collect',
                    name: 'collect',
                    component: Collect,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**足迹*/
                {
                    path: 'track',
                    name: 'track',
                    component: Track,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**反馈*/
                {
                    path: 'opinion',
                    name: 'opinion',
                    component: Opinion,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                },
                /**设置*/
                {
                    path: 'set',
                    name: 'set',
                    component: Set,
                    meta: {
                        position: 'relative',
                        is_show: false
                    }
                }
            ]
        }
    ]
})
