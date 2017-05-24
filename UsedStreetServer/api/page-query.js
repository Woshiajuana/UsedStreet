/**
 * Created by Administrator on 2017/4/25.
 */
var async = require('async');

var pageQuery = function (page, pageSize, Model, populate, queryParams, sortParams, callback) {
    var start = (page - 1) * pageSize;
    var $page = {
        pageNumber: page
    };
    async.parallel({
        count: function (done) {  // 查询数量
            Model.count(queryParams).exec(function (err, count) {
                done(err, count);
            });
        },
        records: function (done) {   // 查询一页的记录
            Model.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams).exec(function (err, doc) {
                done(err, doc);
            });
        }
    }, function (err, results) {
        var count = results.count;
        $page.total = count;
        $page.pageCount = (count - 1) / pageSize + 1;
        $page.results = results.records;
        $page.results.forEach((item,index) => {
            item.article_con && (item.article_con = '') && delete item.article_con;
        });
        callback(err, $page);
    });
};

module.exports = {
    pageQuery: pageQuery
};