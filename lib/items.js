var url = require('./url'),
    request = require('superagent');

exports.create = function(id, params, cb) {
    if (typeof params === 'function') {
        cb = params;
        params = {};
    };

    var path = url.create(this.url, 'items'),
        data = params || {};

    data.pio_iid = id;
    data.pio_appkey = this.key;

    request.post(path)
        .send(data)
        .end(cb);
};

exports.get = function(id, cb) {
    var path = url.create(this.url, 'items', id),
        data = params || {};

    data.pio_iid = id;
    data.pio_appkey = this.key;

    request.get(path)
        .end(cb);
};

exports.del = function(id, cb) {
    var path = url.create(this.url, 'items', id),
        data = params || {};

    data.pio_iid = id;
    data.pio_appkey = this.key;

    request.del(path)
        .end(cb);
};