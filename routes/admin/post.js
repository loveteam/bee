var express = require('express');
var router = express.Router();

var dao =new require("../../lib/core/dao")

router.get('/', function(req, res, next) {
    res.render('admin/post');
});

router.post('/addPost',function(req,res){
    dao.save({d:"1"},function(err,newOb){
        console.log(err)
        res.render('admin/index');
    })
});

module.exports = router;


