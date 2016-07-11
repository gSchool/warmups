// Paths in the Grid

// You have a grid with m rows and n columns.
// Return number of ways that you can start from point A to reach point B.
// you are only allowed to move right and up.

// In the picture grid-picture.png (take a look), there are 10 pathes from A to B.

// Hint: Use mathematical permutation and combination

// if you have time, write some more tests!

function numberOfRoutes(m, n){
  let paths;
  paths = (factorial(m+n)/factorial(n))/(factorial(m));
  return paths;
}

function factorial(num){
  if (num < 0) {
        return -1;
  }else if (num == 0) {
     return 1;
  }else {
      return (num * factorial(num - 1));
  }
}

module.exports = {
 numberOfRoutes: numberOfRoutes,
 attendance: "much words" 
}