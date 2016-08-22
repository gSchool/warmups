var expect = require('chai').expect;
var answers = require('../r-functions-warmup');

describe('squareMe function', function() {
  it('should output a squared value of a number', function() {
      expect(answers.squareMe(2)).to.be.equal(4);
      expect(answers.squareMe(3)).to.be.equal(9);
  });
});

describe('cubeMe function', function() {
  it('should output the cubed value of the input', function() {
      expect(answers.cubeMe(3)).to.be.equal(27);
      expect(answers.cubeMe(4)).to.be.equal(64);
      expect(answers.cubeMe(0)).to.be.equal(0);
  });
});

describe('addTwoNumbers function', function() {
  it('should output the sum of 2 numbers', function() {
    expect(answers.addTwoNumbers(1,2)).to.be.equal(3);
    expect(answers.addTwoNumbers(3,4)).to.be.equal(7);
  });
});

describe('addManyNumbers function', function() {
  it('should output the sum of any number of parameters', function() {
    expect(answers.addManyNumbers(1,2,3)).to.be.equal(6);
    expect(answers.addManyNumbers(2,2,2,2,2,2)).to.be.equal(12);
    expect(answers.addManyNumbers(0,2)).to.be.equal(2);
    expect(answers.addManyNumbers(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0))
    .to.be.equal(1);
  });
});

describe('hoisting answer', function() {
  it('should be the function declaration', function() {
    expect(answers.hoisting()).to.be.equal('a');
  });
});
