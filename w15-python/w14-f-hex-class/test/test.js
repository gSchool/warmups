var assert = require('chai').assert
var Hex = require('../prompt').Hex


describe('hex', function() {

  it('should return the hex number', function() {
    FF = new Hex(255)

    assert.equal(FF.toString(), "0xFF")
    assert.equal(FF + 1, 256)
    assert.equal(FF.toJSON(), "0xFF")
    assert.equal(FF.minus(1).toString(), "0xFE")
    assert.equal(FF.minus(FF).valueOf(), 0)
    assert.equal(new Hex(10).plus(5).toString(), "0xF")
    assert.equal(Hex.parse("FF"), 255)
    assert.equal(Hex.parse("0xFF"), 255)
  });
});


