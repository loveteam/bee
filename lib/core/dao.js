var config = require("../../config.json")

var db = require("./db/" + config.db + "_dao")

function Dao() {
}

Dao.prototype.add = function () {

}


module.exports = Dao