var expect = require('chai').expect
var revrot = require('../prompt').revrot


describe('revrot', function() {
  it('should return the correct number', function() {
    s = "733049910872815764"
    expect(revrot("1234", 0)).to.equal('');
    expect(revrot("", 0)).to.equal('');
    expect(revrot("1234", 5)).to.equal('');
    expect(revrot(s, 5)).to.equal('330479108928157');
  });
});
