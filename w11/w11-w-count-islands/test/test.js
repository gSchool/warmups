var expect = require('chai').expect
var countIslands = require('../prompt').countIslands

describe('countIslands', function() {
  it('should return the number of islands', function() {
    expect(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....')).to.equal(5);
    expect(countIslands("..000.\n..000.\n..000.\n.0....\n..000.")).to.equal(3);
  });
});

 // Test.expect(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....') === 5, "");
 // Test.expect(countIslands("..000.\n..000.\n..000.\n.0....\n..000.") === 3, "");