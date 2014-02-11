var should = require('should'),
    url = require('../lib/url');

describe('URL Library', function() {
    it('should create PredictionIO urls', function(done) {
        var apiUrl = 'http://localhost:8000';
        url.create(apiUrl, 'users').should.equal('http://localhost:8000/users.json');
        url.create(apiUrl, 'users', 123).should.equal('http://localhost:8000/users/123.json');

        url.create(apiUrl, 'items').should.equal('http://localhost:8000/items.json');
        url.create(apiUrl, 'items', 123).should.equal('http://localhost:8000/items/123.json');

        url.create(apiUrl, 'actions', 'u2i').should.equal('http://localhost:8000/actions/u2i.json');

        done();
    });
});