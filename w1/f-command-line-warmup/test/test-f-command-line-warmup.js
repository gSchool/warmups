var expect = require('chai').expect;
var answers = require('../f-command-line-warmup').commandLineWarmup;

describe('Q1', function() {
  it('should be touch', function() {
      expect(answers.answer1).to.be.equal('touch');
  });
});

describe('Q2', function() {
  it('should be mkdir', function() {
    expect(answers.answer2).to.be.equal('mkdir');
  });
});

describe('Q3', function() {
  it('should be cd ..', function() {
    expect(answers.answer3).to.be.equal('cd ..');
  });
});

describe('Q4', function() {
  it('should be pwd', function() {
    expect(answers.answer4).to.be.equal('pwd');
  });
});

describe('Q5', function() {
  it('should be |', function() {
    expect(answers.answer5).to.be.equal('|');
  });
});

describe('Q6', function() {
  it('should be rm -rf', function() {
    expect(answers.answer6).to.be.equal('rm -rf');
  });
});

describe('Q7', function() {
  it('should be ls -a', function() {
    expect(answers.answer7).to.be.equal('ls -a');
  });
});

describe('Q8', function() {
  it('should be which', function() {
    expect(answers.answer8).to.be.equal('which');
  });
});

describe('Q9', function() {
  it('should be man', function(){
    expect(answers.answer9).to.be.equal('man');
  });
});

describe('Q10', function() {
  it('should be echo hello world > myText.txt', function() {
    expect(answers.answer10).to.be.equal('echo hello world > myText.txt');
  });
});
