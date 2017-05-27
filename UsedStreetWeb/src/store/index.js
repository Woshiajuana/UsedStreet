/**
 * Created by Administrator on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
Vue.use(Vuex);

/**
 * 数据存储
 * */
const state = {
    scroll_top: 0
};

/**
 * 模块
 * */
const modules = {

};

/**
 * 提交异步请求
 * */
const actions = {

};

/**
 * 提交同步请求
 * */
const mutations = {
    /**设置滚动高度*/
    [ types.SET_SCROLL_TOP ] ( state, scroll_top ) {
        state.scroll_top = scroll_top;
    }
};

export default new Vuex.Store({
    state,
    modules,
    actions,
    mutations
})
