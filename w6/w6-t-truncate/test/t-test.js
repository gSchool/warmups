var expect = require('chai').expect;
var truncateString = require('../problem').truncateString;

describe('truncateString function', function() {
  var longStr = "Sriracha gluten-free farm-to-table slow-carb gastropub.";
  it('should return a string', function() {
    expect(truncateString("Hello World",5)).to.be.a('string');
  });

  it('should return a truncated string', function () {
    expect(truncateString('Hello World',5)).to.equal('He...');
    expect(truncateString(longStr,14)).to.be.equal("Sriracha gl...");
  });

  it('should add dots starting at the num if num is 3 or less', function() {
    expect(truncateString('Hello World',2)).to.be.equal('He...');
    expect(truncateString("A-", 1)).to.be.equal('A...');
  });

  it('should return the entire string if num is greater than string length', function() {
    expect(truncateString('Hello World'),20).to.be.equal('Hello World');
    expect(truncateString(longStr,100)).to.be.equal(longStr);
  });

});