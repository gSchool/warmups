var mostLikely = require('../problem').mostLikely;
var expect = require('chai').expect;

describe('mostLikely function', function() {
  it('should return a boolean', function() {
    expect(mostLikely('1:3','1:4')).to.be.a('boolean');
  });
  it('should say whether the first parameter is more likely than the second', function() {
    expect(mostLikely('1:3','1:4')).to.be.true;
    expect(mostLikely('1:4','1:3')).to.be.false;
    expect(mostLikely('1:2','1:5')).to.be.true;
    expect(mostLikely('1:7','1:2')).to.be.false;
    expect(mostLikely('2:4','3:4')).to.be.false;
    expect(mostLikely('20:20','19:20')).to.be.true;
  });

});