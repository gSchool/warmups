// This function generates 100 objects with 3 properties each.
// The properties are all random, two are floating point numbers
// and the third is a random letter. (maybe capitalized, maybe not);
function generateRandomObjects() {
	var objects = [];
	var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Add 100 random integers between 0-100 to each
	for(var i = 0; i < 100; i++) {
		var obj = {};
		obj.numberOne = Math.floor(Math.random() * 100);
		obj.numberTwo = Math.floor(Math.random() * 100);
		obj.letter = alphaChars[Math.floor(Math.random() * 52)];
		objects.push(obj);
	}
	return objects;
}

// 100 objects.
var objects = generateRandomObjects();

// Your task is to fill out the following functions that can be used as 
// compare functions. Do as many as you can. 
// See these docs for more reference on compare functions:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// The objects should be sorted by numberOne in ascending order (low to high)
function sortByNumberOneAscending(first, second) {
    return first.numberOne - second.numberOne;
}

// The object should be sorted by numberTwo in descending order (high to low)
function sortByNumberTwoDescending(first, second){
	return second.numberTwo - first.numberTwo;
}

// The numbers should be sorted by the sum of numberOne and numberTwo 
// in ascending order
function sortByNumberSum(first, second) {
	var sumOne = 0;
	var sumTwo = 0;
	sumOne += (first.numberTwo + first.numberOne);
	sumTwo += (second.numberOne + second.numberTwo);

	return sumOne - sumTwo;
}

// The objects should be sorted by letter
// a-z where the case does not affect sort order
// meaning the order aAaAaaaAAAa is valid and correctly sorted. 
function sortByLetter(first, second) {
	// ?? two lines of code ... 
	var firstUpper = first.letter.toUpperCase();
	var secondUpper = second.letter.toUpperCase();

	if (firstUpper < secondUpper) {
		return -1; 
	}
	else if(firstUpper > secondUpper) {
		return 1;
	}

	return 0
}

// The object should be sorted by letter A-Z then a-z.
// Meaning, any capital letter should come before 
// every lowercase letter. Meaning AABBCCaabbcc is correctly sorted
function sortByLetterCapsFirst(first, second) {
	'A' > 'B'; 
	
	return first.letter.charCodeAt(0) - second.letter.charCodeAt(0);
}

console.log("Unsorted -----")
console.log(objects);

// Uncomment these lines to see the result of your functions
console.log("\n\nSort by Number One Asc-----")
objects.sort(sortByNumberOneAscending);
console.log(objects);

console.log("\n\nSort by Number Two Desc-----")
objects.sort(sortByNumberTwoDescending);
console.log(objects);

console.log("\n\nSort by Number Sum -----")
objects.sort(sortByNumberSum);
console.log(objects);

console.log("\n\nSort by Letter -----")
objects.sort(sortByLetter);
console.log(objects);

console.log("\n\nSort by Letter Caps First -----")
objects.sort(sortByLetterCapsFirst);
console.log(objects);

