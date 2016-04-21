var expect = require('chai').expect;
var fibChecker = require('../prompt');

describe('THE TRUTH OF ALL THINGS', function() {
  it('true should be truthy', function() {
    expect(true).to.equal(true);
  });
});

describe('for Fibbonacci sequence', function() {
  it('when we pass in a value of 1 or less, expect to return 1', function() {
    expect(fibChecker.fibbonacci(1)).to.equal(1);
    expect(fibChecker.fibbonacci(0)).to.equal(1);
    // expect(fibChecker.fibbonacciIterative(-1)).to.equal(1)
    // expect(fibChecker.fibbonacciIterative(-1.5)).to.equal(1)
    // expect(fibChecker.fibbonacciIterative(-10979686574)).to.equal(1)
  });
  it('when a number greater than 1 is passed to fibChecker, expect to return the correct number', function() {
    expect(fibChecker.fibbonacci(4)).to.equal(5);
    expect(fibChecker.fibbonacci(5)).to.equal(8);
    expect(fibChecker.fibbonacci(8)).to.equal(34);
    expect(fibChecker.fibbonacci(50)).to.be.equal(20365011074);
  });
});

describe('for secret word', function() {
  it('when we pass in foobar to fibChecker.attendance, expect it to be attendance', function() {
    // expect(fibChecker.attendance).to.equal('foobar');
  });
});

