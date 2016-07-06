// Description:

// Given a hash of letters and the number of times they occur, recreate 
// all of the possible anagram combinations that could be created using 
// all of the letters, sorted alphabetically.

// The inputs will never include numbers, spaces or any special characters, 
// only lowercase letters a-z.

// E.g. get_words({2=>["a"], 1=>["b", "c"]}) => 
// [
// "aabc", "aacb", "abac", "abca", "acab", 
// "acba", "baac", "baca", "bcaa", "caab", 
// "caba", "cbaa"
// ]

function getWords(hash)
{ 
  numbers = createWord(hash);
   result = allAnagrams(numbers);
  return sortAlphabetically(result);
  
}

/**
* Create word based on hash
*
* Key is the number of times the letter must be in the anagram
**/
var createWord = function(hash) {
  var numbers = '';

  for (var propt in hash){
    var number_of_times = propt;
    
    for (var times = 1; times <= propt; times++) {
      hash[propt].map(function(number) {
        numbers = numbers + number;
      });
    }
  }
  return numbers;
}

/**
* Create anagram from sting
**/
var allAnagrams = function(str) {
    var anagrams = {};
    
    var recurse = function(ana, str) {
      if (str === '') 
        anagrams[ana] = 1;
      for (var i = 0; i < str.length; i++)
        recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    };
    recurse('', str);
  
    return Object.keys(anagrams);
}


/**
* nSort the anagrams to alphabetical order
**/
var sortAlphabetically = function(result) {
  return result.sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
  });
}

module.exports = {
 getWords: getWords,
 attendance: "much words" 
}