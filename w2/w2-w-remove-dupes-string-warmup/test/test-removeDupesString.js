var removeDupes = require('../prompt');
var expect = require('chai').expect;

describe('dupeRemover function', function() {
  it('should return a string', function() {
    expect(removeDupes.removeDupes('AABB')).to.be.a('string');
  });
  it('should return a string without duplicates', function() {
    expect(removeDupes.removeDupes('AABB')).to.be.equal('AB');
    expect(removeDupes.removeDupes('AaAaBbBb')).to.be.equal('AaBb');
    expect(removeDupes.removeDupes('cAtCaT')).to.be.equal('cAtCaT');
    // expect(removeDupes.removeDupes("aa".match(/[a-zA-Z]/))).to.equal()
  });
});
describe('dupeRemoverCI function', function() {
  it('should return a string', function() {
    expect(removeDupes.removeDupesCI('AABB')).to.be.a('string');
  });
  it('should return a string with no dupes and is case insensitive', function() {
    expect(removeDupes.removeDupesCI('AABB')).to.be.equal('AB');
    expect(removeDupes.removeDupesCI('AaAaBbBb')).to.be.equal('AB');
    expect(removeDupes.removeDupesCI('cAtCaT')).to.be.equal('cAt');
  });
});
describe('attendance', function() {
  it('should be the correct attendance word', function() {
    // expect(removeDupes.attendance).to.equal('privacy')
  });
});