var assert = require('chai').assert
var getWords = require('../prompt').getWords


describe('Get All Words', function() {
  it('should return the correct purmutations of the given letters', function() {
    assert.deepEqual(getWords({1:["a", "b", "c"]}),  ["abc", "acb", "bac", "bca", "cab", "cba"], "Nope! Try again.")
    assert.deepEqual(getWords({2:["a"], 1:["b", "c"]}), ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"], "Nope! Try again.")
  });
});
