/**
 * Created by Administrator on 2017/4/24.
 * 接口工具库
 */
/**引入分页查询工具库*/
const dbHelper = require('./page-query');
/**引入token工具*/
const jwt = require('jsonwebtoken');
/**引入数据模型*/
const user_module = require('../models/user');
const article_module = require('../models/article');
const label_module = require('../models/label');
/**引入express包*/
const express = require('express');
/**创建路由*/
const router = express.Router();
/**验证token的中间键*/
const check_api_token = require('./check_api_token');
/**发送邮件的插件*/
const sendMail = require('../lib/mail');

/**创建接口*/
/**用户登录*/
router.post('/blog_backstage/login',(req,res) => {
    /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
    if(!req.query.user_name) {
        res.json({status: 0, msg: '请输入帐号'});
        return;
    }
    if(!req.query.user_password) {
        res.json({status: 0, msg: '请输入密码'});
        return;
    }
    let user = {
        user_name: req.query.user_name,
        user_password: req.query.user_password
    };
    user_module.find(user, function(err, doc){
        if(doc.length){
            /**创建token*/
            let token = jwt.sign(user, 'app.get(superSecret)', {
                expiresIn: 60*60*24 /**设置过期时间*/
            });
            res.json({
                status: 1,
                msg: '登陆成功',
                data: {
                    token,
                    user: {
                        _id: doc[0]._id,
                        user_name: doc[0].user_name
                    }
                }
            });
        }else{
            res.json({
                status: 0,
                msg: '帐号或密码不正确'
            });
        }
    });
});

/**用户下线*/

/**用户创建*/
router.post('/blog_backstage/createUser',check_api_token,(req,res) => {
    /**这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')*/
    var user = req.query.user && JSON.parse( req.query.user );
    if (!user) {
        res.json({
            status: 0,
            msg: '竟敢调戏窝！'
        });
        return;
    }
    user.user_date = new Date();
    user.is_on_line = false;
    user_module.create(user, function(err, doc){
        if(err){
            res.json({
                status: 0,
                msg: '创建失败，是否已有该用户帐号'
            });
        }else{
            res.json({
                status: 1,
                msg: '创建成功'
            });
        }
    });
});

/**删除用户*/
router.get('/blog_backstage/deleteUser',check_api_token,(req,res) => {
    let user_name = req.query.user_name;
    user_module.remove({user_name},(err,doc) => {
        if (err) {
            res.json({
                status: 0,
                msg: '删除失败'
            });
        } else {
            res.json({
                status: 1,
                msg: '删除成功'
            });
        }
    })
});

/**用户获取*/
router.get('/blog_backstage/fetchUser',check_api_token,(req,res) => {
    user_module.find((err,doc) => {
        if (err) {
            res.json({
                status: 0,
                msg: '获取数据失败'
            });
        } else {
            res.json({
                status: 1,
                msg: '获取数据成功',
                data: {
                    users: doc
                }
            });
        }
    })
});

/**存储文章*/
router.post('/blog_backstage/uploadArticle',( req, res ) => {
    var article = req.query.article && JSON.parse( req.query.article );
    if (!article) {
        res.json({
            status: 0,
            msg: '文案都没写，竟敢调戏窝！'
        });
        return;
    }
    article.article_time = new Date();
    /**存储*/
    article_module.create(article, (err,doc) => {
        if (err) res.json({status: 0});
        else res.json({status: 1});
    });
});

/**获取文章内容*/
router.get('/blog_backstage/fetchArticle',check_api_token,(req,res) => {
    let fetch_condition = req.query.fetch_condition && JSON.parse(req.query.fetch_condition);
    article_module.find(fetch_condition,(err,doc) => {
        if (doc) {
            res.json({
                status: 1,
                data: {
                    articles: doc
                }
            });
        } else {
            res.json({
                status: 0,
                msg: '获取数据失败'
            })
        }
    })
});

/**发布或下架*/
router.get('/blog_backstage/offOrReleaseArticle',check_api_token,(req,res) => {
    var _id = req.query._id,
        article_is_publish = req.query.article_is_publish;
    article_module.update({_id},{$set:{article_is_publish:article_is_publish}},(err,doc) => {
        if (err) {
            res.json({
                status: 0,
                msg: '操作失败'
            });
        } else {
            res.json({
                status: 1,
                msg: '操作成功'
            });
        }
    })
});

