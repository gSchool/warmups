//Let's look at what happens when we use Object.create

var Person = {
  name:"Teddi",
  reverse: function(){
    console.log(this.name.split('').reverse().join(''));
  }
}

console.log("Person:", Person);

//a new object gets created and it gets linked to the Person Object
var personA = Object.create(Person);
console.log("before adding a property, personA looks like:",personA);
console.log("before adding a property, personA.name is:",personA.name);
console.log("does personA object contain the name key/value pair after it has been accessed from the prototype chain?",personA);
personA.name = "Sherée";
console.log("after adding a property, personA looks like:",personA);
console.log("after adding a property, personA.name is:",personA.name);
console.log("after adding a property to personA, Person looks like:",Person);

//what happens if we shadow the reverse method?
personA.reverse = function(){
  console.log("no reverse here on personA");
}

//will personA.reverse refer to Person's reverse or the new one?
personA.reverse();

//is Person's reverse method updated after reverse was added to personA on line 20?
Person.reverse();
