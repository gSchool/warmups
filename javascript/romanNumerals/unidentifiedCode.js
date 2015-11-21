// What does this code do?
console.log(decodeString('abcdefg'));
console.log(decodeString('iv'));
console.log(decodeString('LiC'));

function decodeString(input) {

	var returnValue = 0;
	input = input.toLowerCase();
	
	for(var i = 0; i < input.length; i++) {
		var v1 = decodeChar(input[i]);
		var v2 = decodeChar(input[i+1]);

		if(v1 < v2) {
			returnValue -= v1;
		}
		else {
			returnValue += v1;
		}
	}
	
	return returnValue;

};

function decodeChar(c) {

	if(c === 'i') {
		return 1;
	}

	if(c === 'v') {
		return 5;
	}

	if(c === 'x') {
		return 10;
	}

	if(c === 'l') {
		return 50;
	}

	if(c === 'c') {
		return 100;
	}
};