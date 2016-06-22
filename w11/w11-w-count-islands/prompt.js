//    ____    __             __  _____               __ 
//   /  _/__ / /__ ____  ___/ / / ___/__  __ _____  / /_
//  _/ /(_-</ / _ `/ _ \/ _  / / /__/ _ \/ // / _ \/ __/
// /___/___/_/\_,_/_//_/\_,_/  \___/\___/\_,_/_//_/\__/ 
                                                     

// Description:

// Given a string representation of a 2d map, return the number of islands in the map.

// Land spaces are denoted by a zero.
// Water is denoted by a dot.
// Rows are denoted by newlines ('\n').
// Two land spaces are considered connected if they are adjacent 
// (horizontal or vertical, but not diagonal).

// Example:

// You may be given the string ".0...\n.00..\n....0" as input.

// This correlates to a grid, like this:

// .0...
// .00..
// ....0

// This would be an example of a map that contains two islands; one with 3 
// pieces of land, one with 1 piece of land.

// More example:

// This is 5 islands:

// 0...0
// ..0..
// 0...0

// This is 3 islands:

// ..000.
// ..000.
// ..000.
// .0....
// ..000.
// PUZZLES

function countIslands (mapStr) {
  // find x length of map and initialize our counter
  var xLength = mapStr.indexOf('\n');
  var islandCount = 0;
  for (var i = 0; i < mapStr.length; i++) {
    if (mapStr[i] === '0') {
      // we're looking at land, let's increase our count and recursively
      // destroy all of the land connected to this piece
      islandCount++;
      mapStr = destroyIsland(i, xLength, mapStr);
    }
  }
  return islandCount;
}

module.exports = {
 countIslands: countIslands,
 attendance: "much words" 
}