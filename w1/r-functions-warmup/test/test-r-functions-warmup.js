var expect = require('chai').expect;
var answers = require('../r-functions-warmup');

describe('squareMe function', function() {
  it('should output a squared value of a number', function() {
      expect(answers.squareMe(2)).to.be.equal(2);
      expect(answers.squareMe(3)).to.be.equal(9);
  });
});
