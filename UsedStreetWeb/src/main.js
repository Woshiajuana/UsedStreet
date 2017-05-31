
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import RetrunTop from './assets/lib/ReturnTop';
import PopupNews from './assets/lib/PopupNews';

Vue.config.productionTip = false;
Vue.use(RetrunTop);
Vue.use(PopupNews);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