/**修改文章*/
router.post('/blog_backstage/updateArticle',check_api_token,(req,res) => {
    let article = req.query.article && JSON.parse(req.query.article);
    article && (article.article_time = new Date());
    var _id = article._id;
    delete article._id;
    article_module.update({_id},article,(err,doc) => {
        if (err) {
            res.json({
                status: 0,
                msg: '修改失败'
            });
        } else {
            res.json({
                status: 1,
                msg: '修改成功'
            });
        }
    })
});

/**删除文章*/
router.get('/blog_backstage/deleteArticle',check_api_token,(req,res) => {
    let _id = req.query._id;
    article_module.remove({_id},(err,doc) => {
        if (err) {
            res.json({
                status: 0,
                msg: '删除失败'
            });
        } else {
            res.json({
                status: 1,
                msg: '删除成功'
            });
        }
    })
});

/**后台获取文章列表数据*/
router.get('/blog_backstage/fetchArticlesList',check_api_token,(req,res) => {
    let article_type = req.query.tab == 'all' ? '' : req.query.tab;
    let page = +req.query.page_num || 1;
    let rows = +req.query.page_size || 12;
    let key_word = req.query.key_word;
    let query = {};
    if(article_type) query.article_type = article_type;
    if(key_word) query.article_title =  eval("/"+key_word+"/ig");
    dbHelper.pageQuery(page, rows, article_module, '', query, {'article_time': -1}, (error, $page) => {
        if(error){
            res.json({status: 0, msg: '获取信息失败'});
        }else{
            res.json({
                status:1,
                data: {
                    article_arr: $page.results,
                    article_total: $page.total,
                    page_count: Math.ceil($page.pageCount)
                }
            });
        }
    });
});

/**存储标签*/
router.get('/blog_backstage/createLabel',check_api_token,( req, res ) => {
    var label = req.query.label && JSON.parse( req.query.label );
    if (!label) {
        res.json({
            status: 0,
            msg: '东西都没写，竟敢调戏窝！'
        });
        return;
    }
    label.label && label.label.trim() && label.label.toLowerCase();
    /**存储*/
    label_module.create(label, (err,doc) => {
        if (err) res.json({status: 0,msg:'创建失败，是否已有该标签'});
        else res.json({status: 1,msg:'创建成功'});
    });
});

/**删除标签*/
router.get('/blog_backstage/deleteLabel',check_api_token,( req, res ) => {
    var label = req.query.label && JSON.parse( req.query.label );
    if (!label) {
        res.json({
            status: 0,
            msg: '竟敢调戏窝！'
        });
        return;
    }
    label_module.remove(label, (err,doc) => {
        if (err) res.json({status: 0,msg:'删除失败'});
        else res.json({status: 1,msg:'删除成功'});
    });
});

/**获取标签*/
router.get('/blog_backstage/fetchLabel',check_api_token,( req, res ) => {
    label_module.find((err,doc) => {
        if (err) res.json({status: 0});
        else res.json({status: 1,data: {labels:doc}});
    });
});



/**获取文章列表数据*/
router.get('/blog/fetchArticlesList',(req,res) => {
    let article_type = req.query.tab == 'all' ? '' : req.query.tab;
    let page = +req.query.page_num || 1;
    let rows = +req.query.page_size || 12;
    let key_word = req.query.key_word;
    let query = {};
    if(article_type) query.article_type = article_type;
    if(key_word) query.article_title =  eval("/"+key_word+"/ig");
    query.article_is_publish = true;
    dbHelper.pageQuery(page, rows, article_module, '', query, {'article_time': -1}, (error, $page) => {
        if(error){
            res.json({status: 0, msg: '获取信息失败'});
        }else{
            res.json({
                status:1,
                data: {
                    article_arr: $page.results,
                    article_total: $page.total,
                    page_count: Math.floor($page.pageCount)
                }
            });
        }
    });
});

/**获取文章内容*/
router.get('/blog/fetchArticle',(req,res) => {
    let fetch_condition = req.query.fetch_condition && JSON.parse(req.query.fetch_condition);
    fetch_condition.article_is_publish = true;
    article_module.find(fetch_condition,(err,doc) => {
        if (doc) {
            res.json({
                status: 1,
                data: {
                    articles: doc
                }
            });
        } else {
            res.json({
                status: 0,
                msg: '获取数据失败'
            })
        }
    })
});

/**获取标签*/
router.get('/blog/fetchLabel',( req, res ) => {
    label_module.find((err,doc) => {
        if (err) res.json({status: 0});
        else res.json({status: 1,data: {labels:doc}});
    });
});

module.exports = router;