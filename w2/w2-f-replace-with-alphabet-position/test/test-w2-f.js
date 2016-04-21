var expect = require('chai').expect
var program = require('../w2-f-replace-with-alphabet-position.js').alphabetPosition

describe("alphabet position function", function() {
  it('when a string is passed in, expect each letter to be replaced with its numerical position in the alphabet', function() {
    expect(program("aba")).to.be.equal("1 2 1")
    expect(program("fish")).to.be.equal("6 9 19 8")
    expect(program("The sunset sets at twelve o' clock.")).to.be.equal("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
    expect(program("so long and thanks for all the fish")).to.be.equal("19 15 12 15 14 7 1 14 4 20 8 1 14 11 19 6 15 18 1 12 12 20 8 5 6 9 19 8")
  })
})
