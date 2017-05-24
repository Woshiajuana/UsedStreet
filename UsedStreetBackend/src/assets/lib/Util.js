/**
 * Created by Administrator on 2017/5/2.
 */
import axios from 'axios'
import Tool from './Tool'
import router from '../../router/index'
const Util = function (win) {

    /**
     * 定义一系列变量
     * */
    var Util = {},
        base_url = '//www.owulia.com/ink';

    /**
     * 根据是线上环境还是本地环境，选取不同的server_url的值
     * */
    if (win.location.href.indexOf('localhost') > -1){
        base_url = 'http://localhost:8088';
    }

    /**示例*/
    Util.test = function (success_callback,fail_callback) {
        Util.ajax( 'url',{}, 'GET', success_callback, fail_callback );
    };

    /**
     * 公用请求ajax的方式
     * */
    Util.ajax = function (path, data, http_method, success_callback, fail_callback) {
        axios({
            url: path,
            method: http_method,
            baseURL: base_url,
            params: data
        }).then( function (response) {
            var data = response.data;
            /**没有登录跳转登录页面*/
            if (data.status === -1) {
                Tool.dataToSessionStorageOperate.remove('user');
                Tool.dataToSessionStorageOperate.remove('token');
                router.push('/login');
            } else if (data.status === 2) {
                router.push('/error');
            } else {
                success_callback && success_callback(data);
            }
        }).catch( function (error) {
            fail_callback && fail_callback( error );
        });
    };

    return Util;

} (window);
export default Util;
