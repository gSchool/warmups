var assert = require('chai').assert
var compare = require('../prompt').compare

describe('compare', function() {
  it('should return true or false if values are equal', function() {
    assert.equal(compare("AD","BC"), true);
    assert.equal(compare("AD","DD"), false);
    assert.equal(compare("gf","FG"), true);
    assert.equal(compare("zz1",""), true);
    assert.equal(compare("ZzZz", "ffPFF"), true);
    assert.equal(compare("kl", "lz"), false);
    assert.equal(compare(null, ""), true);
  });
});

// Null or Empty
  assert.equal(dateCorrect(null), null);
  assert.equal(dateCorrect(""), "");

// Invalid Format
  assert.equal(dateCorrect("01112016"), null);
  assert.equal(dateCorrect("01,11,2016"), null);
  assert.equal(dateCorrect("0a.1c.2016"), null);

// Correction Tests
  assert.equal(dateCorrect("30.02.2016"), "01.03.2016");
  assert.equal(dateCorrect("40.06.2015"), "10.07.2015");
  assert.equal(dateCorrect("11.13.2014"), "11.01.2015");
  assert.equal(dateCorrect("99.11.2010"), "07.02.2011");
