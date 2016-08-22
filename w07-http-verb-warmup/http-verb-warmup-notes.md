PART ONE
- get: warmup using GET method HTTP -- check postman (gen code -- orange top right)


    function parseRequest(requestString) {
      var request = {};
      var requestLines = request.split('\n')
      var firstLine = requestLines[0].split(" ");
    ​
      request.type = firstLine[0];
      request.path = firstLine[1];
      request.protocol = firstLine[2];
      //et cetera
    }

PART TWO
**MODIFY FIRST WARMUP TO HANDLE POST GET AND POST**

- post: check if post -- if is -- check body (after 1st blank line)
   parse key value pares in an object called body, return that object

PART THREE
-- query string 
pull out query string and add it to the response body object
  
    var request = {
      verb : "POST",
      path : "/about?id=4&read=false",
      protocol : "HTTP/1.1",
      body : {
        name : "john"
      },
      query : {
        id: 4,
        read: false
      },
      headers: {
       Host: api.foobaricus.com
      }
    }
