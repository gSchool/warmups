var assert = require('chai').assert
var checkDNA = require('../prompt').checkDNA

describe('checkDNA', function() {
  it('should return true if correct sequence, else false', function() {
    assert.equal(checkDNA('GTCTTAGTGTAGCTATGCATGC','GCATGCATAGCTACACTACGAC'),false);
    assert.equal(checkDNA('GCGCTGCTAGCTGATCGA','ACGTACGATCGATCAGCTAGCAGCGCTAC'),true);
    assert.equal(checkDNA('CGATACGAACCCATAATCG','CTACACCGGCCGATTATGG'),false);
    assert.equal(checkDNA('AGTCTGTATGCATCGTACCC','GGGTACGATGCATACAGACT'),true);
    assert.equal(checkDNA('GTCACCGA','TCGGCTGAC'),false);
    assert.equal(checkDNA('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG','GGGCA'),true);
  });
});
