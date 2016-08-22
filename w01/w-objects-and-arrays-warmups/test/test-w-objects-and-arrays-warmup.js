var expect = require('chai').expect;
// probably need to structure module.exports differently
var answers = require('../w-objects-and-arrays-warmup');

describe('first array problem', function(){
  it('should be an array with 1-5 printed out', function() {
      expect(answers.array).to.deep.equal([1,2,3,4,5]);
  });
});

describe('second array problem', function() {
  it('should have 5 in 5th index of array', function() {
      expect(answers.arrayTwo).to.deep.equal([0,0,0,0,0,5,0]);
  });
});

describe('third array problem', function() {
  it('should have a length of three', function() {
    expect(answers.arrayThree).to.have.lengthOf(3);
  });
  it('should have three empty nested arrays', function() {
      expect(answers.arrayThree[0]).to.be.an('array'); //does this work?
      expect(answers.arrayThree[0]).to.be.empty; //does this work?
      expect(answers.arrayThree[1]).to.be.an('array'); //does this work?
      expect(answers.arrayThree[1]).to.be.empty; //does this work?
      expect(answers.arrayThree[2]).to.be.an('array'); //does this work?
      expect(answers.arrayThree[2]).to.be.empty; //does this work?
  });
});

describe('fourth array problem', function() {
  it('should have a length of three', function() {
    expect(answers.arrayFour).to.have.lengthOf(3);
  });
  it('should have a string at index 0 with length 3', function() {
    expect(answers.arrayFour[0]).to.be.a('string');
    expect(answers.arrayFour[0]).to.have.lengthOf(3);
  });
  it('should have an empty object at index 1', function() {
    expect(answers.arrayFour[1]).to.be.an('object');
    expect(answers.arrayFour[1]).to.be.empty;
  });
  it('should be a number at index 2', function() {
    expect(answers.arrayFour[2]).to.be.a('number');
  });
});

describe('first object problem', function() {
  it('should have a key value pair of foo:"bar"', function() {
    expect(answers.object).to.have.property('foo','bar');
  });
});

describe('second object problem', function() {
  it('should have a key of nested with a value of an empty object', function () {
      expect(answers.objectTwo).to.have.property('nested');
      expect(answers.objectTwo).to.have.property('nested').that.is.an('object');
      expect(answers.objectTwo.nested).to.be.empty;
  });
});

describe('third object problem', function() {
  it('has property superNested that is a object with key nested and value data', function() {
    expect(answers.objectThree).to.have.property('superNested').that.is.an('object');
    expect(answers.objectThree).to.have.property('superNested').that.is.an('object')
    .that.deep.equals({nested: 'data'});
  });
});

describe('fourth object problem', function() {
  it('has arrayThree and arrayFour as properties and values', function() {
      expect(answers.objectFour).to.have.property('arrayThree').that.is.an('array')
      .that.deep.equals(answers.arrayThree);
      expect(answers.objectFour).to.have.property('arrayTwo').that.is.an('array')
      .that.deep.equals(answers.arrayTwo);
  });
});