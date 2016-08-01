// Write a function that sums squares of numbers in list that may contain more lists

// Example:

// var l = [1,2,3]
// SumSquares(l) == 14

// var l = [[1,2],3]
// SumSquares(l) == 14

// var l = [[[[[[[[[1]]]]]]]]]
// SumSquares(l) == 1

// var l = [10,[[10],10],[10]]
// SumSquares(l) == 400
// Note: your solution must NOT modify the original list

function sumSquares(l){
  var total = 0;
  for (var i = 0; i < l.length; i++){
    if (Array.isArray(l[i])){
      total += handleNestedArray(l[i]);
    }else{
      total += Math.pow(l[i], 2);
    }
  }
  return total;
}

function handleNestedArray(arr){
  var subtotal = 0;
  for (var i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      subtotal += handleNestedArray(arr[i]);
    }else{
      subtotal += Math.pow(arr[i], 2);
    }
  }
  return subtotal;
}

module.exports = {
 sumSquares: sumSquares,
 attendance: "much words" 
}