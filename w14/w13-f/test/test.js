var assert = require('chai').assert
var biggest = require('../prompt').biggest


describe('biggest', function() {

  it('should return the biggest number', function() {
    assert.equal(biggest([1,2,3]),'321');
    assert.equal(biggest([121,12]),'12121');
    assert.equal(biggest([3, 30, 34, 5, 9]),'9534330');
  });
});
