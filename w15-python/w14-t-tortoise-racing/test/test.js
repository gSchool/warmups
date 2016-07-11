var assert = require('chai').assert
var race = require('../prompt').race


describe('Tortoise racing', function() {
  it('should return the correct times', function() {
    assert.deepEqual(race(720, 850, 70), [0, 32, 18])
    assert.deepEqual(race(80, 91, 37), [3, 21, 49])
    assert.deepEqual(race(80, 100, 40), [2, 0, 0])  });
});
