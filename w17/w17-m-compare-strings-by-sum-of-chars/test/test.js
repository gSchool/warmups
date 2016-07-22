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
