const expect = require('chai').expect;
const lib = require('../src/main');

describe('#combineArrays', function() {
  it('returns combined arrays', function() {
    expect(lib.combineArrays([1,2], [3,4])).to.eql([1,2,3,4]);
  });
})

describe('#calculateArrayMax', function() {
  it('returns array max', function() {
    expect(lib.calculateArrayMax([-17, 0, 143, 9])).to.equal(143);
  });
})

describe('#skipFirstThree', function() {
  it('returns array with all but first three', function() {
    expect(lib.skipFirstThree([0,1,2,3,4,5,6,7,8,9,10])).to.eql([3,4,5,6,7,8,9,10]);
  });
})

describe('#allOthersMapTimesTwo', function() {
  it('return array of everything after first two mult by two', function() {
    expect(lib.allOthersMapTimesTwo(1,2,3,4)).to.eql([6,8]);
    expect(lib.allOthersMapTimesTwo(1,2,3,4,5,6)).to.eql([6,8,10,12]);
  });
})
