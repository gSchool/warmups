
***

# What's special about 196?

Watch [this video(https://www.youtube.com/watch?v=bN8PE3eljdA) to find out.

Write a function that determines if any two digit number is a Lychrel Number.

* Swap the position of each number (so 41 would become 14)
* Add it to the original number (41 + 14)
* Check if it's a palindrome (in this case 55 is one, so we'd stop)
* If not, repeat steps 1 - 3 until it is.

Bonus: Write this in Ruby AND JavaScript

***

Given a string, determine if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.

***


You are given an array of grades.  You need to process this array, and return an array that describes whether each grade
was higher, lower or even to the previous grade.

So given the following array:

```javascript
[6,3,5,4,3,4,4,5]
```

Your code would produce:

```javascript
["down","up","down","down","up","even","up"]
```

When given an empty array, it returns an empty array.

NOTE: your array tracks the differences between grades, so it will be one item _shorter_ than the given array.

***

Given two arrays of Numbers, return an array containing elements common to both arrays, for example:

```
  var test1 = [1,2,3,4,5];
  var test2 = [3,4,7,8,9];

  console.log(intersection(test1, test2)); // [3,4]

  var test3 = [];
  console.log(intersection(test1, test3)); // []
  console.log(intersection(test2, test3)); // []
```

***

Implement each of these functions.

```
var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

removeBadPeople(people);
// => [{name:'A', age: 20}, {name:'B', age: 30}];

sumAgesValid(people);
// => 50

sumAgesAll(people);
// => 60
```

***

Suppose you are given an array of integers. Find the largest product of any pair of integers in the array. Some examples:

  console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
  console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200

***

Write a function that will capitalize not only the first word of the fish in the array, but the second as well.

var fish = [ "rainbow trout", "smallmouth bass", "white bass", "channel catfish" ]

capitalizeFish(fish)
//-> ["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]

***

Write a function that takes an array and returns an object where each key is an item from the array and the corresponding value is how many times that item was in the array.

Example:

var list = ['a', 'b', 'c', 'a', 'b'];

sumInstances(list);
// => { a: 2, b: 2, c: 1 }

***

Write a function that takes nested arrays and turns it into nested objects. If you solve it one way, then solve it another.

```
var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

bookData(books)
//-> {
  "1934356360": {
    "title": "Learn to Program",
    "author": "Chris Pine",
    "isbn10": 1934356360
  },
  "1593275846": {
    "title": "Eloquent Javascript",
    "author": "Marijn Haverbeke",
    "isbn10": 1593275846
  }
}
```

***

Use the forEach method to implement a function that returns the average number within an array.

Example:

```
getAverage([1,2,3]);
// => 2
```

***

Write a function that takes an acronym as an argument and returns a sentence that it could represent.

Example:
```
backronym('ABCD');
// => April Building Caller District
```

***

Write a function called toDecimal which takes a binary number and converts it to decimal. Here are some examples:
```
  toDecimal(0); // 0
  toDecimal(1); // 1
  toDecimal(11); // 3
  toDecimal(1000); // 8
  toDecimal(1100); // 12
```

***

Write a function charCounts that when given a string, produces a map of character counts. Usage would look like:

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

***

Define a JavaScript function add that can be used like so:

```
add(1)(1);   // returns 2
add(20)(20); // returns 40
```

***

Implement a function that takes two arguments. The first argument is an array of numbers. The second argument is a number two compare with each item in the array. Your function should return an array of numbers that are greater than the second argument.

Example:

```
findGreater([1,2,3,4,5,6,7,8], 5);
// => [6,7,8]
```

***

Implement a function which determines whether or not something is in an array. The function should be defined with two parameters, one of which is an array, the other which is either a string or integer. ie: Arguments [1,2,3], and 3, would return true. Arguments [1,2,3], 4, would return false.

Implement a function which determines if an element appears more than once in an array.

***

Define a function called indexOf that takes in two arguments: an array, and an item that might be in the array. Your function should return the index of the item if it is found within the array; otherwise, it should return -1.

Example:

```
indexOf(['a', 'b', 'c'], 'a');
// => 0

indexOf(['a', 'b', 'c'], 'd');
// => -1
```

***

Write a function named isPalindrome that takes a string and determines if it is a palindrome.

***

Write a function that takes in 1 input: a letter from the english alphabet.

The function should return a boolean that expresses wether or not the letter is a vowel.

The function should contain NO if statements.

***

You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one?

***

Write a function that returns the longest string in the array and it's length as an object.

```
arr = ["truck", "sidewalk", "book"]

longString(arr)
//-> longString = { sidewalk: 8 }
```

***

Write a for loop AND a while that returns the following outputs:

1(odd)
2(even)
3(odd)
4(even)
5(odd)
6(even)
7(odd)
8(even)
9(odd)
10(even)
Conference 1:
Team 1
Team 2
Team 3
Team 4
Conference 2:
Team 1
Team 2
Team 3
Team 4
Conference 3:
Team 1
Team 2
Team 3
Team 4
Conference 4:
Team 1
Team 2
Team 3
Team 4
11 times 1 equals 11
11 times 2 equals 22
11 times 3 equals 33
11 times 4 equals 44
11 times 5 equals 55

***

Given an array of integers, find the maximum value in the array.

***

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

***

Write a function that takes two arrays and returns a new array with all items in alphabetical order.

```
var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

alphanimal(array1, array2);
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]
```

***

Write a function that uses one or more loops and takes two arrays and returns an object that has the items in the first array as properties and the items in the second array as values.

```
var array1 = [ "cat", "dog", "fish" ],
    array2 = [ "lion", "pointer", "trout" ]

animalMatch(array1, array2);
//-> animals = {
  cat: "lion",
  dog: "pointer",
  fish: "trout"
}
```

***

Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

Example 1:

var exampleArray =

                  [[1, 0, 0, 0],

                  [0, 1, 0, 0],

                  [0, 0, 1, 0],

                  [0, 0, 0, 1]]

diagonalSum(exampleArray) // => 4
Example 2:

var exampleArray =

                 [[1, 0, 0, 0, 0],

                  [0, 1, 0, 0, 0],

                  [0, 0, 1, 0, 0],

                  [0, 0, 0, 1, 0],

                  [0, 0, 0, 0, 1]]

diagonalSum(exampleArray) // => 5

***

Write a multiply function that multiplies two integers without using *.

***

```
If you list all the natural numbers below 10 that are multiples of 3 or 5,
you get 3, 5, 6 and 9. The sum of these multiples is 23.
```

Find the sum of all the multiples of 3 or 5 below 1000.

***

With an array [1,2,3,4,5]. Write a while loop that adds 2 to odd numbers and squares even numbers.
returns:

    3
    4
    5
    16
    7

***

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

***

Find the only element in an array that only occurs once. For example in [1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time.

***

Create a super 8 camera that shoots 18 frames a second. You'll need to load a 50 foot cartridge with 3,600 frames to film anything. Keep track of the frames you've shot, and when you need a new cartridge.

***

Create an electric car that can go 100 miles per charge.

You'll need to charge the car to go anywhere.

When you drive the miles you have left should go down.

When your miles left are gone you'll need to charge the car again.

***

Create a cup that is an object.
It starts out empty.
When you pour coffee into it, the cup becomes full
When you drink the coffee the cup becomes empty
What other properties can the cup have? Add some.
How can those properties be changed? Try it out.

***

Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. The function should return true if the string is a valid parentheses expression. For example:

parensChecker("()(((())))")
//=> true

parensChecker("())))(")
//=> false

parensChecker(")(")
//=> false

***

Write a function which prints the "path" to the string in a given JSON object.

For example, if looking for "full-stack" in the following JSON, our function should return caki -> cyd -> qembsejm -> 1

```
{"dlpgcack": false, "indwqahe": null, "caki": {"vvczskh": null, "tczqyzn":
false, "qymizftua": "jfx", "cyd": {"qembsejm": [null, "full-stack", null],
"qtcgujuki": 79, "ptlwe": "lrvogzcpw", "jivdwnqi": null, "nzjlfax": "xaiuf",
"cqajfbn": true}, "kbttv": "dapsvkdnxm", "gcfv": 43.25503357696589}, "cfqnknrm":
null, "dtqx": "psuyc", "zkhreog": [null, {"txrhgu": false, "qkhe": false,
"oqlzgmtmx": "xndcy", "khuwjmktox": 48, "yoe": true, "xode": "hzxfgvw",
"cgsciipn": 20.075297532268902}, "hducqtvon", false, [null, 76.8463226047357,
"qctvnvo", null], [null, {"nlp": false, "xebvtnvwbb": null, "uhfikxc": null,
"eekejwjbe": false, "jmrkaqky": null, "oeyystp": false}, [null, 10, "nyzfhaps",
71, null], 40, null, 13.737832677566875], [true, 80, 20, {"weynlgnfro":
40.25989193717965, "ggsirrt": 17, "ztvbcpsba": 12, "mljfh": false, "lihndukg":
"bzebyljg", "pllpche": null}, null, [true, false, 52.532666161803895, "mkmqrhg",
 "kgdqstfn", null, "szse"], null, {"qkhfufrgac": "vpmiicarn", "hguztz":
 "ocbmzpzon", "wprnlua": null}], {"drnj": [null, false], "jkjzvjuiw": false,
 "oupsmgjd": false, "kcwjy": null}]}
```

***

Given two strings, write a function that decides if one is a permutation of the other.

The function should return a boolean.

***

Query strings are often used to pass data from one "page" to another, through the URL. The query string is a list of key-value pairs at the end of a URL. The query string always starts with a ?, and the key-value pairs are separated by &'s. Take a look at the following examples:

http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA

http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week

Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:

```
parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")

//=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

//=> {q: "dogs", sort: "top", t: "week"}
```

***

Write a function named removeDupes which takes a string and removes all duplicate characters in the String. Here are some examples:
```  
  removeDupes('AABB'); // 'AB'
  removeDupes('AaAaBbBb'); // 'AaBb'
  removeDupes('cAtCaT'); // 'cAtCaT'
```

Write a function named insensitiveRemoveDupes which takes a string and removes all duplicate characters regardless of capitalization. Here are some examples:

```
  removeDupes('AABB'); // 'AB'
  removeDupes('AaAaBbBb'); // 'AB'
  removeDupes('cAtCaT'); // 'cAt'
```

***

How many ways can you reverse a string? Come up with at least 3 techniques.

***

Write a function named reverse that takes a string argument and returns the string reversed. The string provided as the argument should not be modified.

Write a function named reverse that takes a string argument and returns the string reversed, but this time the string argument should be modified.

***

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

***

Consider an array of sheep where some sheep may be missing from their place. Write a function that counts the number of sheep present in the array (true means present).

For example,

```
var sheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

countSheep(sheep);
// => 17
```
The countSheep function, if defined properly, should return 17 in this case.

***

A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

***

* Write a function named subtractString that takes a string of arithmetic involving addition and returns the proper value. For example subtractString("10-20-30"); would return -40 (as a Number).

* Write a function named divideString that takes a string of arithmetic involving addition and returns the proper value. For example divideString("10/20"); would return 0.5 (as a Number). What is the edge case in division? Do not worry about covering it but please explain what it is.

* Write a function named addString that takes a string of arithmetic involving addition and returns the proper value. For example addString("10+20+30"); would return 60 (as a Number).

* Write a function named multiplyString that takes a string of arithmetic involving addition and returns the proper value. For example multiplyString("10*20*30"); would return 6000 (as a Number).

***

Write a function that reverses a string.

reverser('code')
//=> 'edoc'

***

Write a function called strip which removes all leading and trailing whitespace from a string, but preserves whitespace not found at the beginning or end of the string.

***

given an array of test scores [ 68, 74, 99, 45, 83, 95 ] and the scale: F is less than 60, D is 60 to 69, C is 70 to 79, B is 80 to 89, A is 90 to 100.

Write a function that returns an array:

```
convertToGrade(arr); // => [ D, C, A, F, B, A ]
```

***

Write a function translate that will return a version of the string that has been translated into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example:

translate("this is fun")
//=> "tothohisos isos fofunon"

***

Write a function that pulls the vowels out of a string and tells you the number of vowels. The function should return an array with the vowels used and the number of vowels as the last item in the array as “n vowels". If a vowel is used more than once in the array it will NOT appear in the array more than once.

```
var string = “I don’t know if this sentence has vowels in it.”

findVowels(string)
 //-> [ “i”, “o”, “e”, “a”, "4 vowels" ]
```

***

Implement a function which takes two parameters, both of which are arrays, and zips them together. ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].
