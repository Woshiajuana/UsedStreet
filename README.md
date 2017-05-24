# UsedStreet

技术栈：vue2 + vuex + vue-router + axios + Element + node.js + express + mongodb

##版本：
v1.0.0

##简介：
校园二手街前端基于vue2，后端node.js，数据库mongodb搭建而成，前后端分离。
预计要实现的功能有:
用户注册、登录、修改密码、忘记密码、填写资料、浏览商品、发布商品、收藏商品等

##注意事项：
服务器占用端口：8088
前端占用端口：8080
后台管理系统占用端口：8090
需要安装mongodb数据库，使用的数据库名是：UsedStreet (可在代码中更改)且后台管理系统管理员帐号需要自己预先创建好
给出示例创建代码：(预先安装好并且可以成功使用mongodb)
打开cmd，一步一步输入如下命令：
```
mongo
use UsedStreet
db.createCollection("users")
db.users.insert({user_name:"admin",user_password:"123456"})
```
以上代码就是创建了一个UsedStreet数据库，一个users集合，并且创建了一个用户名为admin,密码为123456的管理员

##安装步骤
下载，解压
UsedStreetWeb文件夹是前端
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
进入UsedStreetBackend，启动
```
npm run dev
```
利用上面创建的管理员用户就可以进入管理系统了
还在等什么赶紧试试吧

##最后：
如果有什么疑问，请联系邮箱：
zhigang.chen@owulia.com

如果喜欢，别忘了给星