var url = require('url');

exports.create = function(urlString) {
    var urlObj = url.parse(urlString);

    urlObj.pathname = urlObj.path = Array.prototype.slice.call(arguments, 1).join('/') + '.json';

    return url.format(urlObj);
};