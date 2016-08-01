var assert = require('chai').assert
var sqInRect = require('../prompt').sqInRect

describe('Rectangle into Squares', function() {
  it('should return the correct number', function() {
    assert.deepEqual(sqInRect(5, 5), null);
    assert.deepEqual(sqInRect(5, 3), [3, 2, 1, 1]);
    assert.deepEqual(sqInRect(3, 5), [3, 2, 1, 1]);
    assert.deepEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
  });
});

