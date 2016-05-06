function accum(s) {
  var str = '';
  s = s.split('');
  s.forEach(function(el,i) { 
    for(var j = 0; j < i+1; j++) {
      var letter = j > 0 ? s[i].toLowerCase() : s[i].toUpperCase(); 
      str += letter;
    }
    if(i < s.length-1) str += '-';
  });
  return str;
}

module.exports = {
  accum: accum
};