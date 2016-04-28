var expect = require('chai').expect;
var arrayObj = require('../problem').arrayObj;
var cb = require('../problem').cb;

describe('array prototype', function() {
  var newArr = new arrayObj(1,2,3);
  var newArr2 = new arrayObj(-1,0,3);
  var newArr3 = new arrayObj(-1,-2,-3);
  it('should work with any method', function() {
    expect(newArr.any).to.be.ok;
    expect(newArr.none).to.be.ok;
    expect(newArr.all).to.be.ok;
    expect(arrayObj.prototype.any).to.be.ok;
  });
  it('all should return true if all pass',function () {
    expect(newArr.all(cb)).to.be.true;
    // expect(newArr.all(cb)).to.be.false;
  });
  it('all should return false if not all pass', function() {
    expect(newArr2.all(cb)).to.be.false;
  });
  it('any should return true if any pass', function() {
    expect(newArr.any(cb)).to.be.true;
  });
  it('any should return false if none pass', function() {
    expect(newArr3.any(cb)).to.be.false;
  });
  it('none should return true if none pass', function() {
    expect(newArr3.none(cb)).to.be.true;
  });
  it('none should false if some pass', function() {
    expect(newArr2.none(cb)).to.be.false;
  })
});