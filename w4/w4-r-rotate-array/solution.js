function rotate(arr,k) {
  if(k > arr.length) {
          var temp = Math.floor(k/arr.length);
          k = k - temp*arr.length;
      }
      
      for(var j = 0; j < k; j++) {
          var x = arr.pop();
          arr.unshift(x);
      }
  return arr;
}

module.exports = {
  rotate: rotate
};