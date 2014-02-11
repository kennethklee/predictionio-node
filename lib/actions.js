var url = require('./url'),
    request = require('superagent');

exports.record = function(user, action, item, params, cb) {
    if (typeof params === 'function') {
        cb = params;
        params = {};
    };

    var path = url.create(this.url, 'actions', 'u2i'),
        data = params || {};

    data.pio_uid = user;
    data.pio_action = action;
    data.pio_iid = item;
    data.pio_appkey = this.key;

    request.post(path)
        .send(data)
        .end(cb);
};