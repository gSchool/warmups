var expect = require('chai').expect
var houseOfCards = require('../prompt').houseOfCards

describe('houseOfCards', function() {
  it('should return a string when it will not fulfull the order', function() {
    expect(houseOfCards(1)).to.equal(7);
    expect(houseOfCards(3)).to.equal(26);
  });
});
