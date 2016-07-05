var assert = require('chai').assert
var numberOfRoutes = require('../prompt').numberOfRoutes


describe('number of routes', function() {
  it('should return the correct number', function() {
    assert.equal(numberOfRoutes(1, 1), 2);
    assert.equal(numberOfRoutes(5, 1), 6);
    assert.equal(numberOfRoutes(3, 4), 35);
  });
});
