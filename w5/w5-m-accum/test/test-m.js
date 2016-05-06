var expect = require('chai').expect;
var accum = require('../problem').accum;

describe('accum function', function() {
  it('should return a string', function() {
    expect(accum('abcd')).to.be.a('string');
  });
  it('should have an upper case letter followed by incrementing letters separated by dash', function() {
    expect(accum('abcd')).to.be.equal('A-Bb-Ccc-Dddd');
    expect(accum('RqaEzty')).to.be.equal('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    expect(accum('cwAt')).to.be.equal('C-Ww-Aaa-Tttt');
    expect(accum('a')).to.be.equal('A');
  });
});