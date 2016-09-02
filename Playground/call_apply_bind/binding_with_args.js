var defaultDocArg = {
  text: "default text",
  print: function(language,mood){
  console.log(`${this.text} in language: ${language} with mood-level: ${mood}`);
  }
}
defaultDocArg.print('DT', 'indifferent');

var yodaDocArg = {
  text: "There is no try."
};


var emptyDocArg = {

};

//notice that call takes each argument in a comma delimited list
defaultDocArg.print.call(yodaDocArg,'English', 'happy');

//what if myobj doesn't have the property in question?
defaultDocArg.print.call(emptyDocArg,'empty', 'sad');

//notice that apply takes the additional arguments beyond 'this' in the form of an array
defaultDocArg.print.apply(yodaDocArg,['English', 'happy']);

//Bind is similarly assigning context to 'this', but you have options for when you pass the arguments.
// Use bind to create a new function with 'this' being set to the value you pass to bind. Remember you will need to invoke the function after it has been created.
defaultDocArg.print.bind(yodaDocArg)('English','8 of 10');
defaultDocArg.print.bind(yodaDocArg, 'English')('tentative');
defaultDocArg.print.bind(yodaDocArg)('English','ecstatic');
