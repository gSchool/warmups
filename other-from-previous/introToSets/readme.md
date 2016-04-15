# Playing With Sets

As you know by now databases utilize a lot of Set Theory. Lets practice using Sets using a Node library!

Sets are data structures with two important properties. 

1. Sets are not ordered. 
2. Sets can only contain 1 copy of any piece of data. 

Sets also have a rich history in mathematics, and powerful operations that make them very useful. Web developers everywhere are excited about the addition of Sets as a built in data-structure to JavaScript in ES2015, and Node has already built in support for them, HOORAY!

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## What To Do

To appreciate the value of Sets, lets answer some questions using them. See prompt.js for the specifics of this warmup. In order to access Sets, we have to run Node with a flag that says "we want to use ES2015 features", this is how:

`node --es-staging prompt.js`

Also, do not remove the `'use strict';` from the top of `prompt.js`. 

### Tips:

explore the 'spread operator' [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). Sets are iterable, so you can turn one into an array using code like:

```
var mySet = new Set([1,2,3,4,4]);
var uniqueAsArray = [...mySet] // [1,2,3,4]
``` 

Feel free to Google!