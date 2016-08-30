# Array Every

Write a function named `every` that takes two arguments.
   `arr` (array)
   `predicate` (function)

Return `true` if the `predicate` function returns *truthy* for all elements of `arr`, otherwise return `false`. The `predicate` function is invoked with one argument.

  `element` (anything)

For example:

```
var result = every([1, 2, 3], function(element) {
  return element % 2 === 0;
});


console.log(result); // false

result = every([2, 4, 6], function(element) {
  return element % 2 === 0;
});

console.log(result); // true
```
