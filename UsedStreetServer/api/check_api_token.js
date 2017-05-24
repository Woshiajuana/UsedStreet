/**
 * Created by Administrator on 2017/4/24.
 */
/**用来创建和确认用户信息摘要*/
var jwt = require('jsonwebtoken');

/**检查用户会话*/
module.exports = function(req, res, next) {
    /**检查post的信息或者url查询参数或者头信息*/
    var token = req.body.token || req.query.token || req.headers['authorization'];
    /**解析 token*/
    if (token) {
        /**确认token*/
        jwt.verify(token, 'app.get(superSecret)', function(err, decoded) {
            if (err) {
                return res.json({
                    status: -1, message: 'token信息错误.'
                });
            } else {
                /**如果没问题就把解码后的信息保存到请求中，供后面的路由使用*/
                req.api_user = decoded;
                next();
            }
        });
    } else {
        /**如果没有token，则返回错误*/
        return res.send({
            status: -1,
            message: '没有提供token!'
        });
    }
};