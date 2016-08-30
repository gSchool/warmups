# Array Reduce

Write a function named `reduce` that takes three arguments.
   `arr` (array)
   `callback` (function)
   `accum` (initial accumulation value)

Reduce `arr` to a single value by invoking the `callback` function with the `accum` value and each element in `arr`. The return value of each invocation of the `callback` will become the new `accum` value. The `callback` function is invoked with two arguments.

  `accum` (anything)
  `element` (anything)

For example:

```
var result = reduce([1, 2, 3], function(accum, element) {
  return accum + element;
}, 0);

console.log(result); // 6
```
