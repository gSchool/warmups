var assert = require('chai').assert
var items = require('../prompt').items
var update_quality = require('../prompt').update_quality

//Testing one day lapse
update_quality();

describe('fix the code', function() {
   it("Testing "+items[0].name,function(){
   assert.equal(items[0].sell_in,9,"Expected different value");
   assert.equal(items[0].quality,19,"Expected different value");
   });
   it("Testing "+items[1].name,function(){
   assert.equal(items[1].sell_in,1,"Expected different value");
   assert.equal(items[1].quality,1,"Expected different value");
   });
   it("Testing "+items[2].name,function(){
   assert.equal(items[2].sell_in,4,"Expected different value");
   assert.equal(items[2].quality,6,"Expected different value");
   });
   it("Testing "+items[3].name,function(){
   assert.equal(items[3].sell_in,0,"Expected different value");
   assert.equal(items[3].quality,80,"Expected different value");
   });
   it("Testing "+items[4].name,function(){
   assert.equal(items[4].sell_in,14,"Expected different value");
   assert.equal(items[4].quality,21,"Expected different value");
   });
   it("Testing "+items[5].name,function(){
   assert.equal(items[5].sell_in,2,"Expected different value");
   assert.equal(items[5].quality,4,"Expected different value");  
   });
});
