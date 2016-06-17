function inAscOrder(arr) {
  for (var i=1; i<arr.length; ++i) {
    if (arr[i] < arr[i-1]) return false;
  }
  
  return true;

  // Another way
  // var copy = arr.slice();
  // var sorted = copy.sort(function(a,b){
  //   return a - b;
  // });
  // return arr.toString() === sorted.toString();
  
}

module.exports = {
  inAscOrder: inAscOrder
};