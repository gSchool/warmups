var assert = require('chai').assert
var minSpecialMult = require('../prompt').minSpecialMult

describe('minSpecialMult', function() {
  it('should return the correct number', function() {
    arr = [2, 3 ,4 ,5, 6, 7];
    assert.strictEqual(minSpecialMult(arr), 420);
    arr = [18, 22, 4, 3, 21, 6, 3];
    assert.strictEqual(minSpecialMult(arr), 2772);
    arr = [16, 15, 23, 'a', '&', '12'];
    assert.strictEqual(minSpecialMult(arr), "There are 2 invalid entries: ['a', '&']");
    arr = [16, 15, 23, 'a', '&', '12', 'a'];
    assert.strictEqual(minSpecialMult(arr), "There are 3 invalid entries: ['a', '&', 'a']");
    arr = [16, 15, 23, 'a', '12'];
    assert.strictEqual(minSpecialMult(arr), "There is 1 invalid entry: a");
    arr = [16, 15, 23, '12'];
    assert.strictEqual(minSpecialMult(arr), 5520);
    arr = [16, 15, 23, '012'];
    assert.strictEqual(minSpecialMult(arr), 5520);
    arr = [18, 22, 4, null, 3, 21, 6, 3];
    assert.strictEqual(minSpecialMult(arr), 2772);
    arr = [18, 22, 4, null, 3, -21, 6, 3];
    assert.strictEqual(minSpecialMult(arr), 2772);
    arr = [16, 15, 23, '-012'];
    assert.strictEqual(minSpecialMult(arr), 5520);
  });
});
