
'use strict';

/**数据库连接地址*/
const DB_URL = 'mongodb://localhost/blog';

/**引入包mongoose*/
const mongoose = require('mongoose');

/**连接数据库*/
const db = mongoose.connect(DB_URL, {server:{auto_reconnect:true}}).connection;

/**监听第一次连接数据库事件*/
db.once('connected', () => {
    console.log('连接数据库成功');
});

/**监听错误事件*/
db.on('error', (error) => {
    console.error('数据库异常出错：' + error);
    /**断开连接*/
    mongoose.disconnect()
});

/**监听关闭数据库事件*/
db.on('close', () => {
   console.log('数据库断开，重新连接数据库');
   /**重新连接数据库*/
   mongoose.connect(DB_URL, {server:{auto_reconnect:true}});
});


/**创建模型*/
const Schema = mongoose.Schema;

/**暴露出接口*/
module.exports = {
    Schema: Schema,
    db: db
};