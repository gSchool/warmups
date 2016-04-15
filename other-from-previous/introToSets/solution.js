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
	// First, take the strings and create sets from them
	var setA = new Set(str1);
	var setB = new Set(str2);

	// Now, expand the first set into an array
	var setAsArray = [...setA];

	// Then, using the array built-in filter function
	// add items to intersection, only if they exist in setB
	var intersection = setAsArray.filter(function(item) {
        	return setB.has(item);
        })
	
	// Then, because we said we'd return a set, make a set
	// from intersection, which is an array. 
	return new Set(intersection);
}

// This function should return a Set which has all the characters
// that appear in str1 or str2 (set union)
function allLetters(str1, str2) {
	// Union for sets is easy! 
	// Just concat the strings, then make a set from them. 
	return new Set(str1 + str2); 
}

// This function should return a Set which has 1 copy of each character
// that appears in str1 or in str2 but not in both. 
// hint: (set union - set intersection)
function uniqueLetters(str1, str2) { 
	var intersection = intersection(str1, str2);
	var union = allLetters(str1, str2);

	// This compact version is very much like what we did in 
	// intersection:
	// 1. use the spread operator to get an array
	// 2. use the filter function on arrays
	//    2a. in order to return only items that are NOT in the 
	//        intersection. 
	var difference = new Set(
        [...union].filter(function(item) {
        	return !intersection.has(item);
        }));

	return difference;
}

// Don't forget to test your results!
console.log(intersection('abc', 'cde'));  // c
console.log(allLetters('abc', 'cde'));    // abcde
console.log(uniqueLetters('abc', 'cde')); // abde

