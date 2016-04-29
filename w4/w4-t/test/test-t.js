var expect = require('chai').expect;
var countLetters = require('../problem').countLetters;

describe('countLetters function', function() {
  it('should return an object with the count of the letters', function() {
    expect(countLetters('aAbcdad')).to.be.eql({a:3,b:1,c:1,d:2});
    expect(countLetters('ddDDddDcD')).to.be.eql({d:8,c:1});
    expect(countLetters('zbErtyA')).to.be.eql({a:1,b:1,e:1,r:1,t:1,y:1,z:1});
  });
});