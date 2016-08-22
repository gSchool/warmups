var assert = require('chai').assert
var nextLetter = require('../prompt').nextLetter

describe('nextLetter', function() {
  it('should changes the letters by one', function() {
    assert.equal(nextLetter("My Name Is Zoo"), "Nz Obnf Jt App");
    assert.equal(nextLetter("What is your name"), "Xibu jt zpvs obnf")
    assert.equal(nextLetter("zOo"), "aPp")
  });
});
