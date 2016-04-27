var expect = require("chai").expect;

Array.prototype.all = require("../problem.js").all;

function isGreaterThanZero (num) {
  return num > 0;
}

console.log(isGreaterThanZero(-2), "yoyoyo")

function isLessThanZero (num) {
  return num < 0;
}

describe("all Array method", function() {

  it("should return true if all elements in the input array meet the condition", function () {
    expect([1,2,3].all(isGreaterThanZero)).to.be.equal("HHeelllloo  WWoorrlldd")


  })
  // it("should return no city if all are visited", function () {
  //   citiesVisited = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
  //   citiesOffered = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
  //   expect(doubleChar(citiesVisited,citiesOffered)).to.be.equal("No worthwhile conferences this year!")
  // })
})
