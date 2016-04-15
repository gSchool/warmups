var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {

	if(req.url === "/hello") {
		return hello(req, res);
	}
	else if(req.url === '/form'){
		return formF(req, res);
	}
	else if(req.url === '/mole'){
		return moleServer(req, res);
	}
	else if(req.url.indexOf('/mole') === 0){
		return attemptFile(req, res);
	}
	else if(req.url === '/warmup.js'){
		return attemptFile(req, res);
	}
	else {
		return fourOhFour(req, res);
	}
}

/**
  This function writes "Hello World" to the response object
  then, once every 10 milliseconds, it writes a little more
  data to the response object. After 100 times (1 second) it 
  ends the response.
*/
function hello(req, res) {
	// Always write Hello World
	res.write("Hello world!");
	var counter = 0;
	
	var intervalId = setInterval(function() {
		counter += 1;
		res.write("\n..." + counter);

		if(counter > 100) {
			res.end();
			clearInterval(intervalId);
		}

	}, 10);
}

/**
  This function serves 2 purposes. 

  1. Upon a GET request, read the file reviewForm.html and 
     send it to the browser.

  2. Upon a POST request, read the data from the post request
     and send a slightly processed response. 
*/
function formF(req, res){
	if(req.method === 'GET') {
		fs.readFile('reviewForm.html', function(err, data) {
			res.write(data);
			res.end();
		});

	}
	else if(req.method === 'POST'){
		var parsedData = '';

		req.on('data', function(chunk) {
			parsedData += chunk;
    	});

    	req.on('end', function(){
    		var pd = parsedData.split('&');
    		var ret = "First param: " + pd[0] + 
    				  "\nSecond Param: " + pd[1];
    		
    		res.write(ret);
    		res.end()
    	})
	}	
}

/**
  This function is a *VERY BASIC* file server. 

  It tries to determine if the url provided is a readable file and:
    If not we send a 404.
    If so we read the file and send its data to the browser.
*/
function attemptFile(req, res) {
	
	var urlParts = req.url.split('?');
	var processedUrl = '.' + urlParts[0];

	fs.readFile(processedUrl, function(err, data) {
		if(err) {
			return fourOhFour(req, res);
		}

		res.write(data);
		res.end();
	});
}

/**
  This function handles the route /mole and is meant only 
  to handle serve the file mole/index.html.

  Every other route under /mole is handled by attemptFile
*/
function moleServer(req, res) {
	fs.readFile('mole/index.html', function (err, data) {
		if (err) {
	       return fourOhFour(req, res);
	    }
	   	res.write(data.toString());
		res.end();
	});
}

// A simple 404 function, set the header to be a "404" status code
// meaning not found, and end the response. 
function fourOhFour(req, res) {
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("404 Not found");
	res.end();	
}

// Start the server
var server = http.createServer(handleRequest);
server.listen(8000, function() {
  console.log("Listening...")
});