var util = require('util');

var Dao = require("../core/dao");

function Post() {
}

util.inherits(Post, Dao);

Post.prototype.db="post"

module.exports = Post


