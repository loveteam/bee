var Datastore = require('nedb')

var config = require('../../../config.json')

var db = new Datastore(
    {
        filename: config.nedb.dbpath,
        autoload: true
    });

exports.save = function(ob,cb){

    db.insert(ob, function (err, newDoc) {
        cb(err,newDoc)
    });
}



