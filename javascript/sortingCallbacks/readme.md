# Sorting Callbacks

Present your students with sortingCallbacks.js and ask them to fill in the empty functions. Each function is used as a comparison function for `Aray.prototype.sort` near the bottom. Have your students test their code by uncommenting each `objects.sort` call and examining the results. 

When they're done, present the solution. The solutions provided are fairly explicit and not compact. The numeric sorting should be pretty consistent, but there are many ways to do the letter sorting. Here are some alternatives that students might also benefit from seeing:

```
function sortByLetter(first, second) {
    return first.letter.localeCompare(second.letter);
}

function sortByLetter(first, second) {
    var a = first.letter.toLowerCase();
    var b = second.letter.toLowerCase();
    if (a < b) {
            return -1;
        }
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
}
​
function sortByLetterCapsFirst(first, second) {
    return first.letter.charCodeAt(0) - second.letter.charCodeAt(0);
}

function sortByLetterCapsFirst(first, second) {
    var a = first.letter;
    var b = second.letter;
    if (a < b) {
            return -1;
        }
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
}
```