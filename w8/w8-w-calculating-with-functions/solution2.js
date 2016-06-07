/*
This time we want to write calculations using 
functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following 
mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, 
the most inner function represents the right operand
*/

function zero() {
  var value = 0;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function one() {
  var value = 1;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function two() {
  var value = 2;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function three() {
  var value = 3;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function four() {
  var value = 4
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function five() {
  var value = 5
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function six() {
  var value = 6;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function seven() {
  var value = 7;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}

function eight() {
  var value = 8;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}
function nine() {
  var value = 9;
  if (arguments.length === 1) {
    return eval(value + arguments[0])
  } else {
    return value
  }
}

function plus() {
  return "+" + arguments[0]
}
function minus() {
  return "-" + arguments[0]
}
function times() {
  return "*" + arguments[0];
}
function dividedBy() {
  return "/" + arguments[0]
}


module.exports = {
  zero: zero,
  one: one,
  two: two,
  three: three,
  four: four,
  five: five,
  six: six,
  seven: seven,
  eight: eight,
  nine: nine,
  plus: plus,
  minus: minus,
  times: times,
  dividedBy: dividedBy
}