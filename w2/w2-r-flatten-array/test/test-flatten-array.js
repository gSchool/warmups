var answer = require('../prompt');
var expect = require('chai').expect;

describe('flatten function', function() {
  it('should return an array', function() {
    expect(answer.flatten([])).to.be.an('array');
  });
  it('should return a duplicate array if no nested arrays', function() {
    expect(answer.flatten([])).to.eql([]);
    expect(answer.flatten([1,2,3])).to.eql([1,2,3]);
  });
  it('should return an array with one level of flattening', function() {
    expect(answer.flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])).to.eql([1, 2, 3, "a", "b", "c", 1, 2, 3]);
    expect(answer.flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])).to.eql([3, 4, 5, [9, 9, 9], "a,b,c"]);
    expect(answer.flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).to.eql([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
  });
});