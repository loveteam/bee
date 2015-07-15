var config = require("../../config.json")


var db = require("./db/" + config.db + "_dao")


var Dao =function Dao() {
}

/**
 *
 * @param ob
 * @param cb err,newDoc
 */
Dao.prototype.save = function (ob, cb) {
    db.save(ob, cb);
}

/**
 *
 * @param where @where
 * @param ob
 * @param cb
 */
Dao.prototype.update = function (where, ob, cb) {
    db.update(where, ob, cb);
}


Dao.prototype.delete = function (where, cb) {
    db.delete(where, cb);
}


Dao.prototype.query = function (where, cb) {
    db.query(where, cb);
}


module.exports = Dao