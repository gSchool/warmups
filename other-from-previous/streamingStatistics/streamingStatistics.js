/*
 In programming, often there are performance constraints that prevent
 us from using the most intuitive approach to a problem.
 
 In this warmup, we need to be able to compute the sum, average, and median
 of a very long array of numbers. Unfortunately, using an Array to hold all
 the values, and computing the sum, average, median, and count is too slow
 and uses too much memory. 

 Instead, we need a data structure that stores significantly less data
 but contains enough information to get the values we care about. 

 This Stream is meant to be such a data structure. Fill out this constructor
 function (including the bodies of the functions) such that:
  1. this.count returns the number of times this.streamPush has been called
  2. this.sum returns the sum of the values sent through this.streamPush
  3. this.average returns the average of the values sent through this.streamPush
  4. this.median returns the median of the values sent through this.streamPush

  You may not use an array to store the values in stream push. 
  You may not change the names of the functions in Stream() 
*/
function Stream() {

	this.count = function() {

	}

	this.sum = function() {

	}

	this.average = function() {

	}

	this.median = function() {
		
	}

	this.streamPush = function(num) {

	}
}

/************************
 The test code starts here
*************************/

// This first test function creates 100 random numbers betweet
// 0 and 100. Then it adds them both to an array, and to a stream. 
// After that, it prints out the sum, average, and median for each
// approach. You should see that they are always the same. 
var passedRandomTest = false;
(function() {
	// Create a streamer, and an array. 
	var streamer = new Stream();
	var arr = [];

	// Add 100 random integers between 0-100 to each
	for(var i = 0; i < 100; i++) {
		var current = Math.floor(Math.random() * 100);
		streamer.streamPush(current);
		arr.push(current);
	}

	// This is how we get those values for an array
	arr.sort(function(a, b) {
	  return a - b;
	});

	// get the sum
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	// use the sum to get the average
	var avg = sum / arr.length;

	// get the median
	var median;
	if(arr.length % 2 === 0) {
		var itemOne = arr[(arr.length / 2)];
		var itemTwo = arr[(arr.length / 2) - 1];
		median = (itemOne + itemTwo) / 2;
	}
	else {
		median = arr[Math.floor(arr.length / 2)]
	}

	console.log("--sum--");
	console.log(sum);
	console.log(streamer.sum());

	console.log("\n--avg--");
	console.log(avg);
	console.log(streamer.average());

	console.log("\n--median--");
	console.log(median);
	console.log(streamer.median());

	passedRandomTest = (median === streamer.median() &&
		sum === streamer.sum() &&
		avg === streamer.average()) 
})();

// If your tests pass, automatically start the benchmarking!
if(!passedRandomTest) return;

console.log("TESTS PASSED, RUNNING BENCHMARKS!")

// TIMING CODE -- Our Stream object is WAY MORE EFFECTIVE than an array.
// Not only do arrays run out of memory but it also slows down significantly
// as we add values.

// This function benchmarks the array version. You'll see that it 
// slows down with each new batch of random elements. You'll also 
// notice that I explicitly end the do/while loop after arr.length
// becomes 70,000,000. My system crashed after that size, your results
// may vary. 
(function() {
	var arr = [];
	console.log("\n\n=====Benchmarking the Array version ======");
	do {
		var start = new Date().getTime();

		for(var i = 0; i < 10000000; i++) {
			var current = Math.floor(Math.random() * 100);
			arr.push(current);
		}

		arr.sort(function(a, b) {
		  return a - b;
		});

		var sum = 0;
		for(var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}

		var avg = sum / arr.length;

		var median;
		if(arr.length % 2 === 0) {
			var itemOne = arr[(arr.length / 2)];
			var itemTwo = arr[(arr.length / 2) - 1];
			median = (itemOne + itemTwo) / 2;
		}
		else {
			median = arr[Math.floor(arr.length / 2)]
		}
		var end = new Date().getTime();
		console.log("Successfully computed Array for size: " + arr.length);
		console.log("computing metrics for this size took " + (end - start) + "ms\n");
	} while(i < 70000000) // My system ran out of memory on 80000000
})();

// Our Stream object will scale nearly infinitely, and the operations
// will run quickly no matter how many items we put in them. 
// Unlike for Arrays, I didn't add any stopping code to this function.
// See if you can let it run long enough to run out of memory... 
// Also notice how much FASTER this version of the code is!

// Even when the Stream has handled double the limit of the array
// implementation, it's still ~10x faster. 

// I hope this demonstration illustrates why programmers need to be
// able to find creative solutions to problems. Often the most 
// "intuitive" way to solve a problem is not good enough.
(function() {
	console.log("\n\n======Benchmarking the Stream version ======");
	var streamer = new Stream();
	while(true) {
		var start = new Date().getTime();
		for(var i = 0; i < 10000000; i++) {
			var current = Math.floor(Math.random() * 100);
			streamer.streamPush(current);
		}

		streamer.sum();
		streamer.average();
		streamer.median();

		var end = new Date().getTime();
		console.log("Successfully computed Stream for size: " + streamer.getCount());
		console.log("computing metrics for this size took " + (end - start) + "ms\n");
	}
})();