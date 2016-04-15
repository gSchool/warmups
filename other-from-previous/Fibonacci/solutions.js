/* 
 There are two common approaches to this problem. The first is recursive the second
 is iterative.
*/

// Recursive, meaning we call this function from inside itself.
function fibbonacciRecursive(n) {
	// Base case, if n is 0 or 1 just return 1.
	if(n <= 1) {
		return 1;
	}

	// Recursive step, return the sum of the previous two iterations
	return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}

// Iterative, meaning we simple count up until we've found the 
// answer we are looking for.
function fibbonacciIterative(n) {
	// Like the recursive version, there are still special cases
	if(n <= 1) {
		return 1;
	}

	// Otherwise, generate our 'starting' numbers.
	var fibNumber;
	var numberOne = 1;
	var numberTwo = 1;

	// And start counting up. 
	// Note that we start at 1, since the 0th and 1st
	// numbers are handled as special cases.
	for(var i = 1; i < n; i++) {
		// Compute the fibbonacci number for i
		fibNumber = numberOne + numberTwo;

		// Now, the NEXT number will be computed based on our new number
		numberOne = numberTwo;
		numberTwo = fibNumber;
	}

	return fibNumber;

}

// Test function, checks the first few known values.
function testFib(fibFunc) {
	var fibTests = [1,1,2,3,5,8,13,21,34];
	var allPassing = true;
	
	for(var i = 0; i < fibTests.length; i++) {
		if(fibFunc(i) !== fibTests[i]) {
			allPassing = false;
			console.log("failure for " + i + ".\n  Expected: " + fibTests[i] + "\n  Got: " + fibFunc(i) + "\n");
		}
	}

	if(allPassing) {
		console.log("All tests passed");
	}
}

// Calls the test function
console.log("RECURSIVE");
testFib(fibbonacciRecursive);

console.log("\nITERATIVE");
testFib(fibbonacciIterative);
