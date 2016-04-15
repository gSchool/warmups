// npm install mocha -g 
// npm install chai
// create test folder
 
var parensChecker = require('../solution');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('The Truth of All Things', function(){
	describe("Boolean-ness", function(){
		it('should know that true is true and not false', function(){
			expect(true).to.equal(true);
			expect(true).to.not.equal(false);
		});
		it('1 + 1 should equal 2', function(){
			expect(1+1).to.equal(2);
		});
	});
}); 

describe('ParensChecker', function() {
	it('should return true for valid nested parens', function() {
		expect(parensChecker("[]")).to.equal(true);
		expect(parensChecker("()")).to.equal(true);
		expect(parensChecker("{}")).to.equal(true);
		expect(parensChecker("([([[{(){}[()]}]])])")).to.equal(true);
		expect(parensChecker("[][][]{}(){[]}({})")).to.equal(true);
	})

	it('should return false for invalid nested parens', function() {
		expect(parensChecker('][')).to.equal(false);
		expect(parensChecker('((')).to.equal(false);
		expect(parensChecker(')(')).to.equal(false);
		expect(parensChecker('}{')).to.equal(false);
		expect(parensChecker('())))(')).to.equal(false);
		expect(parensChecker('[]{}()fail')).to.equal(false);
	})

	it('should gracefully return false for invalid inputs', function() {
		expect(parensChecker()).to.equal(false);
		expect(parensChecker(false)).to.equal(false);
		expect(parensChecker("foo")).to.equal(false);
		expect(parensChecker(12233)).to.equal(false);
		expect(parensChecker("")).to.equal(false);
		expect(parensChecker(true)).to.equal(false);
		expect(parensChecker(undefined)).to.equal(false);
	})
})


var testCases = {
	'((': false,
	"()(((())))": true,
	"())))(": false,
	")(": false,
	"([{}])": true,
	"([([[{(){}[()]}]])])": true,
	"}{": false,
	"[][][]{}(){[]}({})": true,
	"[]{}()fail": false,
}