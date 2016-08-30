/* 
  This simple testing is part of linting, and part of language design. 
  When you run a JS file, you are notified if you have mis-matching
  parenthesis.

  A common way of solving this problem is to use a data structure called
  a stack. A stack is a "first in last out" container, this is the opposite
  of a queue. Imagine a stack of plates - only the very top plate is
  accessable at any given time, even though we can SEE all the plates.
*/


function parensChecker(input){
	// Opening and closing parens have different behavior
	var types = {
		'(': 'opener',
		'{': 'opener',
		'[': 'opener',
		')': 'closer',
		'}': 'closer',
		']': 'closer'
	};

	// When we encounter an opening brace we have to push it's
	// matching brace to the stack
	var matchingBrace = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	// We're using a list but only modify it with push and pop
	// which makes it a stack
	var stack = [];	

	for(var i = 0; i < input.length; i++) {
		var currentBrace = input[i];
		
		// You're always allowed to add an opener, so just push
		// the matching closing brace
		if(types[currentBrace] === 'opener') {
			stack.push(matchingBrace[currentBrace]);
		}
		// If we're closing, then the top of our stack must
		// match the current brace, or we have a mis-match
		else if(types[currentBrace] === 'closer') {
			var stackTop = stack[stack.length - 1];
			
			// Any mismatch makes the whole string invalid
			// so quit early.
			if(stackTop !== currentBrace) {
				return false;
			}

			// If we're valid so far, remove this closing brace
			// from the stack.
			stack.pop();
		}
		// If a non brace character is found, return false
		else {
			return false;
		}
	}

	// Lets say all the closing braces matched some opening brace
	// but our stack still has some braces. This means we had input
	// with more openers than closers, such as "(()". 
	if(stack.length !== 0) {
		return false;
	}

	// If we didn't fail, then we must have succeeded.
	return true;
};

function test(parensCheckFunction) {
	var testCases = {
		'((': false,
		"()(((())))": true,
		"())))(": false,
		")(": false,
		"([{}])": true,
		"([([[{(){}[()]}]])])": true,
		"}{": false,
		"[][][]{}(){[]}({})": true,
		"[]{}()fail": false,
	};
	var allTestsPass = true;
	for(parenString in testCases) {
		var expected = testCases[parenString];
		var actual = parensChecker(parenString);

		if(expected !== actual) {
			console.log("Failure for " + parenString);
			console.log("  expected: " + expected);
			console.log("  actual:   " + actual);
			allTestsPass = false;
		}
	}

	if(allTestsPass) {
		console.log("all tests pass");
	}
};

test(parensChecker);