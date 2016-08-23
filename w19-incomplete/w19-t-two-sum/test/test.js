var assert = require('chai').assert
var twoSum = require('../prompt.js').twoSum;
console.log(twoSum);

describe('two numbers in an array that add up to a target value', function() {
  it('should return an array with the correct indices', function() {
    var l = [1,2,3,4,5,6,7]
    assert.deepEqual(twoSum(l, 13),[5,6]);
    l = [0,0,0,0,5,0,0,0,3];
    assert.deepEqual(twoSum(l, 8),[4,8]);
    l = [1,3,12342134, 14, -99, 3]
    assert.deepEqual(twoSum(l, -96),[1,4]);
  });
});


