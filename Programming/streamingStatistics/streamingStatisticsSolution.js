/*
 Frequently in programming, memory is a limiting factor. When we're pulling
 data from an API or even when we're tracking our own user metrics, we have
 to worry about the amount of data we're storing. 

 Speed is another common limiting factor for programs. In the benchmarking code
 below I hope to convince you that this Stream data structure is not only more
 memory efficent, but also much, much, much faster than the Array approach.

 Lets assume we want to know the sum, average, and median of some list of numbers
 but we know that the list is going to be too long for us to store. How can we
 design a data structure which stores significantly less raw data than an array
 but which maintains enough information to compute the sum, average, and median?

 This Stream is such a data structure.
*/
function Stream() {
	// In order compute the sum, we only need to store one number. 
	var sum = 0;

	// In order to compute the average, we just need the sum and a
	// counter.
	var count = 0;

	// In order to store the median we need to know how many of 
	// each number we saw. 
	var numberCounts = {};

	this.getCount = function() {
		return count;
	}

	// Sum is easy, we keep the sum as we recieve numbers
	this.sum = function() {
		return sum;
	}

	// Median is tricky
	this.median = function() {
		// determine where the middle is
		var mid = count / 2;

		// determine if we need to return a 'mean of two' for the median
		var getTwo = (count / 2) % 2 === 0

		// we're going to count up until we get to 'mid'
		var numbersCounter = 0;

		// these variables are to enable us to perform the logic needed
		// to get a 'mean of two'
		var meanOfTwo;
		var seenFirst = false;

		// It's dangerous to assume the order of number counts
		// http://stackoverflow.com/questions/280713/elements-order-in-a-for-in-loop
		// The order of keys is "implementation specific"
		// meaning IE and Chrome are allowed to handle them differently

		// Because of this, I'm breaking the rules a little here
		// and using an array. However, the maximum size of this
		// array 'orderedKeys' is 100. why is that?
		var orderedKeys = Object.keys(numberCounts).sort(function(a, b) {
			return Number(a) - Number(b);
		});

		// That said, this commented out version of the for-loop works in node
		// firefox, and chrome. It's not "guaranteed" to work, but it does. Odd right?
		// this is called "implenetation specific behavior" and this
		// type of ambiguity exists in many languages. 
		// for(key in numberCounts) {

		for(var i = 0; i < orderedKeys.length; i ++) {
			key = orderedKeys[i]; // Comment out this line if you're using the other for loop
			numbersCounter += numberCounts[key];
			
			// If we have an even number of items and we're at 
			// EXACTLY the midpoint, then we have to look at the
			// next key to determine the median. This code handles that case.

			// IF we set seenFirst to true, we're on the second of
			// two for the mean of two. 
			// If (numbersCounter === mid && getTwo) then we're on the first of two 
			if(seenFirst || (numbersCounter === mid && getTwo)) {
				// If we haven't gotten the first of the two 
				// median values, save this key.
				if(!seenFirst) {
					meanOfTwo = Number(key);
					seenFirst = true;
				}
				// If we HAVE seen the first one, we can return
				// the sum of this key, and the last key, divided by 2
				else {
					return (meanOfTwo + Number(key)) / 2;
				}
			}
			// If we've gone PAST the midpoint on this particular
			// key, then regardless of whether the length is even or odd
			// we can just return the current key
			else if(numbersCounter >= mid) {
				return Number(key);
			}
		}
	}

	// Average is just the sum / count
	this.average = function() {
		return sum / count;
	}

	// When we stream a new value to our object
	// we need to update the sum, count, and numberCounts object.
	this.streamPush = function(num) {
		sum += num;
		count += 1;

		if(numberCounts[num] === undefined) {
			numberCounts[num] = 1;
		}
		else {
			numberCounts[num] += 1;
		}
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

console.log("TESTS PASSED, RUNNING BENCHMARKS!");

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