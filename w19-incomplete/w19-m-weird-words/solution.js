// In this warmup you will have to change every letter in a given string to the
// next letter in the alphabet. You will write a functionnextLetter to do this.
// The function will take a single parameter str (string).
//
// EXAMPLES:
//
// "Hello" --> "Ifmmp"
//
// "What is your name?" --> "Xibu jt zpvs obnf?"
//
// "zoo" --> "app"
//
// "zzZAaa" --> "aaABbb"
//
// Note: spaces and special characters should remain the same. Capital letters
// should transfer in the same way but remain capitilized.

function nextLetter(str) {
  var result = '';
  for(var i = 0; i < str.length; ++i) {
    result +=  shiftChar(str[i]);
  }
  return result;
}

function shiftChar(chr) {
  if(/\w/.test(chr)) {
    var code = chr.charCodeAt(0)+ 1;
    if(code % 32 == 27) code -= 26;
    chr = String.fromCodePoint(code);
  }
  return chr;
}

module.exports = {
 nextLetter: nextLetter,
 attendance: "In order to succeed, we must first believe that we can."
}
