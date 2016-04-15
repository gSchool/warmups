// Your goal is to create a command line game, where users
// guess a randomly generated number between 1-100 until 
// they have guessed correctly. 

// You'll need to npm install prompt
var prompt = require('prompt');

// example of using prompt
prompt.get(['guess'], function (err, result) {
	console.log(result);
	console.log(result.guess);
});

var globalGuess = undefined;
var randomNumber = 3; // fix this to be random

// Create a game, where users can guess until they guess correctly.