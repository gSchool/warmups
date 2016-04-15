var array1 = [ "cat", "dog", "fish", "Zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

console.log(alphanimal(array1, array2));

function alphanimal(a1, a2) {
	var flatAr = [];
	var sortedAr = [];
	
	// Flatten the array into a single array
	for(index in a2) {
		flatAr.push(a2[index]);
	}
	for(index in a1) {
		flatAr.push(a1[index]);
	}

	// Once flattened, I'll perform "selection sort" which is not super
	// fast, but it's easy to understand.
	while(sortedAr.length < (a1.length + a2.length)) {
		var best = _pluckHighest(flatAr)
		sortedAr.push(best);
	}

	return sortedAr;
	
	
}

function _pluckHighest(arr) {
		var best = arr[0];
		var bestIndex = 0;
		
		for(index in arr) {
			
			if(arr[index] < best) {
				best = arr[index];
				bestIndex = index;
			}
		}

		return arr.splice(bestIndex, 1)[0];
	}
