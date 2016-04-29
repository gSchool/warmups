var expect = require('chai').expect;
var reverseVowels = require('../problem').reverseVowels;

describe('reverseVowels function', function() {
  it('should return a string of length 1', function() {
    expect(reverseVowels('a')).to.be.equal('a');
  });
  it('should return a string if there is only one vowel', function() {
    expect(reverseVowels('abc')).to.be.equal('abc');
  });
  it('should reverse the vowels of a string', function() {
    expect(reverseVowels('hello')).to.be.equal('holle');
    expect(reverseVowels('hElLo')).to.be.equal('holLE');
    expect(reverseVowels('wookiE')).to.be.equal('wEikoo');
  });
});