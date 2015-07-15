var express = require('express');
var router = express.Router();

var Post = require("../../lib/service/post")
var post = new Post()

router.get('/', function(req, res, next) {
    res.render('admin/post');
});

router.post('/addPost',function(req,res){
    post.save({name:req.body.name},function(err,newOb){
        res.render('admin/index');
    })
});

module.exports = router;


