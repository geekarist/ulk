var hello = require('./hello');

describe('hello', function () {
  it('should say hello', function () {
  	var h = hello.sayHello();
  	expect(h).toEqual('hello\n');
  });
});
