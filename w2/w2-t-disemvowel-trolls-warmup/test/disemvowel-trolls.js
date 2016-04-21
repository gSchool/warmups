var expect = require('chai').expect
var antiTroll = require('../prompt').antiTroll

describe("troll stopper", function() {
  it('when a string is passed in, expect all vowels to be removed', function() {
    expect(antiTroll("aba")).to.be.equal("b")
    expect(antiTroll("fish")).to.be.equal("fsh")
    expect(antiTroll("so long and thanks for all the fish")).to.be.equal("s lng nd thnks fr ll th fsh")
  })
})