 //  ___           _ _     ___      _      _     _   _         __      __    _           
 // |   \ ___ _ _ ( ) |_  |   \ _ _(_)_ _ | |__ | |_| |_  ___  \ \    / /_ _| |_ ___ _ _ 
 // | |) / _ \ ' \|/|  _| | |) | '_| | ' \| / / |  _| ' \/ -_)  \ \/\/ / _` |  _/ -_) '_|
 // |___/\___/_||_|  \__| |___/|_| |_|_||_|_\_\  \__|_||_\___|   \_/\_/\__,_|\__\___|_|  
                                                                                                                                                                                   
// Given a two-dimensional array representation of a glass of mixed liquids, 
// sort the array such that the liquids appear in the glass based on their 
// density. (Lower density floats to the top) The width of the glass will not 
// change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// [                            [
//  ['H', 'H', 'W', 'O'],        ['O','O','O','O']
//  ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
//  ['H', 'H', 'O', 'O']         ['H','H','H','H']
//  ]                           ]
// The glass representation may be larger or smaller. If a liquid doesn't 
// fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
  if (glass.length === 0) {return glass}
   
  var temp
  var flatArr = []
  var masterArr = [];
  var glassWidth = glass[0].length;


  for (arr in glass) {
    for (item in glass[arr]) {
      if (glass[arr][item] === "O" ) {
        temp = glass[arr][item]
        flatArr.push({1:"O"});
      } else if (glass[arr][item] === "A" ) {
        temp = glass[arr][item]
        flatArr.push({2:"A"});
      } else if (glass[arr][item] === "W" ) {
        temp = glass[arr][item]
        flatArr.push({3:"W"});
      } else if (glass[arr][item] === "H" ) {
        temp = glass[arr][item]
        flatArr.push({4:"H"});
      } // END IF
    } // END FOR LOOP
  } // END FOR LOOP

  flatObj = flatArr.sort(function(a,b){
    return Object.getOwnPropertyNames(a) - Object.getOwnPropertyNames(b)
  });

  flatArr = [];
  for (x in flatObj) {
    var key = Object.keys(flatObj[x]).toString()
    flatArr.push(flatObj[x][key]);
  }

  var subArr = [];
  for (var i = 0 ; i <= flatArr.length ; i++) {
      if (subArr.length === glassWidth) {
        masterArr.push(subArr)
        subArr = [];
        subArr.push(flatArr[i])
      } else if (subArr.length < glassWidth) {
        subArr.push(flatArr[i]);
      } // END IF
  } // END FOR LOOP

  return masterArr;
}


module.exports = {
 separateLiquids: separateLiquids,
 attendance: "much words" 
}