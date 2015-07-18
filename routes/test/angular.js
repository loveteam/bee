/**
 * Created by Guangshan on 2015/7/18.
 */
var express = require('express');
var router = express.Router();

//此处引用的express.Router()后，再调用get方法，并不是向Router中注册了这个请求，而是借用了这个对象的行为
//该对象(router对象)的行为（作用）是可以处理http各种请求 express.Router()只会为了取出来这个对象，然后为该对象增加一些方法或属性
//所以要使下面的方法确实可以处理请求，还需要在app.js注册地址对应的处理模块，即：
//var angular_test = require('./routes/test/angular');
//app.use('/test', angular_test);

//require为一个目录是取得是什么？目录下的index.js模块吗？

router.get('/', function(req, res, next) {
    res.render('test/angular',{title:"test"});//用模板引擎渲染第一个参数提供的地址的模板，第二个为模板可以使用的参数
});

router.post('/post', function(req, res, next) {
    res.render('test/register');
});

module.exports = router;//nodejs模块化，使用require("路径")可以取到该模块，即router对象