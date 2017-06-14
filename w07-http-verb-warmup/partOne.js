// 🐾🐾🐾 PART ONE 🐾🐾🐾
  // console.log('hey!');

  let inputString = "GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2";

var parseRequest = function (inputString) {
  //1. Change this http request into a string (add \n) so we can break it into pieces - replace spaces with \n
  //2. Need an empty request object to fill up
      //var request = {};
  //3. Need an empty request headers object
      //var request.headers = {};
  //4. Need to make each line into an array
      //split on \n
  //5. Split out GET request (1st array) by spaces
      //split on ' '
      //creates new array with method, path, and protocol
  //6. Take request object and set keys with values equal to the index of the value in the array:
    // - headers
    // - verb
    // - path
    // - protocol
  //7. Loop through the last 3 arrays (var i =1 since we already took care of the first array/line) in lineArray
  //8. Set a variable for current line
  //9. Split the line on : to get key value pairs
  //10. Set key from array[0]
  //11. Set value from array[1]
  //12. Add key to request.headers object and set value equal to value variable

// console.log(inputString);

    var request = {};
    request.headers = {};
    let lineArray = inputString.split('\n');
    // console.log(lineArray);
    let firstLine = lineArray[0].split(' ');
    // console.log(firstLine);
    // console.log(request);
    request.verb = firstLine[0];
    // console.log(request);
    request.path = firstLine[1];
    // console.log(request);
    request.protocol = firstLine[2];
    // console.log(request);

    for (var i = 1; i < lineArray.length; i++){
      // console.log(lineArray[i]);
      var currentLine = lineArray[i];
      // console.log(currentLine);
      var currentKeyValuePair = currentLine.split(':');
      // console.log(currentKeyValuePair);
      var key = currentKeyValuePair[0];
      // console.log('key', key);
      var value = currentKeyValuePair[1];
      // console.log('value', value);
      console.log(request.headers);
      request.headers[key] = value;
    }
    // console.log(request);
  return request;
} // END FUNCTION

parseRequest(inputString);

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}
