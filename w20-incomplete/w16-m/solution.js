// Compare two strings by comparing the sum of their letter-Values (char-Value).
// For comparing treat all letters as UpperCase.

// Empty and null-Strings should be treated as they are equal.
// If the string contains other characters than letters, treat the whole string as it would be empty.

// Examples:

// "AD","BC" -> equal

// "AD","DD" -> not equal

// "gf","FG" -> equal

// "zz1","" -> equal

// "ZzZz", "ffPFF" -> equal

// "kl", "lz" -> not equal

// null, "" -> equal

function compare(s1, s2) {
  if (s1 === '' || s2 === '' || !s1 || !s2 || !(s1.match(/[a-z]/i)) || !(s1.match(/[a-z]/i))) {
    return true;
  }
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  var first = 0, second = 0;   
  for (var i = 0; i < s1.length; i++) {
    first += s1.charCodeAt(i);    
  }
  for (var j = 0; j < s2.length; j++) {
    second += s2.charCodeAt(j);    
  }
  if (first === second) {
    return true;
  }  
    return false;
}

module.exports = {
 compare: compare,
 attendance: "much words" 
}