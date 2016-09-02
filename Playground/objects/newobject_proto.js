//Create an object using the new keyword
//Put the function on the prototype instead of on the created object

//this becomes the constructor when you use the new keyword to create it
function Person(name){
  this.name = name;
}

//instead of putting the method in the constructor, we have put it on the prototype
Person.prototype.reverse = function(){
  return this.name.split('').reverse().join('');
}

var person1 = new Person('person1');
var person2 = new Person('person2');

console.log(person1); //what will this log?
console.log(person2); //what will this log?
console.log(person2.name);

person2.name = "person2 changed";
person2.reverse = function(){
  return this.name;
}
console.log(person2.reverse());
console.log(Person.prototype);
