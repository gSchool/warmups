// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function, 
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx!

function doubleChar(str) {
  if (typeof str === "string") return str.replace(/(.)/g, "$1$1")
  return "Ruh roh! That isn't a string!"
}

module.exports = {
  doubleChar:doubleChar,
  attendance:"wordy word here"
}