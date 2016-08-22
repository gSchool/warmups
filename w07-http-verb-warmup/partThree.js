// 🐾🐾🐾 PART THREE 🐾🐾🐾
var parseRequest = function (inputString) {

  var request = {};
  var linesArr = inputString.split('\n');
  var firstLine = linesArr[0].split(' ');
  request.headers = {};
  request.verb = firstLine[0];
  request.path = firstLine[1];
  request.protocol = firstLine[2];

  // grab all headers not including the body
  var y = 1
  while (linesArr[y+1]) {
    var currentLine = linesArr[y]
    var currentKeyValueArray = currentLine.split(':');
    var key = currentKeyValueArray[0];
    var value = currentKeyValueArray[1];
    request.headers[key] = value;
    y++
  } // END FOR LOOP

  if (request.path.indexOf('?') !== -1) {
    request.query = {};
    var query = request.path.split('?')[1];
    var queryPairsArr = query.replace('&amp;', '&').split('&');
    for (var i = 0 ; i < queryPairsArr.length ; i++) {
      var keyValuePair = queryPairsArr[i].split('=');
      var key = keyValuePair[0];
      var value = keyValuePair[1];
      request.query[key] = value;
    } // END FOR LOOP
  } // END IF

  if (request.verb === "POST") {
    request.body = {};
    var bodyString = linesArr[linesArr.length - 1];
    var bodyStringPairsArray = bodyString.split('&');

    for (var i = 0 ; i < bodyStringPairsArray.length ; i++) {
      var keyValues = bodyStringPairsArray[i].split('=');
      request.body[keyValues[0]] = keyValues[1]
    } // END FOR LOOP

  } 

  return request;

} // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}