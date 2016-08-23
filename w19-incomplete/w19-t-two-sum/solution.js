//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

function twoSum(numbers, target) {
  for(var i = 0; i < numbers.length; i++) {
    for(var j = 0; j < numbers.length; j++) {
      if(i !== j && numbers[i] + numbers[j] === target) { 
        return [i,j];
      }
    }
  }
  return [];
}

module.exports = {
 twoSum: twoSum,
 attendance: "much words" 
}
