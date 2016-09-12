# Practice Some New ES6 Syntax


## How to Get Started
- These directions assume you are comfortable using Node Package Manager (npm), GitHub, and Terminal
- Clone this repository from Github
- Open Terminal and navigate to the warmups/es6_warmup directory
- Make sure you have jasmine installed: `jasmine -v`
- If it isn't installed (you didn't get the version number in the last command), install it: `npm install -g jasmine`
- From the es6_warmup directory type `jasmine` to run the tests
- Open convert_to_ES6.js and follow the directions at the top of the file

- **Note**: Jasmine is used to run the tests. The first 6 tests should pass, the ES6 versions are the ones you should make pass You should see output similar to the following (you will see more failure details than this, I have truncated the output here) :

```
Started
......FFFFFF

Failures:
1) Es6 Version: it should swap the values for the given indices
  Message:
    Expected [ 1, 2, 3 ] to equal [ 2, 1, 3 ].
  Stack:
    Error: Expected [ 1, 2, 3 ] to equal [ 2, 1, 3 ].
        at Object.swapEs6Spec (/es6_warmup/spec/convert_to_Es6_spec.js:41:17)


12 specs, 6 failures
Finished in 0.016 seconds

```
