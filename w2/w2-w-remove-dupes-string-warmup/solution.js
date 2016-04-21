function removeDupes(input){
	var seenChars = {};
	var returnString = '';

	for(var i = 0; i < input.length; i++){
		var c = input[i];

		// If we have not seen the character before, 
		// add an entry to our object.
		if(seenChars[c] === undefined) {
			returnString += c;
			seenChars[c] = true;
		}
	}

	return returnString;
} // END FUNCTION

//CI for case insensitive
function removeDupesCI(input){
	var seenChars = {};
	var returnString = '';

	for(var i = 0; i < input.length; i++){
		var c = input[i];
		var ci = c.toUpperCase();

		// Remember, we want the string to return with the
		// original case, but we want to test case insensitively
		if(seenChars[ci] === undefined) {
			returnString += c;
			seenChars[ci] = true;
		}
	}

	return returnString;
}

// Here is a version of the solution that accepts an extra input parameter
// This way, instead of two functions with similar purpose
// we have one function with a 'flag' to do something special

// The bonus is DRYer code, the down side is that the person using
// your code needs to know a little bit more about how the function
// works. For example, the way its written the second parameter must
// be true (not truthy) for the code to remove in a case insensitive way

// Here is a question, what happens if I call this function without 
// a second parameter? For example: removeDupesT("AaBbCc"); // ABC or AaBbCc?
function removeDupesT(inputString, caseInsesitive) {
	var seenChars = {};
	var returnString = '';

	for(var i = 0; i < input.length; i++){
		var c = input[i];

		// Test for case sensitiveity. 
		var ci = c;
		if(caseInsesitive === true){
			ci = c.toUpperCase();
		}

		if(seenChars[ci] === undefined) {
			returnString += c;
			seenChars[ci] = true;
		}
	}

	return returnString;
}

module.exports = {removeDupes:removeDupes,
									removeDupesCI:removeDupesCI,
									attendance :"privacy"
								 };