// Frequent genome Problem
// Input: A string genome and an integer k, which is the kmer length
// Output: All most frequent k-mers in genome

let expect = require('chai').expect
let fk = require('./frequent-kmers')

describe('util tests', function () {
  it('should pass this canary test', function () {
    expect(true).to.eql(true)
  })
})

describe('frequent kmers module', function () {
  it('has a function called mostFrequentKmers', function () {
    expect(fk.mostFrequentKmers).to.be.a('function')
  })

  it('has a function called extractKmers', function () {
    expect(fk.extractKmers).to.be.a('function')
  })

  it('has a function called countKmers', function () {
    expect(fk.countKmers).to.be.a('function')
  })
})

describe('kmer extraction with extractKmers', function () {
  let genome = 'GTCATTG'
  let kmerLength = 3
  let result = null

  beforeEach(function () {
    result = fk.extractKmers(genome, kmerLength)
  })

  it(`Gets 5 kmers of length ${kmerLength} from ${genome}`, function () {
    expect(result.length).to.eql(5)
  })

  it(`Gets the kmers from ${genome} in appropriate order`, function () {
    expect(result[0]).to.eql('GTC')
    expect(result[1]).to.eql('TCA')
    expect(result[2]).to.eql('CAT')
    expect(result[3]).to.eql('ATT')
    expect(result[4]).to.eql('TTG')
  })
})

describe('kmer counting with countKmers', function () {
  let genome = 'ATATA'
  let kmerLength = 3
  let result = null

  beforeEach(function () {
    kmers = fk.extractKmers(genome, kmerLength)
    result = fk.countKmers(kmers)
  })

  it(`finds only the correct kmers in ${genome}`, function () {
    expect(result).to.have.all.keys(['ATA', 'TAT'])
  })

  it(`finds proper counts in ${genome}`, function () {
    expect(result['ATA']).to.eql(2)
    expect(result['TAT']).to.eql(1)
  })
})

describe('most frequent kmers', function () {
  /* TEST DATASET 1:
   * Input:
   * TGGTAGCGACGTTGGTCCCGCCGCTTGAGAATCTGGATGAACATAAGCTCCCACTTGGCTTATT CAGAGAACTGGTCAACACTTGTCTCTCCCAGCCAGGTCTGACCACCGGGCAACTTTTAGAGCAC TATCGTGGTACAAATAATGCTGCCAC
   * kmerLength: 3
   * Output correct most frequennt kmer:  TGG
   * This dataset just checks if you’re counting the first kmer in Text (TGG in this example). If you do not count the first kmer (TGG), you will get the following “most frequent” kmers in addition to TGG ACT CAC CCA CTT GGT
   */

  it('passes test 1', function () {
    let genome = 'TGGTAGCGACGTTGGTCCCGCCGCTTGAGAATCTGGATGAACATAAGCTCCCACTTGGCTTATTCAGAGAACTGGTCAACACTTGTCTCTCCCAGCCAGGTCTGACCACCGGGCAACTTTTAGAGCACTATCGTGGTACAAATAATGCTGCCAC'
    let result = fk.mostFrequentKmers(genome, 3)
    expect(result.length).to.eql(1)
    expect(result[0]).to.eql('TGG')
  })

  // TEST DATASET 2:
  // Input:  CAGTGGCAGATGACATTTTGCTGGTCGACTGGTTACAACAACGCCTGGGGCTTTTGAGCAACGA GACTTTTCAATGTTGCACCGTTTGCTGCATGATATTGAAAACAATATCACCAAATAAATAACGC CTTAGTAAGTAGCTTTT
  // kmer length: 4
  // Output:  TTTT
  // This dataset just checks if you’re counting the last kmer in Text (TTTT in this example). If you do not count the last kmer (TTTT), you will get the following “most frequent” kmers in addition to TTTT:
  //   AACG AATA ACAA CAAC CTGG CTTT TTGC TTTG

  it('passes test 2', function () {
    let genome = 'CAGTGGCAGATGACATTTTGCTGGTCGACTGGTTACAACAACGCCTGGGGCTTTTGAGCAACGAGACTTTTCAATGTTGCACCGTTTGCTGCATGATATTGAAAACAATATCACCAAATAAATAACGCCTTAGTAAGTAGCTTTT'
    let result = fk.mostFrequentKmers(genome, 4)
    expect(result.length).to.eql(1)
    expect(result[0]).to.eql('TTTT')
  })

  // TEST DATASET 3:
  // Input:  ATACAATTACAGTCTGGAACCGGATGAACTGGCCGCAGGTTAACAACAGAGTTGCCAGGCACTG CCGCTGACCAGCAACAACAACAATGACTTTGACGCGAAGGGGATGGCATGAGCGAACTGATCGT CAGCCGTCAGCAACGAGTATTGTTGCTGACCCTTAACAATCCCGCCGCACGTAATGCGCTAACT AATGCCCTGCTG
  // kmer length: 5
  // Output:  AACAA
  // This dataset checks if your code correctly handles cases where there are overlapping occurrences of Pattern
  // throughout genome. For example, AACAACAA contains two occurrences of AACAA (A ACAAC AA and AACA ACAA) , so if your
  // code counts AACAACAA as one occurrence of AACAA, your code will fail on this test case.

  it('passes test 3', function () {
    let genome = 'ATACAATTACAGTCTGGAACCGGATGAACTGGCCGCAGGTTAACAACAGAGTTGCCAGGCACTGCCGCTGACCAGCAACAACAACAATGACTTTGACGCGAAGGGGATGGCATGAGCGAACTGATCGTCAGCCGTCAGCAACGAGTATTGTTGCTGACCCTTAACAATCCCGCCGCACGTAATGCGCTAACTAATGCCCTGCTG'
    let result = fk.mostFrequentKmers(genome, 5)
    expect(result.length).to.eql(1)
    expect(result[0]).to.eql('AACAA')
  })

  // TEST DATASET 4:
  // Input:  CCAGCGGGGGTTGATGCTCTGGGGGTCACAAGATTGCATTTTTATGGGGTTGCAAAAATGTTTT TTACGGCAGATTCATTTAAAATGCCCACTGGCTGGAGACATAGCCCGGATGCGCGTCTTTTACA ACGTATTGCGGGGTAAAATCGTAGATGTTTTAAAATAGGCGTAAC
  // kmer length: 5
  // Output:
  //   AAAAT GGGGT TTTTA
  // This test dataset checks if your code correctly handles ties (i.e. your code actually outputs ALL “most frequent”
  // kmers, and not just a single “most frequent” kmer). For example, in the string “ATATA”, there are two
  // “most­frequent” kmers: “AT” and “TA”. “AT” occurs twice (ATATA), and “TA” occurs twice (AT ATA) , so both of these
  // should be outputted (separated by a space character).

  it('passes test 4', function () {
    let genome = 'CCAGCGGGGGTTGATGCTCTGGGGGTCACAAGATTGCATTTTTATGGGGTTGCAAAAATGTTTTTTACGGCAGATTCATTTAAAATGCCCACTGGCTGGAGACATAGCCCGGATGCGCGTCTTTTACAACGTATTGCGGGGTAAAATCGTAGATGTTTTAAAATAGGCGTAAC'
    let result = fk.mostFrequentKmers(genome, 5)
    expect(result.length).to.eql(3)
    expect(result).to.include('AAAAT')
    expect(result).to.include('GGGGT')
    expect(result).to.include('TTTTA')
  })
})
