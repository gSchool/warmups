var expect = require('chai').expect
var Quoter = require('../prompt').Quoter

describe('Quoter', function() {
  quoter = new Quoter([]);
  it('should return a string when it will not fulfull the order', function() {
    expect(quoter.getQuote(1)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  quoter2 = new Quoter([{quantity: 10, unitPrice: 100, unitMargin: 1}]);
  it('should return the best order', function() {
    expect(quoter2.getQuote(11)).to.equal("Your order cannot be fulfilled, try lower quantity");
  });

  quoter3 = new Quoter([{quantity: 10, unitPrice: 100, unitMargin: 1}]);
  it('should return the best order', function() {
    expect(quoter3.getQuote(10)).to.equal("Your best quote for 10 items is 1000.00");
  });

  quoter4 = new Quoter([{quantity: 10, unitPrice: 100, unitMargin: 1.1}, {quantity: 10, unitPrice: 110, unitMargin: 1}]);
  it('should return the best order', function() {
    expect(quoter4.getQuote(15)).to.equal("Your best quote for 15 items is 1550.00");
  });
});