function zero(func) { 
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(num) {
  return function(num2) {
     return num2 + num;
  };
}
function minus(num) {
  return function(num2) {
     return num2 - num;
  };
}
function times(num) {
  return function(num2) {
     return num2 * num;
  };
}
function dividedBy(num) {
  return function(num2) {
     return num2 / num;
  };
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
};