var assert = require('chai').assert
var mostFrequentDays = require('../prompt').mostFrequentDays


describe('Most Frequent Weekdays', function() {
  it('should return the correct number', function() {
    assert.deepEqual(mostFrequentDays(1084), ['Tuesday', 'Wednesday'], "Should be: ['Tuesday', 'Wednesday']");
    assert.deepEqual(mostFrequentDays(1167), ['Sunday'], "Should be: ['Sunday']");
    assert.deepEqual(mostFrequentDays(1216), ['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
    assert.deepEqual(mostFrequentDays(1492), ['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
    assert.deepEqual(mostFrequentDays(1770), ['Monday'], "Should be: ['Monday']");
    assert.deepEqual(mostFrequentDays(1785), ['Saturday'], "Should be: ['Saturday']");
    assert.deepEqual(mostFrequentDays(212), ['Wednesday', 'Thursday'], "Should be: ['Wednesday', 'Thursday']");
    assert.deepEqual(mostFrequentDays(1901)  , ['Tuesday'], "Should be: ['Tuesday']");
    assert.deepEqual(mostFrequentDays(2135), ['Saturday'], "Should be: ['Saturday']");
    assert.deepEqual(mostFrequentDays(3043), ['Sunday'], "Should be: ['Sunday']");
    assert.deepEqual(mostFrequentDays(2001), ['Monday'], "Should be: ['Monday']");
    assert.deepEqual(mostFrequentDays(3150), ['Sunday'], "Should be: ['Sunday']");
    assert.deepEqual(mostFrequentDays(3230), ['Tuesday'], "Should be: ['Tuesday']");
    assert.deepEqual(mostFrequentDays(328), ['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
    assert.deepEqual(mostFrequentDays(2016), ['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
    assert.deepEqual(mostFrequentDays(334), ['Monday'], "Should be: ['Monday']");
    assert.deepEqual(mostFrequentDays(1986), ['Wednesday'], "Should be: ['Wednesday']");
    assert.deepEqual(mostFrequentDays(3361), ['Thursday'], "Should be: ['Thursday']");
    assert.deepEqual(mostFrequentDays(5863), ['Thursday'], "Should be: ['Thursday']");
    assert.deepEqual(mostFrequentDays(1910), ['Saturday'], "Should be: ['Saturday']");
    assert.deepEqual(mostFrequentDays(1968), ['Monday', 'Tuesday'], "Should be: ['Monday', 'Tuesday']");
    assert.deepEqual(mostFrequentDays(7548), ['Thursday', 'Friday'], "Should be: ['Thursday', 'Friday']");
    assert.deepEqual(mostFrequentDays(8116), ['Wednesday', 'Thursday'], "Should be: ['Wednesday', 'Thursday']");
    assert.deepEqual(mostFrequentDays(9137), ['Friday'], "Should be: ['Friday']");
    assert.deepEqual(mostFrequentDays(1794), ['Wednesday'], "Should be: ['Wednesday']");
  });
});
