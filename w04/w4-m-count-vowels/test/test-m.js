var expect = require('chai').expect;
var countVowels = require('../problem').countVowels;

describe('countVowels function', function() {
  it('should return an object with the count of the vowels', function() {
    expect(countVowels('aAbcdad')).to.be.eql({a:3});
    expect(countVowels('ddDDddDcD')).to.be.eql({});
    expect(countVowels('zbErtyA')).to.be.eql({a:1,e:1});
    expect(countVowels('aAbcdade')).to.be.eql({a:3,e:1});
  });
});