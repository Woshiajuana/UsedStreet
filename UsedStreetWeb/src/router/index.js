import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import Agreement from '../views/agreement/Agreement.vue'
import User from '../views/user/User.vue'

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
                position: 'static',
                is_show: false
            }
        },
        /**注册*/
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                position: 'static',
                is_show: false
            }
        },
        /**协议*/
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement,
            meta: {
                position: 'static',
                is_show: false
            }
        },
        /**用户*/
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: {
                position: 'static',
                is_show: false
            }
        }
    ]
})
