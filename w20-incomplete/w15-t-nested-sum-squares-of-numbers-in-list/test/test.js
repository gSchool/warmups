var assert = require('chai').assert
var sumSquares = require('../prompt').sumSquares


describe('Sum of squares', function() {
  it('should return the correct number', function() {
    var l = [1,2,3]
    assert.equal(sumSquares(l),14)
    l = [[1,2],3]
    assert.equal(sumSquares(l),14)
    l = [[[[[[[[[1]]]]]]]]]
    assert.equal(sumSquares(l),1)
    l = [10,[[10],10],[10]]
    assert.equal(sumSquares(l),400)
    l = [1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]]
    assert.equal(sumSquares(l),325)
  });
});


