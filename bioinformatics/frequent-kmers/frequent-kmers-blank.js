// Frequent genome Problem
// Input: A string genome and an integer k, which is the kmer length
// Output: All most frequent k-mers in genome

// Return an array with all kmers of length kLength in the the string genome
function extractKmers(genome, kLength) {
  // Implementation
}

// Given an array of kmers, create an object that has key value pairs
// of the kmers and their occurrence counts in the array
function countKmers(kmerArr) {
  // Implementation
}

// Given a genome and kmerLength, find the most frequently  occurring kmers
// in that genome. There may be ties. Place the list of the kmers in an array
// Order does not matter.
function mostFrequentKmers(genome, kmerLength) {
  // Implementation
}

module.exports = {
  mostFrequentKmers: mostFrequentKmers,
  extractKmers: extractKmers,
  countKmers: countKmers
}
