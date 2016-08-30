Write a function named rotateEvenIndices that take a String argument, here are sample tests to illustrate the behavior:

```
var string = 'foobar';
var rotatedOnce = rotateEvenIndices(string);
console.log(rotatedOnce);

var rotatedTwice = rotateEvenIndices(rotatedOnce);
console.log(rotatedTwice);

var backToOriginal = rotateEvenIndices(rotatedTwice);
console.log(string === backToOriginal); // true
```
