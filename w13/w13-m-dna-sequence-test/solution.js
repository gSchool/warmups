// Given a certain array of integers, create a function 
// that may give the minimum number that may be divisible for 
// all the numbers of the array.

// The array may have integers that occurs more than once:

// The array should have all its elements integer values. If 
// the function finds an invalid entry (or invalid entries) 
// like strings of the alphabet or symbols will not do the 
// calculation and will compute and register them, outputting 
// a message in singular or plural, depending on the number of invalid entries.

// If the string is a valid number, the function will convert it as an integer.

// All the None/nil elements of the array will be ignored:

// If the array has a negative number, the function will convert 
// to a positive one.


function primeFactors(n) {
  var factors = {}
  ,     prime = 2
  ,      left = Math.abs(n);
  
  while (left > 1) {
  
    while (left % prime === 0) {
      factors[prime] = (factors[prime] || 0) + 1;
      left /= prime;
    }
    
    prime += 1;
  }
  
  return factors;
}


// returns an object composed of the maximum
// values of the two input objects

function maxMerge(a, b) {
  var merge = {};
  
  for (var key in a) 
    merge[key] = Math.max(a[key], b[key] || 0);
  
  for (var key in b) 
    merge[key] = Math.max(a[key] || 0, b[key]);
  
  return merge;
}

function minSpecialMult(arr) {
  var factors = {}
  ,   product = 1
  ,  invalids = arr.filter(a => a !== null && isNaN(a))
  ,   entries = invalids.length;
  
  if (entries == 1) 
    return 'There is 1 invalid entry: ' + invalids.pop();
  
  if (entries > 1) 
    return 'There are ' + entries + ' invalid entries: ' 
         + "['" + invalids.join("', '") + "']";
  
  factors = arr.map(primeFactors).reduce(maxMerge, {});

  for (var prime in factors)
    product *= Math.pow(prime, factors[prime]);
  
  return product;
}

module.exports = {
 minSpecialMult: minSpecialMult,
 attendance: "much words" 
}