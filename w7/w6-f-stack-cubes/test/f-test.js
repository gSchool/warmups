var findNb = require('../problem').findNb;
var expect = require('chai').expect;

describe('findNb function', function() {
  it('should return a number', function() {
    expect(findNb(1071225)).to.be.a('number');
    expect(findNb(91716553919377)).to.be.a('number');
  });
  it('should return -1 if not possible', function() {
    expect(findNb(91716553919377)).to.equal(-1);
    expect(findNb(24723578342962)).to.equal(-1);
  });
  it('should return number of cubes', function() {
    expect(findNb(1071225)).to.equal(45);
    expect(findNb(4183059834009)).to.equal(2022);
    expect(findNb(135440716410000)).to.equal(4824);
    expect(findNb(40539911473216)).to.equal(3568);
  });
});