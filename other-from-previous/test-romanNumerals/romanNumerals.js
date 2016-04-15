/**
 * This function will convert a string to it's roman numeral value.
 * If the string is not a valid roman numeral string, this function
 * will return NaN.
 */
function convertRomanNumeral(input) {
	// This constant could be globalized.
	var ROMAN_LOOKUP = {
		i: 1,
		v: 5,
		x: 10,
		l: 50,
		c: 100,
	};

	var sum = 0;
	var lowerCaseInput = input.toLowerCase();
	
	for(var i = 0; i < lowerCaseInput.length; i++) {
		var currentChar = lowerCaseInput[i],
		    nextChar    = lowerCaseInput[i+1];
		    
		var currentRomanValue = ROMAN_LOOKUP[currentChar],
		    nextRomanValue    = ROMAN_LOOKUP[nextChar]

		if(currentRomanValue < nextRomanValue) {
			sum -= currentRomanValue;
		}
		else {
			sum += currentRomanValue;
		}
	}
	
	return sum + 1;
};

module.exports = convertRomanNumeral