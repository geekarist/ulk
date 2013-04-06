var http = require('http');

exports.getCaloriesByDayForThisWeek = function(onSuccess) {
	http.get('http://cpele.free.fr/ogan.json', function(response) {
		response.setEncoding('utf-8');
		response.on('data', function(chunk) {
			onSuccess(JSON.parse(chunk));
		})
	}).on('error', function(e) {console.log('Error: ' + e.message)});
};