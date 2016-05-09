function compoundArray(a, b) {
  var result = [];
  for(var i=0;i<Math.max(a.length, b.length); i++) {
    if(!isNaN(a[i])) result.push(a[i]);
    if(!isNaN(b[i])) result.push(b[i]);
  }
  return result;
}

module.exports = {
  compoundArray:compoundArray
};