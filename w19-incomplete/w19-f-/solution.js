// The graphic.jpg image gives an idea of how to cut a given "true" 
// rectangle into squares ("true" rectangle meaning that the two 
// dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array with the size of each of the squares.

// Examples

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

// Note: lng == wdth as a starting case would be an entirely 
// different problem and the drawing is planned to be interpreted 
// with lng != wdth. See warmup, Square into Squares. Protect trees!.

// When the initial parameters are so that lng == wdth, the 
// solution [lng] would be the most obvious but not in the spirit 
// of this warmup so, in that case, return null

function sqInRect(lng, wdth){
  if(lng == wdth || !lng || !wdth){
    return null;
  }
  
  var ans = [];
  var rect = [lng,wdth];
  
  while(rect[0] != 0 && rect[1] !=0){
    var squareSize = Math.min(rect[0], rect[1]);
    ans.push(squareSize);
    
    var b = rect[0];
    rect[0] = rect[1];
    rect[1] = b;
    
    if(rect[0] > rect [1]){
      rect[0] = rect[0] - squareSize;
    }else{
      rect[1] = rect[1] - squareSize;
    }
  }
  
  return ans;
}

module.exports = {
  sqInRect,
  attendance: "It always seems impossible until its done"
}
