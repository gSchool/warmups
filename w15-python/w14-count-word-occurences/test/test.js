var assert = require('chai').assert
var wordCounter = require('../prompt').wordCounter


describe('count words', function() {
  it('should return the correct word count', function() {
    var counter = wordCounter("Lorem ipsum");
    assert.equal(counter.count("Lorem"), 1);
    assert.equal(counter.count("hey"), 0);
  });
});


