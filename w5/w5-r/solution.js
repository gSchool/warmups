function mostLikely(prob1,prob2){
  // your code
  prob1 = prob1.split(':');
  prob2 = prob2.split(':');
  return prob1[0]/prob1[1] > prob2[0]/prob2[1];
}

module.exports = {
  mostLikely: mostLikely
};