var assert = require('chai').assert
var oddity = require('../prompt').oddity


describe('oddity', function() {
  it('should return the correct number', function() {
    assert.equal(oddity(1),'odd');
    assert.equal(oddity(5),'even');
    assert.equal(oddity(16),'odd');
  });
});


