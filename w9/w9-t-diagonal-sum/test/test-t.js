var expect = require('chai').expect;
var diagonals = require('../problem').diagonals;

describe('diagonals function', function() {
  it('should return a number', function() {
    expect(diagonals([[1,2,3],[1,2,3],[1,2,3]])).to.be.a('number');
  });
  it('should return 0 if array length is 0', function() {
    expect(diagonals([])).to.be.equal(0);
  });
  it('should return the sum of a N x N array', function() {
    expect(diagonals([[1,2,3],[1,2,3],[1,2,3]])).to.be.equal(12);
    expect(diagonals([[1,2,3],[4,5,6],[7,8,9]])).to.be.equal(30);
    expect(diagonals([[0,2,5],[6,7,2],[3,8,8]])).to.be.equal(30);
    expect(diagonals([[1,1,1],[1,1,1],[1,1,1]])).to.be.equal(6);
  });
});