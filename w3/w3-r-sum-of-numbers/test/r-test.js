var expect = require("chai").expect;

var getSum = require("../problem").getSum;

describe("getSum warmup", function() {
  it("should return the same number if a and b are equal", function () {
    expect(getSum(1, 1)).to.be.equal(1)
    expect(getSum(7, 7)).to.be.equal(7)
    expect(getSum(2928, 2928)).to.be.equal(2928)
  })

  it("should return the addition of each number between and including a & b", function () {
    expect(getSum(-1, 2)).to.be.equal(2)
    expect(getSum(-10, 2)).to.be.equal(-52)
    expect(getSum(77, -77)).to.be.equal(0)
    expect(getSum(5, -7)).to.be.equal(-13)
    expect(getSum(34554, 2)).to.be.equal(597006734)
  })
})
