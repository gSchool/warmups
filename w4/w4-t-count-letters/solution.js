function countLetters(s) {
  //write solution here
  var total = {};
  for(var i = 0; i < s.length; i++) {
    var curLetter = s[i].toLowerCase();
    if(total[curLetter]) {
      total[curLetter]++;
    } else {
      total[curLetter] = 1;
    }
  }
  return total;
}

module.exports = {
  countLetters: countLetters,
  attendance: 'Word Word Word Word Word Word'
};