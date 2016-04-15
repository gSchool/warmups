First, write a function charCounts that when given a string, produces a map of character counts. Usage would look like:

```
> console.log(charCounts("This is a string!!!"))
{ T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }

> console.log(charCounts("!Data!Is~The*Coolest"))
{ '!': 2,
  D: 1,
  a: 2,
  t: 2,
  I: 1,
  s: 2,
  '~': 1,
  T: 1,
  h: 1,
  e: 2,
  '*': 1,
  C: 1,
  o: 2,
  l: 1 }
```
Then, use this function to write another function which, given a string, determines if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.