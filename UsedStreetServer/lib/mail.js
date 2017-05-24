/**
 *
 * @Description 邮件发送
 * 调用方法:sendMail('test@qq.com','这是测试邮件', '这是一封测试邮件');
 * @Created 2016/04/26 15:10
 * 技术只是解决问题的选择,而不是解决问题的根本...
 *
 */

var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./config')

smtpTransport = nodemailer.createTransport(smtpTransport({
    host: "smtp.mxhichina.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html,success_callback,fail_callback) {
    smtpTransport.sendMail({
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
    }, function (error, response) {
        if (error) {
            fail_callback && fail_callback()
        }else {
            success_callback && success_callback()
        }
    });
}

module.exports = sendMail;