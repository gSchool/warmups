// This code currently waits 300 seconds, then calls the function fizz
// which prints "fizz". Extend this code to achieve the tasks 
// listed below.
var timesSoFar = 0;

var start = new Date().getTime();
console.log(start);

var intervalId = setInterval(printANumber, 100);

setTimeout(function(){
	console.log("FIRST!")
	clearInterval(intervalId);
}, 1500);

function printANumber(){
	var ms = new Date().getTime();
	timesSoFar += 100;
	
	if(timesSoFar % 300 === 0 && timesSoFar % 500 === 0){
		console.log('fizzbuzz');
		console.log(intervalId);
		clearInterval(intervalId);
	}
	else if(timesSoFar % 300 === 0) {
		console.log('fizz');
	}
	else if(timesSoFar % 500 === 0) {
		console.log('buzz');
	}
	else {
		console.log(timesSoFar);
	}
}