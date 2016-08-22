var expect = require("chai").expect;

var doubleChar = require("../problem.js").doubleChar;

describe("double char warmup", function() {
  it("should return a string with each character doubled or specific error message", function () {
    expect(doubleChar("Hello World")).to.be.equal("HHeelllloo  WWoorrlldd")
    expect(doubleChar("Tonight we're gonna party like it's 1999")).to.be.equal("TToonniigghhtt  wwee''rree  ggoonnnnaa  ppaarrttyy  lliikkee  iitt''ss  11999999")
    expect(doubleChar(false)).to.be.equal("Ruh roh! That isn't a string!")
    expect(doubleChar(44)).to.be.equal("Ruh roh! That isn't a string!")
    expect(doubleChar(undefined)).to.be.equal("Ruh roh! That isn't a string!")
    expect(doubleChar(NaN)).to.be.equal("Ruh roh! That isn't a string!")

  })
  // it("should return no city if all are visited", function () {
  //   citiesVisited = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
  //   citiesOffered = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
  //   expect(doubleChar(citiesVisited,citiesOffered)).to.be.equal("No worthwhile conferences this year!")
  // })
})
