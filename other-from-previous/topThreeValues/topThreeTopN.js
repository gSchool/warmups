/*
This version of the function will work for many cases. However
if we use 'badly' ordered input arrays this version has a bug. 
Specifically, if the input is already ordered from greatest to
least to some degree.
*/
function topThreeOrderBug(input) {

    // Number.NEGATIVE_INFINITY is a good choice here.
    // This is because we're looking for "max" values
    // and everything is greater than negative infinity. 
    var high = Number.NEGATIVE_INFINITY;
    var mid = Number.NEGATIVE_INFINITY;
    var low = Number.NEGATIVE_INFINITY;
    
    // For every value in the input array
    for (var i = 0; i < input.length; i++ ) {

        // If the current input value is greater than our
        // current max value, we should shift all the values
        // down one.  
        if(input[i] >= high) {
            low = mid;
            mid = high;
            high = input[i];
        }
        // Here is the bug -- what if input[i] is in between low and high,
        // not strictly greater than high?
    }
    
    // Make an array literal with our top values.   
    return [high, mid, low];
};

/*
This version of the function fixes the order bug we saw in the
previous version. Otherwise the code is the same. 
*/
function topThree(input) {
    var high = Number.NEGATIVE_INFINITY;
    var mid  = Number.NEGATIVE_INFINITY;
    var low  = Number.NEGATIVE_INFINITY;

    for(var i = 0; i < input.length; i++){
        var current = input[i];

        if(current > high) {
            low = mid;
            mid = high;
            high = current;
        }
        // Here we added two additional test cases
        // for when the current value is more than mid or low
        // but not more than high.
        else if(current > mid) {
            low = mid;
            mid = current;
        }
        else if(current > low) {
            low = current;
        }
    }

    return [high, mid, low];
}

/*
One of the downfalls of the above approach, is that it's
not clear how I could extend this solution to tackle "max n" 
instead of simply max 3. 

We can't just create an arbitrary number of vars,
since the code needs to be written BEFORE it runs.

In contrast, lets look at another approach to max 3. Here
we will take the input array, find and save the maximum value
from that input array, then remove the max value from the input 
array. 

We'll do that 3 times to get the maximum three.

A downfall of this approach is that input is modified.
Because arrays are reference type the ORIGINAL is CHANGED
when we call input.splice(indexOfMax,1)
*/ 
function topThreeIterative(input){
    var maxArr = [];
    
    // Three times, because we want "max 3"
    for(var j=0; j < 3; j++){
        // Use our helper function to get the highest number
        var topThreeNums = returnMax(input);

        // Put that number in the array to return
        maxArr.push(topThreeNums);

        // Find the index of the max number we just found
        var indexOfMax = input.indexOf(topThreeNums);
        
        // Modify the input array so it no longer contains our max
        input.splice(indexOfMax,1)
    }

    return maxArr;
}

/*
The great thing about this approach, is it's EASY to extend to max n.
I've changed two lines and this code just works. 

First I changed the function header, to accept another parameter 'n'.
*/
function topNIterative(input, n){
    var maxArr = [];
    
    // And this line changed from j < 3 to j < n;
    for(var j=0; j < n; j++){
        
        var topThreeNums = returnMax(input);
        maxArr.push(topThreeNums);

        var indexOfMax = input.indexOf(topThreeNums);
        input.splice(indexOfMax,1)
    }

    return maxArr;

}

// This helper function simply finds and returns the 
// maximum value from an input array.
function returnMax(input){
    var maxNum = input[0];
    for(var i = 1; i < input.length; i++){
        if (input[i] > maxNum){
            maxNum = input[i]
        }
    }
    return maxNum;
}

/*
An alternate approach to top N is to loop through the input
and in a nested loop, go through the 'topN' array. 

Each time we encounter a situation where the current input value
is more than the current 'top' value, we insert that value into 
our top value list. 

This approach does not alter the input array 
*/
function topNAlternate(input, n) {
    
    var topN = [];

    // For each input
    for(var i = 0; i < input.length; i++){
        var current = input[i];

        // For each top value
        for(j = 0; j < n; j++ ){
            var currentTopValue = topN[j];
            
            // If we don't have n elements in our top list yet,
            // or if current > currentTopValue
            if(topN.length < n || current > currentTopValue) {
                // this inserts current into topN at index j.
                // the 0 means "remove 0 elements". 
                topN.splice(j, 0, current);
                break;
            }
        }   
    }
 
    // Because the above code is "add only" topN might actually be
    // longer than n elements, so before we return we slice it. 
    return topN.slice(0, n);
}


