import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'

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
            component: Login
        },
        /**注册*/
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})
