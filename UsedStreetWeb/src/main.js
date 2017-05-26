
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import RetrunTop from './assets/lib/ReturnTop';

Vue.config.productionTip = false;
Vue.use(RetrunTop);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
