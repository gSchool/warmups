var defaultDoc = {
  text: "default",
  print: function(){
    console.log(this.text);
  }
}
defaultDoc.print();

var shiaDoc = {
  text: "Do it!"
};

var yodaDoc = {
  text: "There is no try."
};

// What if I want to borrow the print function that is in defaultDoc?
// Call, Apply and Bind enable you to invoke a function (or store the result of that function) and set the context of the keyword this.

// Let's explore how to use them.
// Use apply, bind, and call to print the same thing to the console.
// For example, make all three say - "Do it!"
defaultDoc.print.call(shiaDoc);
defaultDoc.print.apply(shiaDoc);

//notice that bind needs to be invoked after it is called.
defaultDoc.print.bind(shiaDoc)();


//They all look about the same don't they? So what is the difference? Let's look at a more involved example where our function takes arguments (see binding_with_args.js).
