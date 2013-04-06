var ulk;
var mockery = require('mockery');

describe('ulk', function () {
	beforeEach(function() {
		mockery.enable();
		var httpMock = {
			get: function(url, onResponse) {
				console.log('httpMock.get method called');
			}
		}
		mockery.registerMock('http', httpMock);
		ulk = require('./ulk');
	});

	afterEach(function() {
		mockery.disable();
	});

	it('should return calories by day for this week', function (done) {
		// GIVEN
		var caloriesFromCpeleFreeFr = {
			"Monday": 2100, 
			"Tuesday": 2150, 
			"Wednesday": 2000, 
			"Thursday": 1900, 
			"Friday": 0, 
			"Saturday": 0, 
			"Sunday": 0
		};
		// WHEN
		var calories = '';
		ulk.getCaloriesByDayForThisWeek(function(result) {
			calories = result;
			// THEN
			expect(calories).toEqual({
				"Monday": 2100, 
				"Tuesday": 2150, 
				"Wednesday": 2000, 
				"Thursday": 1900, 
				"Friday": 0, 
				"Saturday": 0, 
				"Sunday": 0
			});
			done();
		});
	});
});
