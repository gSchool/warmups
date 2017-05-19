// Frequent genome Problem
// Input: A string genome and an integer k, which is the kmer length
// Output: All most frequent k-mers in genome

function extractKmers(genome, kLength) {
  let kmers = []
  for (let i = 0; i < genome.length - kLength + 1; i++) {
    kmers.push(genome.substring(i, i + kLength))
  }
  return kmers
}

function countKmers(kmerArr) {
  kmerCounts = {}
  kmerArr.forEach((k) => kmerCounts[k] = kmerCounts[k] ? kmerCounts[k] + 1 : 1)
  return kmerCounts
}

function mostFrequentKmers(genome, kmerLength) {
  let extracted = extractKmers(genome, kmerLength)
  let counts = countKmers(extracted)
  let arrayTransform = []

  Object.keys(counts).forEach(function (key) {
    arrayTransform.push({
      kmer: key,
      count: counts[key]
    })
  })

  let sorted = arrayTransform.sort((a, b) => b.count - a.count)
  let maxCount = sorted[0].count

  return sorted
    .filter((el) => el.count >= maxCount)
    .map((el) => el.kmer)
}

module.exports = {
  mostFrequentKmers: mostFrequentKmers,
  extractKmers: extractKmers,
  countKmers: countKmers
}
