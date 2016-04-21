var prompt = require('prompt');

var randomNumber = Math.floor((Math.random() * 100) + 1);
var counter = 0;	

prompt.message = "Pick a number between 1 and 100";

function numberGame(){
prompt.get(['guess'], function (err, result) {

	if (result.guess == randomNumber){
		console.log("Congratulations! You guess correctly!");
		console.log("Your number:" +result.guess);
		console.log("Computer's Number"+ randomNumber);
	}
	else if (result.guess < randomNumber) {
		console.log("You guessed too low! Try again!");
		counter ++;
		numberGame();
	}	
	else if (result.guess > randomNumber) {
		console.log("You guessed too high! Try again!");
		counter ++;
		numberGame();
	}

	if(counter > 3){
		console.log("Too many failed attempts! The number was "+ randomNumber + ". Your computer will now self destruct.");
	}



});
}

numberGame();
