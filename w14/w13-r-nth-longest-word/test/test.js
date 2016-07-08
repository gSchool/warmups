var assert = require('chai').assert
var longest = require('../prompt').longest


describe('nth longest work', function() {
  it('should return the correct word', function() {
    assert.equal(longest(['Hello','World','Codewars','Katas'],3),'World');
    assert.equal(longest(['Hello','World','Codewars','Katas'],4),'Katas');
    assert.equal(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4),'aa');
    assert.equal(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1),'a');
    assert.equal(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1),'a');
  });
});
