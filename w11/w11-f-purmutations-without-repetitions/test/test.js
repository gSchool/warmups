var expect = require('chai').expect;
var perms = require('../prompt').perms;

describe('Number of permutations without repetitions', function() {
  it('should have the correct number of non-repetitive permutations', function() {
    expect(perms(2)).to.equal(1)
    expect(perms(25)).to.equal(2)
    expect(perms(342)).to.equal(6)
    expect(perms(1397)).to.equal(24)
    expect(perms(76853)).to.equal(120)
    expect(perms("a")).to.equal(1)
    expect(perms("ab")).to.equal(2)
    expect(perms("abc")).to.equal(6)
    expect(perms(737)).to.equal(3)
    expect(perms(66666)).to.equal(1)
  })
})
