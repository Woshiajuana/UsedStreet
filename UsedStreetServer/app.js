/**
 * 创建服务端后台主要文件
 * */

/**引入编写好的api*/
const api = require('./api/interface');

/**引入文件模块*/
const fs = require('fs');

/**引入处理路径的模块*/
const path = require('path');

/**引入处理post数据的模块*/
const bodyParser = require('body-parser');

/**引入Express*/
const express = require('express');

/**创建一个express实例*/
const app = express();

/**解决跨域问题*/
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(api);

/**监听8088端口*/
app.listen(8088);
console.log('success listen…………');