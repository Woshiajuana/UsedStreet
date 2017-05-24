/**
 * Created by Administrator on 2017/5/17.
 */
const models = require('../database/db');
const db = models.db;
const Schema = models.Schema;
/**定义模型*/
const articleSchema = new Schema({
    article_title: String,
    article_type: String,
    article_time: Date,
    article_con: String,
    article_is_publish: Boolean
},{
    versionKey: false
});
module.exports = db.model('articles', articleSchema);