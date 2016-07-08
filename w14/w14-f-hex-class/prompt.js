// Create a class Hex which takes a number as an argument.

// Adding a hex object to a number generates a number 
// (by using valueOf), but calling toString or toJSON 
// will show its hexidecimal value starting with "0x".

// Example:

// var FF = new Hex(255);
// FF.toString() == "0xFF";
// FF.valueOf() + 1 == 256;
// Also create two methods, plus and minus which will add or 
// subtract a number or Hex object and return a new Hex object.

// var a = new Hex(10);
// var b = new Hex(5);
// a.plus(b).toJSON() == "0xF";
// Also, create a parse class method that can parse Hexidecimal 
// numbers and convert them to standard decimal numbers:

// Hex.parse("0xFF") == 255;
// Hex.parse("FF") == 255;
// Note: If you define both valueOf and toString, "Hex value:" + 
// new Hex(255) may not behave as expected!

function Hex(value){
  
  this.valueOf = function(){
    return value;
  };
  
  this.toString = function(){
    return "0x" + value.toString(16).toUpperCase();
  };
  
  this.toJSON = function(){
    return "0x" + value.toString(16).toUpperCase();
  };
  
  this.plus = function(add){
    return new Hex(this + add);
  };
  
  this.minus = function(sub){
    return new Hex(this - sub);
  }
  
}

Hex.parse = function(string){ 
  return parseInt(string.match(/[a-f]/gi).join(''), 16);
}


module.exports = {
 Hex,
 attendance: "much words" 
}