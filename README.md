# UsedStreet

技术栈：vue2 + vuex + vue-router + vux + axios + Element + node.js + express + mongodb

## 版本：
v1.0.0

## 简介：
校园二手街前端基于vue2，后端node.js，数据库mongodb搭建而成，前后端分离。<br>

## 目标功能
- [ ] 用户登录，可邮箱登录
- [ ] 用户注册，昵称、邮箱、密码
- [ ] 忘记密码，可邮箱找回
- [ ] 用户个人中心
- [ ] 修改密码
- [ ] 默认用户头像，可上传头像修改
- [ ] 邮箱验证
- [ ] 卖商品，填写商品详情
- [ ] 可上传商品图片，没有图片默认一张无图图片，最多上传5张
- [ ] 首页轮播推广效果
- [ ] 首页关键字搜索商品、店铺等
- [ ] 首页商品列表
- [ ] 用户收藏商品
- [ ] 用户点赞商品
- [ ] 筛选商品
- [ ] 商品详情
- [ ] 商品评论

## 注意事项：
>服务器占用端口：8088<br>

>web前端占用端口：8080<br>

>wap前端占用端口：3000<br>

>后台管理系统占用端口：8090<br>

>需要安装mongodb数据库，使用的数据库名是：UsedStreet (可在代码中更改)且后台管理系统管理员帐号需要自己预先创建好

##### 给出示例创建代码：(预先安装好并且可以成功使用mongodb)<br>
打开cmd，一步一步输入如下命令：

```
mongo
use UsedStreet
db.createCollection("users")
db.users.insert({user_name:"admin",user_password:"123456"})
```
以上代码就是创建了一个UsedStreet数据库，一个users集合，并且创建了一个用户名为admin,密码为123456的管理员

## 安装步骤
下载，解压
UsedStreetWeb文件夹是前端web
UsedStreetWap文件夹是前端wap
UsedStreetBackend文件夹是后台管理系统
UsedStreetServer文件夹是服务器
首先在cmd命令行中进入到各个文件夹，安装依赖包
```
npm install
```
安装好依赖之后
进入UsedStreetServer
启动服务器
```
node app
```
进入UsedStreetWeb，启动
```
npm run dev
```
进入UsedStreetWap，启动
```
npm run dev
```
进入UsedStreetBackend，启动
```
npm run dev
```
利用上面创建的管理员用户就可以进入管理系统了
还在等什么赶紧试试吧

## 最后：
如果有什么疑问，请联系邮箱：
zhigang.chen@owulia.com

如果喜欢，别忘了给星