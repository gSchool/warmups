var expect = require('chai').expect;
var confirmEnding = require('../problem').confirmEnding;

describe('confirmEnding function', function() {
  it('should return a boolean', function() {
    expect(confirmEnding('Bastian','n')).to.be.a('boolean');
  });
  it('should return true when target is at the end of the string', function() {
    expect(confirmEnding('Bastian','n')).to.be.equal(true);
    expect(confirmEnding("He has to give me a new name", "name")).to.be.true;
    expect(confirmEnding("He has to give me a new name", "me")).to.be.true;
  });
  it('should return false when target is not at the end of a string', function() {
    expect(confirmEnding("Connor", "n")).to.be.false;
    expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.be.false;
    expect(confirmEnding("He has to give me a new name", "na")).to.be.false;
    expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.be.false;
  });
});