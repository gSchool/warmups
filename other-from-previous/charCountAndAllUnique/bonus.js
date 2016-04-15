// We did remove duplicates one day before we did
// this warmup. Because part of this warmup was meant
// to target code reuse, lets write a different solution
// to all unique that reuses different code!

// From previously -- returns a string with only the 
// first instance of each character.
function removeDupes(input){

	var seenChars = {};
	var returnString = '';

	for(var i = 0; i < input.length; i++){
		var c = input[i];

		// Not Seen
		if(seenChars[c] === undefined) {
			returnString += c;
			seenChars[c] = true;
		}
	}

	return returnString;
}

// So, if nothing is removed then all the characters are unique
function allUnique(input) {
	return removeDupes(input) === input;
}

// What about this?
function allUniqueWithTrust(input){
	return removeDupes(input).length === input.length;
}
// I argue that, so long as removeDupes is correct, this
// solution is both accurate, and faster.
// Faster because testing a single integer is faster than comparing
// each character in a string.


// Here is another version of code reuse, but one which relies on an 
// assumption. This is the countCharacters solution from before.
// Scroll down for another way to solve the remove dupes problem.
function countCharacters(input){

	var characterCounts = {};

	for(var i = 0; i < input.length; i++){
		var c = input[i];

		// Not Seen
		if(characterCounts[c] === undefined) {
			characterCounts[c] = 1;
		}
		else {
			characterCounts[c] += 1;
		}
	}

	return characterCounts;
}

// This code uses the character counts object to create 
// a string with exactly one copy of each character from 
// input.

// However, because the built in function Object.keys() 
// does not guarantee any order on those keys, our 
// return value might or might not be in the order we expect.

// More on Object.keys(), which is often highly useful:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function removeDupesUnordered(input) {
	var characterCounts = countCharacters(input);
	return Object.keys(characterCounts).join('');
}