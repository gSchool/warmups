var partOne = require('../partOne').parseRequest
var partTwo = require('../partTwo').parseRequest
var partThree = require('../partThree').parseRequest
var expect = require('chai').expect 


describe ('GET HTTP function', function() {
  it ('should when given a HTTP input string, return a properly formatted object' , function() {
    var str1 = "GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2";
    var str2 = 'GET /api/v2/ability/4/ HTTP/1.1\nHost: pokeapi.co\nCache-Control: no-cache\nPostman-Token: b98466a7-6222-a4b5-dec3-1af3e4f866da'
    expect(partOne(str1)).to.eql(
      { 
      headers:
           { Host: ' api.spotify.com',
             'Cache-Control': ' no-cache',
             'Postman-Token': ' e2f09f98-f8e0-43f7-5f0e-b16e670399e2' },
      verb: 'GET',
      path: '/v1/search?q=bob%20dylan&amp;type=artist',
      protocol: 'HTTP/1.1' 
      }
    );
    expect(partOne(str2)).to.eql(
      { 
      headers:
         { Host: ' pokeapi.co',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' b98466a7-6222-a4b5-dec3-1af3e4f866da' },
      verb: 'GET',
      path: '/api/v2/ability/4/',
      protocol: 'HTTP/1.1' 
      }
    );
  });
});

describe ('POST HTTP function', function() {
  it ('should when given a HTTP input string, return a properly formatted object' , function() {
    var str1 = "POST /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: f6741a35-c20f-3051-e3f9-301904256b3f\nContent-Type: application/x-www-form-urlencoded\nfish=catfish&dog=dogfish";
    var str2 = 'POST /api/v2/ability/4/ HTTP/1.1\nHost: pokeapi.co\nCache-Control: no-cache\nPostman-Token: 80c0c09f-f995-fdb1-1d3a-9255c6842ff9\nContent-Type: application/x-www-form-urlencoded\nWhat...is+your+name%3F=Sir+Lancelot+of+Camelot.&What...is+your+quest%3F=To+seek+the+Holy+Grail.&What...is+your+favorite+color%3F=Blue.&Bridgekeeper=Right%2C+off+you+go.'

    expect(partTwo(str1)).to.eql(
      { headers:
         { Host: ' api.spotify.com',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
           'Content-Type': ' application/x-www-form-urlencoded' },
        verb: 'POST',
        path: '/v1/search?q=bob%20dylan&amp;type=artist',
        protocol: 'HTTP/1.1',
        body: { fish: 'catfish', dog: 'dogfish' } }
    );

    expect(partTwo(str2)).to.eql(
      { headers:
         { Host: ' pokeapi.co',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' 80c0c09f-f995-fdb1-1d3a-9255c6842ff9',
           'Content-Type': ' application/x-www-form-urlencoded' },
        verb: 'POST',
        path: '/api/v2/ability/4/',
        protocol: 'HTTP/1.1',
        body:
         { 'What...is+your+name%3F': 'Sir+Lancelot+of+Camelot.',
           'What...is+your+quest%3F': 'To+seek+the+Holy+Grail.',
           'What...is+your+favorite+color%3F': 'Blue.',
           Bridgekeeper: 'Right%2C+off+you+go.' } }
    );
  })
})

describe ('QUERY HTTP function', function() {
  it ('should when given a HTTP input with a query string, return a properly formatted object' , function() {
    var str1 = "POST /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: f6741a35-c20f-3051-e3f9-301904256b3f\nContent-Type: application/x-www-form-urlencoded\nfish=catfish&dog=dogfish";

    expect(partThree(str1)).to.eql(
    { headers:
       { Host: ' api.spotify.com',
         'Cache-Control': ' no-cache',
         'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
         'Content-Type': ' application/x-www-form-urlencoded' },
      verb: 'POST',
      path: '/v1/search?q=bob%20dylan&amp;type=artist',
      protocol: 'HTTP/1.1',
      query: { q: 'bob%20dylan', type: 'artist' },
      body: { fish: 'catfish', dog: 'dogfish' } }
    );
  })
})
