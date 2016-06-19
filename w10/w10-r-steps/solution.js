// Write a function that takes in a string and creates a step with that word. 

// E.g

// wordStep('SNAKES SHOE EFFORT TRUMP POTATO') ===

// [['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]
// Every word will end with the character that the next word will start with. 
// You will start top left of the array and end bottom right. All cells that are 
// not occupied by a letter needs to be a space ' '


function wordStep(str) {
  let wordsArr = str.split(' ').map(word => word.slice(1));
  wordsArr[0] = str.charAt(0) + wordsArr[0];
  let cols = 0;
  let rows = 1;
  let passedCols = 0;
  let passedRows = 0;
  let outArr = [];

  // Calc rows and cols number
  wordsArr.forEach((word, index) => {
    if (index % 2) {
      rows += word.length;
    } else {
      cols += word.length;
    }
  });

  // Use calculated data to create array
  for (let i = 0; i < rows; i++) {
    let row = new Array(cols).fill(' ');
    outArr.push(row);
  }

  // Fill table
  wordsArr.forEach((word, index) => {
    if (index % 2) {
      // Fill Y
      word.split('').forEach(char => {
        outArr[passedRows][passedCols] = char;
        passedRows++;
      });

      passedCols++; // Next word should start at next column
      passedRows--; // Keep at same rows with first char
    } else {
      // Fill X
      word.split('').forEach(char => {
        outArr[passedRows][passedCols] = char;
        passedCols++;
      });

      passedRows++; // ↑ ↑ ↑ ↑
      passedCols--; // Same reason as fill Y
    }
  });

  return outArr;
}

module.exports = {
 wordStep: wordStep,
 attendance: "much words" 
}