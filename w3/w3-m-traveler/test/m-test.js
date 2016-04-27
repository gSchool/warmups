var expect = require("chai").expect;

var program = require("../m-conference-traveller-warmup").conferencePicker;

describe("traveler warmup", function() {
  it("should return an offered city that has not been visited", function () {
    citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
    citiesOffered = ['Stockholm','Paris','Melbourne'];
    expect(program(citiesVisited,citiesOffered)).to.be.equal("Paris")

    citiesVisited = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg'];
    citiesOffered = ['Bigfork', 'North Scituate', 'Lake Success', 'Willsboro', 'McConnellsburg', 'Happytown'];
    expect(program(citiesVisited,citiesOffered)).to.be.equal("Happytown")

  })
  it("should return no city if all are visited", function () {
    citiesVisited = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
    citiesOffered = ["Grazierville", "Covelo", "Ridge Wood Heights", "Onancock", "Winthrop Town"];
    expect(program(citiesVisited,citiesOffered)).to.be.equal("No worthwhile conferences this year!")
  })
})
