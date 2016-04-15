// This is a LOT like the solution for removeDupes
// See bonus.js for some more about that. 

function countCharacters(input){

	var characterCounts = {};

	for(var i = 0; i < input.length; i++){
		var c = input[i];

		// If we haven't seen this character
		// set it's count to 1
		if(characterCounts[c] === undefined) {
			characterCounts[c] = 1;
		}
		// If we HAVE seen this character, add 1 to
		// the current count.
		else {
			characterCounts[c] += 1;
		}
	}

	return characterCounts;
}

// Now, lets use our character counter to answer the question 
// does each character appear exactly once
function allUnique(input) {
	var characterCounts = countCharacters(input);

	// Once we've counted the characters, lets examine
	// those counts per each character. 
	for(character in characterCounts){
		// If the value is anything other than 1
		// then we know this character wasn't uniqe
		// and can return false
		if(characterCounts[character] !== 1){
			return false;
		}
	}

	// If we never returned false, we must have 
	// unique characters, so we can return true.
	return true;
}