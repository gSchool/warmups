var expect = require('chai').expect
var hexToBin = require('../prompt').hexToBin
var binToHex = require('../prompt').binToHex

describe('binToHex', function() {
  it('should return a hex number with a binary input', function() {
    expect(binToHex('000101')).to.equal('5');
    expect(binToHex('001111')).to.equal('f');
    expect(binToHex('000')).to.equal('0');
    expect(binToHex('10011010010')).to.equal('4d2');
  });
});

describe('hexToBin', function() {
  it('should return a binary number with a hex input', function() {
    expect(hexToBin('0')).to.equal('0')
    expect(hexToBin('f')).to.equal('1111')
    expect(hexToBin('0F')).to.equal('1111')
    expect(hexToBin('5')).to.equal('101')
    expect(hexToBin('04D2')).to.equal('10011010010')
  });
});