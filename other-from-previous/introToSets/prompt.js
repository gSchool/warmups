'use strict';
// This should return an array with one copy of each character
// in str, it must however, use a Set to do so. 
function unique(str) {
	var mySet = new Set(str);
	return [...mySet]
}

// This should return a Set with one letter each character that 
// appears in BOTH str1 and str2 (set intersection)
// (hint, use a loop and the .has property of sets
// for (let item of mySet) {//Do stuff}
function intersection(str1, str2) {

}

// This function should return a Set which has all the characters
// that appear in str1 or str2 (set union)
function allLetters(str1, str2) {

}

// This function should return a Set which has 1 copy of each character
// that appears in str1 or in str2 but not in both. 
// hint: (set union - set intersection)
function uniqueLetters(str1, str2) { 

}

// Don't forget to test your results!