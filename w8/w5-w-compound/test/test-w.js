var compoundArray = require('../problem').compoundArray;
var expect = require('chai').expect;

describe('compoundArray function', function() {
  it('should return an array', function() {
    expect(compoundArray([1,2,3],[4,5,6])).to.be.an('array');
  });
  it('should return a compounded array', function() {
    expect(compoundArray([1,2,3],[4,5,6])).to.be.eql([1,4,2,5,3,6]);
    expect(compoundArray([1,2,3],[4,5,6,7,8,9])).to.be.eql([1,4,2,5,3,6,7,8,9]);
    expect(compoundArray([4,5,6,7,8,9],[1,2,3])).to.be.eql([4,1,5,2,6,3,7,8,9]);
    expect(compoundArray([],[])).to.be.eql([]);
    expect(compoundArray([],[1,2,3])).to.be.eql([1,2,3]);
  });
});