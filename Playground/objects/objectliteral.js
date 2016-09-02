//Create an object literal that contains 2 properties. One will be your name and the other will be a function that reverses your name and returns the value.

var Person = {
  name:"Teddi",
  reverse: function(){
    return this.name.split('').reverse().join('');
  }
}

console.log(Person); //what will this log?
console.log(Person.name); //what will this log?
console.log(Person.reverse()); //what will this log?

//////////////////////////////////
