// 🐾🐾🐾 PART ONE 🐾🐾🐾

var parseRequest = function (inputString) {
  // yoyoyyosfasdfasdfasdfohhhh
  var request = {};
  request.headers = {};
  var linesArr = inputString.split('\n')
  var firstLine = linesArr[0].split(' ')
  request.verb = firstLine[0]
  request.path = firstLine[1]
  request.protocol = firstLine[2]
  for (var i = 1 ; i < linesArr.length ; i++) {
    var currentLine = linesArr[i]
    var currentKeyValueArray = currentLine.split(':');
    var key = currentKeyValueArray[0];
    var value = currentKeyValueArray[1];
    request.headers[key] = value;
  } // END FOR LOOP

  return request

} // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}