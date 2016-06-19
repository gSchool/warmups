var expect = require('chai').expect
var winner = require('../solution').winner

describe('wheel of fortune', function() {
  it('should return Bill', function() {
        var c1 = { name: "Bob", scores: [10, 65] };
        var c2 = { name: "Bill", scores: [90, 5] };
        var c3 = { name: "Charlie", scores: [40, 55] };
    expect(winner([c1, c2, c3])).to.equal('Bill');
  });
});