/* 
TEST CASES FOR THE DEMONSTRATION 
THE CODE BELOW MAY NOT BE PARTICULARLY INTERESTING OR VALUABLE TO YOU
*/

var rand;
var bigToSmall;
var bigToSmallNegative;
var smallToBig;
var smallToBigNegative;
function resetInputs() {
     rand = {
        test: [1,2,3,4.3,5,-6,7,8,9,-10, 50, 99, Number.POSITIVE_INFINITY, 1, -7],
        expected: [Number.POSITIVE_INFINITY, 99, 50]
    }

    // Ordered content greatest to least
     bigToSmall = {
        test: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        expected: [10, 9, 8]
    }
     bigToSmallNegative = {
        test: [-1, -2, -3, -4, -5 ,-6, -7, -8, -9. -10],
        expected: [-1, -2, -3]  
    } 

    // Ordered content least to greatest
     smallToBig = { 
        test: [0,1,2,3,4,5],
        expected: [5, 4, 3]
    }
    smallToBigNegative = {
        test: [-5, -4, -3, -2, -1, 0, 1, 2],
        expected: [2, 1, 0]
    }  
}

function printResults(testFunc, testObj, n) {
    console.log("Testing " + testFunc.name + " with input " + testObj.test);
    var specialMagic;
    if(n === undefined) {
        console.log("  Expected: " + testObj.expected);
        console.log("  Received: " + testFunc(testObj.test, n));    
    }
    else {
        specialMagic = testFunc(testObj.test, n);
        console.log("  Expected: " + specialMagic);
        console.log("  Received: " + specialMagic);
    }

    console.log();
}

// RUNNING THE DEMONSTRATION CODE
resetInputs();
console.log("============================");
console.log("----------Order Bug---------")
printResults(topThreeOrderBug, rand);
printResults(topThreeOrderBug, bigToSmall);
printResults(topThreeOrderBug, bigToSmallNegative);
printResults(topThreeOrderBug, smallToBig);
printResults(topThreeOrderBug, smallToBigNegative);

console.log("============================");
console.log("------Top Three Fixed-------")
printResults(topThree, rand);
printResults(topThree, bigToSmall);
printResults(topThree, bigToSmallNegative);
printResults(topThree, smallToBig);
printResults(topThree, smallToBigNegative);

console.log("============================");
console.log("----Top Three Iterative-----")
printResults(topThreeIterative, rand);
printResults(topThreeIterative, bigToSmall);
printResults(topThreeIterative, bigToSmallNegative);
printResults(topThreeIterative, smallToBig);
printResults(topThreeIterative, smallToBigNegative);

// Handle that topThree alters the input array
var altRand = rand.test;
var altBS = bigToSmall.test;
var altBSN = bigToSmallNegative.test;
var altSB = smallToBig.test;
var altSBN = smallToBig.test; 
resetInputs();
console.log("BUT LOOK, ALL OF OUR INPUT ARRAYs HAVE CHANGED!!");
console.log(rand.test + " became\n" + altRand + "\n");
console.log(bigToSmall.test+ " became\n" + altBS + "\n");
console.log(bigToSmallNegative.test + " became\n" + altBSN + "\n");
console.log(smallToBig.test + " became\n" + altSB + "\n");
console.log(smallToBigNegative.test + " became\n" + altSBN + "\n");

console.log("============================");
console.log("-------Top N Iterative-----")
printResults(topNIterative, rand, 5);
printResults(topNIterative, bigToSmall, 5);
printResults(topNIterative, bigToSmallNegative, 5);
printResults(topNIterative, smallToBig, 5);
printResults(topNIterative, smallToBigNegative, 5);

resetInputs();
console.log("============================");
console.log("-------Top N Alternate-----")
printResults(topNAlternate, rand, 5);
printResults(topNAlternate, bigToSmall, 5);
printResults(topNAlternate, bigToSmallNegative, 5);
printResults(topNAlternate, smallToBig, 5);
printResults(topNAlternate, smallToBigNegative, 5);
