function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lastWord = str.split(' ').pop();
  return lastWord.slice(-target.length) === target;
}

module.exports = {
  confirmEnding: confirmEnding
}