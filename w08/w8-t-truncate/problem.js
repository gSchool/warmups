// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(originalString, maxStringLength) {
  let stringLength = originalString.length

   if (maxStringLength >= stringLength) {
      console.log(originalString)
      return originalString
   }
      else if (maxStringLength <= 3) {
      return originalString.substring(0,maxStringLength) + "..."
   }
      else {
      return originalString.substring(0, (maxStringLength - 3)) + "..."
   }
}

module.exports = {
  truncateString: truncateString
};



// untruncString.substring(0, maxStringLength) + stringEnding;
