var assert = require('chai').assert
var compare = require('../prompt').compare





describe('compare', function() {
  it('should make the changes to the passphrase', function() {
    assert.equal(compare("AD","BC"), true);
    assert.equal(compare("AD","DD"), false);
    assert.equal(compare("gf","FG"), true);
    assert.equal(compare("zz1",""), true);
    assert.equal(compare("ZzZz", "ffPFF"), true);
    assert.equal(compare("kl", "lz"), false);
    assert.equal(compare(null, ""), true);
    Test.assertEquals(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")

    Test.assertEquals(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
        "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
  });
});
