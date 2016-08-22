function powerOf4(x) {
  //write iterative solution here
  if(isNaN(x)) return false;
  if (x < 4) return false;
  while ( x >= 4) x /= 4;
  return x === 1;
}

function powerOf4R(x,checked) {
  //write recursive solution here
  if(isNaN(x)) return false;
  if(x < 4) {
    if(!checked) {
      return false;
    } else {
      return x === 1;
    }
  } else {
    checked = true;
    x /= 4;
    return powerOf4R(x, checked);
  }
  
}

module.exports = {
  powerOf4: powerOf4,
  powerOf4R: powerOf4R,
  attendance:"wordy word here"
};