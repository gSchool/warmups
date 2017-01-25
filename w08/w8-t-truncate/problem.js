// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(string, maxLength) {

  if (string.length > maxLength) {
    if (maxLength <= 3) {
      console.log("less than 2: ", string);
      string = string.slice(0, maxLength) + '...';
    } else {
      string = string.slice(0, maxLength-3) + '...';
      console.log('this is > max: ', string);
    }

  }
  return string;







}

module.exports = {
  truncateString: truncateString
};
