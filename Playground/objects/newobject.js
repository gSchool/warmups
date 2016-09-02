//Create an object using the new keyword

//this becomes the constructor when you use the new keyword to create it
function Person(name){
  this.name = name;
  this.reverse = function(){
    return this.name.split('').reverse().join('');
  }
}

// Call the Person function as a constructor
// a new object is created,linked to Person,bound as the this keyword in the Person function call, and 'this' is implicitely returned.
var person1 = new Person('person1');
var person2 = new Person('person2');

console.log(person1); //what will this log?
console.log(person2); //what will this log?
console.log(person2.name);

person2.name = "person2 changed";
person2.reverse = function(){
  return "no reverse for person2";
}

console.log(person2.name); //what will this log?
console.log(person2.reverse()); //what will this log?
console.log(person1.reverse()); //what will this log?
