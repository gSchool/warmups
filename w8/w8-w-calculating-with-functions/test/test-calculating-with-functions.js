var expect = require("chai").expect;
var allFunctions = require("../prompt");

var zero = allFunctions.zero;
var one = allFunctions.one;
var two = allFunctions.two;
var three = allFunctions.three;
var four = allFunctions.four;
var five = allFunctions.five;
var six = allFunctions.six;
var seven = allFunctions.seven;
var eight = allFunctions.eight;
var nine = allFunctions.nine;
var plus = allFunctions.plus;
var minus = allFunctions.minus;
var times = allFunctions.times;
var dividedBy = allFunctions.dividedBy;

  console.log(five, "five");

describe('calculating with function', function(){
  it('should return the correct calculation', function() {
    expect(seven(times(five()))).to.equal(35);
    expect(four(plus(nine()))).to.equal(13);
    expect(eight(minus(three()))).to.equal(5);
    expect(six(dividedBy(two()))).to.equal(3);
    expect(three(dividedBy(two()))).to.equal(1.5);
    expect(nine(times(nine()))).to.equal(81);
  });
});

