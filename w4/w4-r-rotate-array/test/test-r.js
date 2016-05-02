var expect = require('chai').expect;
var rotate = require('../solution');

describe('rotate function', function() {
  it('should return an array', function() {
    expect(rotate([1,2,3],1)).to.be.an('array');
  });
  it('should return the same array that was input', function() {
    var arr = [1,2,3];
    expect(rotate([1,2,3],1)).to.be.equal(arr);
  });
  it('should return rotated array', function() {
    expect(rotate([1,2,3,4,5],2));
  });
});