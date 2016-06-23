var expect = require('chai').expect
var separateLiquids = require('../prompt').separateLiquids

describe('Sorting array by liquid density', function() {
  it('Should be able to sort 3 liquids', function() {
    expect(separateLiquids([['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']])).to.deep.equal([['O', 'O', 'O', 'O'],['W','W','W','W'],['H','H','H','H']]);
  });

  it('Should be able to handle 4 liquids', function() {
    expect(separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']])).to.deep.equal(
      [['O','O','O','O'],['A', 'A', 'A', 'A'],['W','W','W','W'],['H','H','H','H']]
      );
  });

  it('Should be able to handle one row', function() {
    expect(separateLiquids([['A','H','W','O']])).to.deep.equal([['O','A','W','H']]);
  });

  it('Should be able to handle one column', function() {
    expect(separateLiquids([['A'],['H'],['W'],['O']])).to.deep.equal([['O'],['A'],['W'],['H']]);
  });

  it('Should be able to handle empty array', function() {
    expect(separateLiquids([])).to.deep.equal([]);
  });

});

// Test.describe("Sorting array by liquid density.", function() {

//   Test.it("Should be able to handle one column",_=>{
//     Test.assertSimilar(separateLiquids([['A'],['H'],['W'],['O']]),[['O'],['A'],['W'],['H']],"")
//   });
//   Test.it("Should be able to handle empty array", function() {
//     Test.assertSimilar(separateLiquids([]), [], "Empty array should be returned if given.");
//   });
// });