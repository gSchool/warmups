You are given an array with integers between 1 and 100,000, but one integer is missing. Write a function that determines the missing value.

Here is a helper function, written in javascript, to generate an array with one integer removed from it:

```
function arrayBuilder(length) {
  length = length || 100000;
  var removedNumber = Math.floor(Math.random() * length);
  var array = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
  array.splice(removedNumber, 1);
  return array;
}
```