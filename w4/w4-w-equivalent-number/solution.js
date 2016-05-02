function equivalent(a,b) {
  //solution here
  var obj = {};
  a = a.toString();
  b = b.toString();
  if(a.length !== b.length) {
    var smaller = a.length < b.length ? a : b;
    var bigger = a.length > b.length ? a : b;
  } else {
    var smaller = a;
    var bigger = b;
  }
  for(var i = 0; i < smaller.length; i++) {
    var curNum = smaller[i];
    if(curNum !== 0) {
      if(obj[curNum]) {
        obj[curNum]++;
      } else {
        obj[curNum] = 1;
      }
    }
  }
  for(var j = 0; j < bigger.length; j++) {
    var curNum2 = bigger[j];
    if(curNum2 !== 0) {
      if(obj[curNum2] && obj[curNum2] > 0) {
        obj[curNum2]--;
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  equivalent: equivalent,
  attendance: 'Words'
};