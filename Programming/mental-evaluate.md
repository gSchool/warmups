Mentally evaluate each of the following code examples, do not use an interpreter:

```javascript
function theBest() {
  function theWorst () {
    count -= 4;
  }

  var count = 10;

  function reallyTheBest () {
    count += 25;
  }

  reallyTheBest();
  reallyTheBest();
  reallyTheBest();
  theWorst();
  theWorst();
  reallyTheBest();

  return count;
}

console.log(theBest());
```

```javascript
function addN(n) {
  return function(x) {
    return n + x;
  }
};

var addSix = addN(6);
var addTwo = addN(2);

console.log(addSix(10));
console.log(addSix(100));
console.log(addSix(100) + addTwo(10));
```

What is wrong in the following code example:

```javascript
function shouldHire(candidate) {
  bestCandidate = candidate.qualified == 'yes' ? true : false;

  return bestCandidate ? 'Found em!' : 'Continue searching!';
}
```

What happens when the following code is entered into a node console or other JS interpreter?

```javascript
function greatCodeIsGreat(conditionsForGreatness {
  return 'All Code is Great Code... just kidding!';
}
```
