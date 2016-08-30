# Array Filter

Write a function named `filter` that takes two arguments.
   `arr` (array)
   `predicate` (function)

Iterate over the elements of `arr` and return a _new_ array of all elements the `predicate` function returns truthy for. The `predicate` function is invoked with one argument.

  `element` (anything)

For example:

```
var users = [
  { name: 'Katie', points: 240 },
  { name: 'Ralph', points: 130 }
];

var winners = filter(users, function(element) {
  return element.points >= 200;
});

console.log(winners); // [{ name: 'Katie', points: 240 }]
```
