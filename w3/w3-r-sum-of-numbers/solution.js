/* Given two integers, which can be positive and negative, 
find the sum of all the numbers between and including a and b,
and return the sum. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example: 
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a, b ) {
  if (a === b) {
    return a
  }

  var accumulator = 0;

  if (a < b) {
    for (var i = a ; i <= b ; i++) {
      accumulator += a
      a++
    }
  } else {
    for (var i = b ; i <= a ; i++) {
      accumulator += b
      b++
    }
  }
  return accumulator
} // END FUNCTION


module.exports = {
  getSum:getSum,
  attendance:"WORD UP"
}


