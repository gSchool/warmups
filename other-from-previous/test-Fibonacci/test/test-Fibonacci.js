var expect = require('chai').expect;
var fibChecker = require('../solutions')

describe('THE TRUTH OF ALL THINGS', function() {
  it('true should be truthy', function() {
    expect(true).to.equal(true);
  })
})

describe('for Fibbonacci sequence', function() {
  it('when we pass in a value of 1 or less, expect to return 1', function() {
    expect(fibChecker.fibbonacciIterative(1)).to.equal(1)
    expect(fibChecker.fibbonacciIterative(0)).to.equal(1)
    expect(fibChecker.fibbonacciIterative(-1)).to.equal(1)
    expect(fibChecker.fibbonacciIterative(-1.5)).to.equal(1)
    expect(fibChecker.fibbonacciIterative(-10979686574)).to.equal(1)
  })
  it('when 4 is passed to fibChecker, expect to return 5', function() {
    expect(fibChecker.fibbonacciIterative(4)).to.equal(5)
  })
})

describe('for secret word', function() {
  it('when we pass in foobar to fibChecker.attendance, expect it to be attendance', function() {
    expect(fibChecker.attendance).to.equal('foobar');
  })
})

