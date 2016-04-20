/* 
 There are significant performance differences between the two approaches.
 The recursive solution is slower and requires more memory since each function
 call generates a new stack frame. 

 The recursive solution is easier to read, in this programmers opinion. Because
 I like it so much, I've included a 'memoized' version which stores the values
 found in any given call of the recursive memoized solution. You can see how 
 this impacts the speed. 

 You can memoize the iterative version as well.
*/

function fibbonacciRecursive(n) {
	if(n <= 1) {
		return 1;
	}

	return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}

// To "memoize" a function, we save values that we've seen before
var MEMOIZED_FIB_R = {
	0: 1,
	1: 1
};

function fibbonacciRecursiveMemoized(n) {
	var memoizedValue = MEMOIZED_FIB_R[n];
	
	if(memoizedValue) {
		return memoizedValue;
	}

	var numberOne = fibbonacciRecursiveMemoized(n - 1);
	MEMOIZED_FIB_R[n - 1] = numberOne;

	var numberTwo = fibbonacciRecursiveMemoized(n - 2);
	MEMOIZED_FIB_R[n - 2] = numberTwo;

	var fibNum = numberOne + numberTwo;
	MEMOIZED_FIB_R[n] = fibNum;

	return fibNum;

}

function fibbonacciIterative(n) {
	if(n <= 1) {
		return 1;
	}

	var fibNumber;
	var numberOne = 1;
	var numberTwo = 1;

	for(var i = 1; i < n; i++) {
		fibNumber = numberOne + numberTwo;
		numberOne = numberTwo;
		numberTwo = fibNumber;
	}

	return fibNumber;

}

MEMOIZED_FIB_I = {
	highestKnown: 1,
	0: 1,
	1: 1
}

function fibbonacciIterativeMemoized(n) {
	if(n <= MEMOIZED_FIB_I.highestKnown) {
		return MEMOIZED_FIB_I[n];
	}

	var fibNumber, numberOne, numberTwo;

	// Start at the highest known solution and work up
	for(var i = MEMOIZED_FIB_I.highestKnown; i < n; i++) {
		numberOne = MEMOIZED_FIB_I[i];
		numberTwo = MEMOIZED_FIB_I[i - 1];
		fibNumber = numberOne + numberTwo;
		
		MEMOIZED_FIB_I[i + 1] = fibNumber;
		MEMOIZED_FIB_I.highestKnown = i + 1;
	}

	return fibNumber;
}

// Benchmark - how long does it take to compute a digit from late in the sequence
function benchmarkFib(fibFunc, n, iterations) {
	// Benchmarking time values
	var min = 0;
	var max = 0;

	var totalTime = 0
	var avg = 0;

	for(var i = 0; i < iterations; i++){
		// Time the function
		var startTime = new Date().getTime();
		fibFunc(n);	
		var endTime = new Date().getTime();

		// collect benchmarks
		var iterationTime = endTime - startTime;
		totalTime += iterationTime;

		if(i === 0 || iterationTime < min) {
			min = iterationTime
		}

		if(i === 0 || iterationTime > max) {
			max = iterationTime
		}
	}
	
	// Print results
	avg = totalTime / iterations;

	console.log("\n========= " + fibFunc.name + " =============");
	console.log("n: " + n + " iterations: " + iterations);
	console.log("  Slowest iteration: " + max + "ms");
	console.log("  Fastest iteration: " + min + "ms");
	console.log("  Average: " + avg + "ms");
}

// These values for n and iterations have been chosen
// such that all functions can complete in reasonable time.
// Notice what a larger n the memoized and iterative versions can 
// handle compared to basic recursion
var iterations = 100;
var n = 1000000;
benchmarkFib(fibbonacciRecursive, 40, 5);
benchmarkFib(fibbonacciRecursiveMemoized, 10000, iterations);
benchmarkFib(fibbonacciIterative, n, iterations);
benchmarkFib(fibbonacciIterativeMemoized, n, iterations);


