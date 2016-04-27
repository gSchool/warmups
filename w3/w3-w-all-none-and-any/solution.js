/*
As a part of this warmup, you need to create three functions that one needs to be able to call upon an array:

all

This function returns true only if the predicate supplied returns true for all the items in the array

[1, 2, 3].all(isGreaterThanZero) => true
[-1, 0, 2].all(isGreaterThanZero) => false

none

This function returns true only if the predicate supplied returns false for all the items in the array

[-1, 2, 3].none(isLessThanZero) => false
[-1, -2, -3].none(isGreaterThanZero) => true

any

This function returns true if at least one of the items in the array returns true for the predicate supplied

[-1, 2, 3].any(isGreaterThanZero) => true
[-1, -2, -3].any(isGreaterThanZero) => false
You do not need to worry about the data supplied, it will be an array at all times.
*/

// [1, 2, 3].all(isGreaterThanZero) => true
// [-1, 0, 2].all(isGreaterThanZero) => false
Array.prototype.all = function (p) {
  for (var i = 0 ; i < this.length ; i++) {
    currentIndex = this[i]
    if (p(currentIndex) === false) {
      return false
    };
  }
  return true
};

// OR

Array.prototype.all = function (p) {
  return this.filter(p).length == this.length;
};



// [-1, 2, 3].none(isLessThanZero) => false
// [-1, -2, -3].none(isGreaterThanZero) => true
Array.prototype.none = function (p) {
  var count = 0
  for (var i = 0 ; i < this.length ; i++) {
    currentIndex = this[i]
    if (p(currentIndex) !== true) {
      count +=1 
    };
  }
  if (count !== this.length) {
    return false
  }
  return true
};

// OR

Array.prototype.none = function (p) {
  return this.filter(p).length == 0;
};


// [-1, 2, 3].any(isGreaterThanZero) => true
// [-1, -2, -3].any(isGreaterThanZero) => false
Array.prototype.any = function (p) {
    var count = 0
    for (var i = 0 ; i < this.length ; i++) {
      currentIndex = this[i]
      if (p(currentIndex) === true) {
        console.log(p(currentIndex),"true is true")
        count +=1 
      };
    }
    if (count > 0) {
      return true
    }
    return false
};

// OR

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};

// use these to test your array methods!
function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

// write some of your own invocations below, 
// do your results match the original expected results?
// YOUR CODE HERE

module.exports = {
  attendance:"wordy word here"
}