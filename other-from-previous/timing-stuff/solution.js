/*
 Designing a good timing experiment can help you on the job 
 when you're working on performace optimizations, and also 
 for writting benchmarking tests. This warmup is a challange
 to design such an experiment in order to better understand how
 timing code works. 

 First, examine this function which, when called will print the
 time at which the function started, and the the when the setTimeout
 event returned from the event loop -- roughly 500ms but as you'll
 see it's not exact.

 Read the function. Once you understand how it works move on to
 the next comment. 
   hint: Try running this program in your console and see what prints.
   hint: Lookup what new Date.getTime() does.
*/

function timeTimeout(callbackFunction) {
	var startTime = new Date().getTime();

	setTimeout(function(){
		// ALWAYS get the timestamp before you do any
		// logging or other work -- otherwise your time 
		// will be impacted by writing to the console, 
		// which is very slow.
		var endTime = new Date().getTime();
		var millisecondsElapsed = endTime - startTime;

		if(callbackFunction === undefined) {
			console.log("START TIME: " + startTime);
			console.log("END TIME  : " + endTime);
			console.log("ELASPED   :"  + millisecondsElapsed);
			console.log("callbackFunction was undefined -- exit\n\n");
		}
		else {
			callbackFunction(millisecondsElapsed);	
		}
	}, 500)
}

timeTimeout();

/* 
  Hint: You will have to use the fact that timeTimeout 
  accepts a callback function which passes the elapsed
  milliseconds as its parameter.
*/
timeTimeout(function(millisecondsElapsed){
	console.log("Entered Callback Function===");
	console.log("Time elapsed: " + millisecondsElapsed);
	console.log("\n\n");
});

/*
  Here are two solutions, one takes longer but makes sure that
  only 1 timeout function is running at once.

  The other sets 100 timeouts all at once.  
*/
function computeAverageTimeOverlapping() {
	var times = [];
	var sumOfTimes = 0;

	for(var i = 0; i < 100; i++) {
		timeTimeout(function(ms) {
			times.push(ms);
			sumOfTimes += ms;

			if(times.length === 100) {
				console.log("Timings complete, avg time:")
				console.log(sumOfTimes / times.length);
			}
		});
	}
}

function computeAverageTimeNoOverlap() {
	var times = [];
	var sumOfTimes = 0;

	function handler(ms){
		times.push(ms);
		sumOfTimes += ms;

		if(times.length === 100) {
			console.log("Timings complete, avg time:")
			console.log(sumOfTimes / times.length);
		}
		else {
			timeTimeout(handler);
		}
	}

	timeTimeout(handler);
}

//computeAverageTimeOverlapping();
// computeAverageTimeNoOverlap();

/*
 ==================== Part Two =====================

 Below are two programs to solve the same popular problem:
 
 compute the nth digit of the fibbonacci sequence:
 	[1, 1, 2, 3, 5, 8, 13, 21, 34 ...]

 One is recursive, and one is iterative; One is also slower. 
 Write some code that can prove that the recursive solution 
 is slower, by timing both functions. 

 Once you've got the functions timed, experiment with changing 
 the value of n and see how it affects the time for each version
 differently.
*/
function timeFibbonacciVersions(){
	// See the Fibonacci directory benchmarking.js in this 
	// same repository for more detailed and robust solution:

	var recursiveStart = new Date().getTime();
	fibbonacciRecursive(30);
	var recursiveEnd = new Date().getTime();

	var iterativeStart = new Date().getTime();
	fibbonacciIterative(30);
	var iterativeEnd = new Date().getTime();

	var recursiveTime = recursiveEnd - recursiveStart;
	var iterativeTime = iterativeEnd - iterativeStart;

	if(recursiveTime > iterativeTime) {
		console.log("Recursive is slower");
	} else {
		console.log("Iterative is slower");
	}
}

timeFibbonacciVersions();


/*
  Do not alter these two functions.
*/
function fibbonacciRecursive(n) {
	if(n <= 1) {
		return 1;
	}

	return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
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