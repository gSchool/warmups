function countVowels(s) {
  //write solution here
  // var total = {};
  // for(var i = 0; i < s.length; i++) {
  //   var curLetter = s[i].toLowerCase();
  //   if(total[curLetter]) {
  //     total[curLetter]++;
  //   } else {
  //     total[curLetter] = 1;
  //   }
  // }
  // return total;
  var vowels = s.match(/[aeiou]/gi) || [];
  var vowelCount = {};
  vowels.forEach(function(el) {
    var curLetter = el.toLowerCase();
    if(vowelCount[curLetter]) {
      vowelCount[curLetter]++;
    } else {
      vowelCount[curLetter] = 1;
    }
  });
  return vowelCount;
}

module.exports = {
  countVowels: countVowels,
  attendance: 'Word Word Word Word Word Word'
};