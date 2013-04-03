var request = require('supertest');
var ulk = require('./ulk');

describe('ulk', function () {
	it('should say hello', function() {
		var req = request('http://localhost:3000')
		req
			.get('/hello')
			.expect(201)
			.end(function(req, resp) {
				ulk.close();
			})
	});
});

