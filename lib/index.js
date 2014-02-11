var url = require('url'),
    request = require('superagent');


var Prediction = module.exports = function(key, url) {
    this.key = key;
    this.url = url;
};

Prediction.prototype.request = function(path) {
    return url.resolve(this.url, path);
}

//Prediction.prototype.actions = require('./actions');
//Prediction.prototype.items = require('./items');
Prediction.prototype.users = require('./users');
