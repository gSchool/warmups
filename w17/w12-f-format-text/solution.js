
// Write a function format that takes two arguments, text and width, 
// and formats the text to fit the width.

// Your function should divide the given text into lines using newline 
// characters. It should fit as many words into each line as possible 
// without exceeding the given width or splitting any words between two
//  lines. There should not be a space at the beginning or end of any line.
//   For example, here is some text formatted with a width of 50:

// Lorem ipsum dolor sit amet, consectetur adipiscing
// elit. Aliquam nec consectetur risus. Cras vel urna
// a tellus dapibus consequat. Duis bibendum
// tincidunt viverra. Phasellus dictum efficitur sem
// quis porttitor. Mauris luctus auctor diam id
// ultrices. Praesent laoreet in enim ut placerat.
// Praesent a facilisis turpis.
// And the same text formatted with a width of 30:

// Lorem ipsum dolor sit amet,
// consectetur adipiscing elit.
// Aliquam nec consectetur risus.
// Cras vel urna a tellus dapibus
// consequat. Duis bibendum
// tincidunt viverra. Phasellus
// dictum efficitur sem quis
// porttitor. Mauris luctus
// auctor diam id ultrices.
// Praesent laoreet in enim ut
// placerat. Praesent a facilisis
// turpis.

// For the purpose of this exercise, words can contain any non-whitespace
// character and all words are separated by a single space. Words will
// never be longer than the provided width.

function format(text, width) {
  var restOfTheText = text;
  var arrayOfLines = [];
  
  //for (var i = 0; i < 30; ++i)
  while (restOfTheText.length !== 0)
  {
    // Get a substring of the required length
    var subText = "";
    
    // Not the end of the text..
    if (restOfTheText.length > width)
    {
      // Take a length of width+1 if the whitespace is the width-th character
      subText = restOfTheText.substr(0, width+1);
      
      // Now, get this substring cropped to the beginning of the last word
      var lastSpaceIdx = subText.lastIndexOf(' ');
      if (lastSpaceIdx !== -1)
      {
        subText = subText.substr(0, lastSpaceIdx);
      }
    }
    else
    {
      // End of the text
      subText = restOfTheText.substr(0);
    }
    
    // Store it within the array and remove it from the initial text
    arrayOfLines.push(subText);
    // subText.length + 1, because we don't keep the last whitespace
    restOfTheText = restOfTheText.substr(subText.length + 1);
  }
  
  // We concatenate every line together
  var returnedText = arrayOfLines.shift();
  while (arrayOfLines.length !== 0)
  {
    returnedText += '\n' + arrayOfLines.shift();
  }
  
  // And return the resulting string
  return returnedText;
}

module.exports = {
 format: format,
 attendance: "much words" 
}