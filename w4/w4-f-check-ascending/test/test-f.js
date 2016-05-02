var expect = require('chai').expect;
var inAscOrder = require('../problem').inAscOrder;

describe('inAscOrder function', function() {
  it('should return true if array is in ascending order', function() {
    expect(inAscOrder([1,2,3,4])).to.be.true;
    expect(inAscOrder([5,6,90])).to.be.true;
    expect(inAscOrder([1,10,100,1000,1001])).to.be.true;
  });
  it('should return false if not ascending order', function() {
    expect(inAscOrder([4,3,2,1])).to.be.false;
    expect(inAscOrder([1,2,4,3])).to.be.false;
    expect(inAscOrder([10,1,100])).to.be.false;
  });

});