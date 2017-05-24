/**
 * Created by Administrator on 2017/4/21.
 */
const models = require('../database/db');
const db = models.db;
const Schema = models.Schema;
/**定义了一个新的模型，但是此模式还未和users集合有关联*/
const userSchema = new Schema({
    user_name: {
        type: String,
        unique: true
    },
    user_password: String,
    user_date: Date
},{
    versionKey: false
});
/**与数据库users集合关联*/
module.exports = db.model('users', userSchema);