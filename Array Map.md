# Array Map

Write a function named `map` that takes two arguments.
   `arr` (array)
   `callback` (function)

Return a _new_ array where each element of `arr` is transformed by the `callback` function and the result is pushed into the new array.

For example:

```
var rounded = map([0.01, 2, 9.89, Math.PI], function(num) {
  return Math.round(num);
});

console.log(rounded); // [0, 2, 10, 3]
```
