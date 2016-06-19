/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( num ) {
      	var arr = num.toString().split("");

      	var addedNums = arr.map(function(num){
      		return parseInt(num)
      	}).reduce(function(a, b) {
      		return a + b
      	},0)

      	for (var i = 1 ; i <= num ; i++) {
      		if (addedNums * i === num) {
      			return true
      		}
      	}
      	return false
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( start ) {
      // Your implementation goes here

      	var foundNum = false;
      	var currentNum = start + 1
      	while (foundNum === false) {
      		// console.log(this, "THIS")
      		foundNum = this.isValid(currentNum); 
      		if (foundNum === true) {
      			return currentNum 
      		}
      		currentNum++	
      	};	
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( findNum, startNum ) {
      // Your implementation goes here
      	var nextNum = startNum + 1
      	var foundArr = [];
      	if (!startNum) {
      		startNum = 1	
      	}

      	while (foundArr.length < findNum) {
      		if (this.isValid(nextNum))
      		foundArr.push(nextNum);
      		nextNum++
      	}
      	return foundArr;
    }
  };

} () );

// console.log(Harshad.isValid(589));

module.exports = {
    Harshad: Harshad,
    attendance: "word up yo"
}

 
