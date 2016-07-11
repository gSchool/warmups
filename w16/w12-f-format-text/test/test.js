var assert = require('chai').assert
var expect = require('chai').expect
var format = require('../prompt').format


describe('format text', function() {

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectet" + 
      "ur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Ph" + 
      "asellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Pra" + 
      "esent laoreet in enim ut placerat. Praesent a facilisis turpis.";

  it('should return the correct formatting', function() {

    var thirtyChars = 
    "Lorem ipsum dolor sit amet,"    + "\n" +
    "consectetur adipiscing elit."   + "\n" +
    "Aliquam nec consectetur risus." + "\n" +
    "Cras vel urna a tellus dapibus" + "\n" +
    "consequat. Duis bibendum"       + "\n" +
    "tincidunt viverra. Phasellus"   + "\n" +
    "dictum efficitur sem quis"      + "\n" +
    "porttitor. Mauris luctus"       + "\n" +
    "auctor diam id ultrices."       + "\n" +
    "Praesent laoreet in enim ut"    + "\n" +
    "placerat. Praesent a facilisis" + "\n" +
    "turpis."

    var fiftyChars = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing" + "\n" +
    "elit. Aliquam nec consectetur risus. Cras vel urna" + "\n" +
    "a tellus dapibus consequat. Duis bibendum"          + "\n" +
    "tincidunt viverra. Phasellus dictum efficitur sem"  + "\n" +
    "quis porttitor. Mauris luctus auctor diam id"       + "\n" +
    "ultrices. Praesent laoreet in enim ut placerat."    + "\n" +
    "Praesent a facilisis turpis."

    expect(format(text, 50) === fiftyChars).to.be.true;

  });
});
