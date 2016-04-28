var expect = require("chai").expect;
var powerI = require("../problem").powerOf4;
var powerR = require('../problem').powerOf4R;

describe('powerOf4 iterative function', function(){
  it('should return false if input is not a number', function() {
    expect(powerI('foo')).to.be.equal(false);
    expect(powerI(true)).to.be.equal(false);
    expect(powerI([1,2,3])).to.be.equal(false);
  });
  it('should return false if the number is not a power of 4', function(){
    expect(powerI(0)).to.be.equal(false);
    expect(powerI(1)).to.be.equal(false);
    expect(powerI(12)).to.be.equal(false);
    expect(powerI(8)).to.be.equal(false);
  });
  it('should return true if the number is a power of 4', function(){
    expect(powerI(4)).to.be.equal(true);
    expect(powerI(16)).to.be.equal(true);
    expect(powerI(1048576)).to.be.equal(true);
  });
});

describe('powerOf4 recursive function', function(){
  it('should return false if input is not a number', function() {
    expect(powerR('foo')).to.be.equal(false);
    expect(powerR(true)).to.be.equal(false);
    expect(powerR([1,2,3])).to.be.equal(false);
  });
  it('should return false if the number is not a power of 4', function(){
    expect(powerR(0)).to.be.equal(false);
    expect(powerR(1)).to.be.equal(false);
    expect(powerR(12)).to.be.equal(false);
    expect(powerR(8)).to.be.equal(false);
  });
  it('should return true if the number is a power of 4', function(){
    expect(powerR(4)).to.be.equal(true);
    expect(powerR(16)).to.be.equal(true);
    expect(powerR(1048576)).to.be.equal(true);
  });
});