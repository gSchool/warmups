var assert = require('chai').assert
var finance = require('../prompt').finance


describe('finance plan on another planet', function() {
  it('should return the correct number', function() {
    assert.equal(finance(5), 105)
    assert.equal(finance(6), 168)
    assert.equal(finance(8), 360)
    assert.equal(finance(15), 2040)
  });
});

