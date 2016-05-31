function findSimilar(arr1,arr2) {
  // Your solution here
  var hash = {};
  var similarities = [];
  arr1.forEach(function(el) {
    if(typeof el === 'object' && !Array.isArray(el)) {
      var key = JSON.stringify(el);
      if(!hash[key]) {
        hash[key] = 1;
      }
    } else {
      if(!hash[el]) {
        hash[el] = 1;
      }
    }
  });

  arr2.forEach(function(el) {
    if(typeof el === 'object' && !Array.isArray(el)) {
      var key = JSON.stringify(el);
      if(hash[key]) {
        similarities.push(el);
        delete hash[key];
      }
    } else {
      if(hash[el]) {
        similarities.push(el);
        delete hash[el];
      }
    }
  });

  return similarities;

}

module.exports = {
  findSimilar: findSimilar,
};