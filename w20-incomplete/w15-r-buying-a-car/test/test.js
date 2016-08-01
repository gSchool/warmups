var assert = require('chai').assert
var nbMonths = require('../prompt').nbMonths


describe('buying a car', function() {
  it('should return the correct number', function() {
    assert.deepEqual(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
    assert.deepEqual(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])
  });
});

