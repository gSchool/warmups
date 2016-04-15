/* 
	A checksum is a common way to check that some piece of data
	has not been changed or corrupted. Programmers use checksums 
	for a variety of reasons, but the most common is detecting 
	electrical corruption. 

	Data traveling along the physical infrastructure of the internet
	is subject to electrical interference. Our signals amount to a
	series of bits (0's and 1's corresponding to "off" and "on"). 
	Interference might "flip" one of these bits, changing a 0 to a 1
	or vice versa. 

	We can check for this kind of corruption by using a checksum.
	To do this, any time we send data over the internet, we send 
	a checksum as well. The checksum is a value computed with an
	algorithm known by both the sending and recieving. 

	The sender computes the checksum on it's data, and sends it
	along with the raw data. Upon recieving the data, the reciever
	uses the same known algoritm to compute the checksum, then 
	tests it against the checksum value that was also recieved. 

	If the two checksums are the same, the data is assumed not
	to have been corrupted. However, a limitation of the checksum
	paradigm, is that the checksum itself **MUST BE A SINGLE INTEGER**
	
	There are good reasons for this: if we send a small checksum as in
	a 64 bit integer it is much less likely to corrupted, and it doesn't
	bloat our payload.

	Your task is to create a checksum algorithm which can detect
	if a string has been corrupted!
*/

// Global variable for randomly generating an a-zA-Z value
var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// This is an algorithm based on Java's built in hashcode function. Try and figure out whats happening!
function computeChecksumRobust(importantData) {
  var hash = 0, i, chr, len;
  if (importantData.length == 0) return hash;
  for (i = 0, len = importantData.length; i < len; i++) {
    chr   = importantData.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// This is a simple checksum that sums the ascii values of the string, which won't detect swaps
function computeChecksumSimple(importantData){
	var sum = 0;
	for(var i = 0; i < importantData.length; i++) {
		sum += importantData.charCodeAt(i);
	}
	return sum;
}

function computeChecksumSimplePlus(importantData){
	var sum = 0;
	for(var i = 0; i < importantData.length; i++) {
		sum += importantData.charCodeAt(i) * (i+1);
	}
	return sum;
}

test(computeChecksumSimple);
test(computeChecksumRobust);
test(computeChecksumSimplePlus);

function test(checksumFunction){
	var failedTests = [];
	var trueCorruptions = 0;
	var detectedCorruptions = 0;

	for(var i = 0; i < 1000; i++) {
		// Create a string, maybe corrupt it
		var str = createRandomString();
		var maybeCorrupted = corruptDataRandomly(str);

		// Compute the checksum of each piece of data
		var inputChecksum = checksumFunction(str);
		var outputChecksum = checksumFunction(maybeCorrupted);

		// Test if you followed the rules
		if(parseInt(inputChecksum) !== inputChecksum || parseInt(outputChecksum) !== outputChecksum){
			console.log("Sorry, your checksum function did not return an integer. checksum values were: ");
			console.log(inputChecksum);
			console.log(outputChecksum);
			console.log("quitting now");
			return;
		}

		// We have the benefit of actually knowing for sure if the data is corrupt when we test.
		var trulyCorrupted = (str !== maybeCorrupted);
		if(trulyCorrupted){
			trueCorruptions += 1;
		}

		// did our checksum detect corruption?
		var checksumSaysCorrupted = (inputChecksum !== outputChecksum);
		if(checksumSaysCorrupted) {
			detectedCorruptions += 1;
		}

		// If our checksum detector reports a different result than the real one
		// make a note of it.
		if(trulyCorrupted !== checksumSaysCorrupted) {
			var testLog = {
				originalData: str,
				corruptedData: maybeCorrupted,
				originalChecksum: inputChecksum,
				corruptedChecksum: outputChecksum,
				trulyCorrupted: trulyCorrupted,
			}
			failedTests.push(testLog);
		}
	}

	var falsePositives = 0;
	var falseNegatives = 0;
	for(var i = 0; i < failedTests.length; i++){
		var f = failedTests[i];

		if(f.trulyCorrupted){
			falseNegatives += 1;
		}
		else {
			falsePositives += 1;
		}
	}

	console.log("=====STATISTICS======");
	console.log(checksumFunction.name);
	console.log("True Corruptions: " + trueCorruptions);
	console.log("Detected Corruptions: " + detectedCorruptions);
	console.log("False Positives: " + falsePositives);
	console.log("False Negatives: " + falseNegatives);
}

/* 
  Given a string (maybe) change some of the characters 
*/
function corruptDataRandomly(importantData) {
	
	var randomNumber = Math.random();
	// 10% of the time, a randomly sized block of the importantData will be changed
	if(randomNumber < .1) {
		return corruptBlock(importantData);
	}
	// 10% of the time, two characters will be swapped. This is harder to detect.
	else if(randomNumber < .2) {
		return corruptBySwapping(importantData);
	}
	// 10% of the time, the data will be shuffled
	else if(randomNumber < .3) {
		return shuffleString(importantData);
	}
	// 10% of the time, one character will be bit-shifted left once
	else if(randomNumber < .4) {
		return shiftOneCharacter(importantData);
	}
	// 10% of the time, the data will just be replaced wholesale
	else if(randomNumber < .5){
		return createRandomString();
	}

	return importantData;
}

// Create a string of 100 random a-zA-Z characters
function createRandomString(){
	var str = "";
	for(var i = 0; i < 100; i++) {
		str += alphaChars[Math.floor(Math.random() * 52)];
	}
	return str;
}

function shiftOneCharacter(importantData) {
	var bitLocation = Math.floor(Math.random() * importantData.length);
	var stringBuilder = "";
	for(var i = 0; i < importantData.length; i++) {
		var character = importantData[i];
		if(i === bitLocation){
			character = character << 1;
		}

		stringBuilder += character;
	}
	return stringBuilder;

}

function shuffleString(importantData) {
	var arr = importantData.split("");
	arr.sort(function(){
		return (Math.random() * 2) - 1;
	});

	return arr.join("");
}

// Corrupt a randomly sized block of the data
function corruptBlock(importantData){
	var corruptedString = "";

	// Some number between 1 and importantData.length
	var corruptionSize = Math.ceil(Math.random() * importantData.length);

	// Some number between 0 and (importantData.length - 1)
	var corruptionLocation = Math.floor(Math.random() * (importantData.length - 1));

	// Corrupt a block of the input data.  
	for(var i = 0; i < importantData.length; i++) {
		// If we're inside the corruption window
		if(i >= corruptionLocation && i < (corruptionLocation + corruptionSize)) {
			var randomLetter = alphaChars[Math.floor(Math.random() * 52)];
			corruptedString += randomLetter;
		}
		else {
			corruptedString += importantData[i];
		}
	}

	return corruptedString;
}

// corrupt the data by swapping two adjacent characters
function corruptBySwapping(importantData){
	// Some number between 0 and (importantData.length - 2)
	var corruptionLocation = Math.floor(Math.random() * (importantData.length - 2));
	
	// Swap the characters
	var inputAsArray = importantData.split("");
	var temp = inputAsArray[corruptionLocation];
	inputAsArray[corruptionLocation] = inputAsArray[corruptionLocation + 1]; 
	inputAsArray[corruptionLocation + 1] = temp;

	return inputAsArray.join("");
}