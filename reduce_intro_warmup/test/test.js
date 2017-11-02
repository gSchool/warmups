const chai = require('chai')
const expect = chai.expect
const main = require('../main')

describe('sum', function () {
  it('adds all numbers in the array together', function () {
    expect(main.sum([])).to.equal(0);
    expect(main.sum([1,2,3,4])).to.equal(10);
  })
})

describe('multiply', function () {
  it('multiplies all numbers in the array together', function () {
    expect(main.multiply([])).to.equal(1);
    expect(main.multiply([1,2,3,4])).to.equal(24);
  })
})

describe('double', function () {
  it('doubles each number in the array', function () {
    expect(main.double([])).to.deep.equal([]);
    expect(main.double([1,2,3,4])).to.deep.equal([2,4,6,8]);
    expect(main.double([4,5])).to.deep.equal([8,10]);
  })
})

describe('countLetters', function () {
  it('produces an object that has a count of each letter', function () {
    let longestWord = "pneumonoultramicroscopicsilicovolcanoconiosis";
    let result = { r: 2, e: 1, g: 1, i: 2, s: 1, t: 2, a: 1, o: 1, n: 1 };
    let longestWordResult = { p: 2,
                        n: 4,
                        e: 1,
                        u: 2,
                        m: 2,
                        o: 9,
                        l: 3,
                        t: 1,
                        r: 2,
                        a: 2,
                        i: 6,
                        c: 6,
                        s: 4,
                        v: 1 }
    expect(main.countLetters("")).to.deep.equal({});
    expect(main.countLetters("registration")).to.deep.equal(result);
    expect(main.countLetters(longestWord)).to.deep.equal(longestWordResult);
  })
})
