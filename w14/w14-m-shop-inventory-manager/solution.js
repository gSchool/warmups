// Hi and welcome to team Gilded Rose.

// You are asked to fix the code for our store management system.

// All items have a sell_in value which denotes the number of 
// days we have left to sell the item and a quality value which 
// denotes how valuable the item is. 

// At the end of each day our software should lower both values 
// for every item.

// Pretty simple, right? Well this is just the general rule with 
// some exception:

// once the sell_in days is less then zero, quality degrades twice as fast;
// the quality of an item can never be negative or increase beyond 50;
// the "Aged Brie" goods actually increases in quality each passing day;
// "Sulfuras" goods, being legendary items, never change their 
// sell_in or quality values;
// "backstage passes", like aged brie, increases in quality 
// as it's sell_in value decreases;
// not just that: for "backstage passes" quality increases 
// by 2 when there are 10 days or less and by 3 when there 
// are 5 days or less but quality drops to 0 after the concert 
// (sell_in 0 or lower).
// Complicated enough, now? Well, there is a new item category 
// that we would like to see added to the inventory management system:

// "Conjured" items degrade in quality twice as fast as normal items.
// You can change the update_quality method, add any new 
// code, but you should NOT edit the item constructor/class: it 
// belong to the goblin in the corner who will insta-rage and 
// one-shot you as he doesn't believe in shared code ownership.

// Just for extra clarification, an item can never have its 
// quality increase above 50, however "Sulfuras" is a legendary 
// item and as such its quality is 80 and it never alters.

// You won't find mixed categories (like a "Conjured Sulfuras 
// Backstage pass of Doom"), but the category name may be not 
// in the first position (ie: expect something like "SuperUberSword, 
// Conjured" or "Mighty Sulfuras Armour of Ultimate Awesomeness").


function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    
    const maxQuality = Math.max(50, item.quality);
    
    if(item.name.indexOf("Aged Brie") >= 0){
      item.quality = Math.min(maxQuality, item.quality + 1);
    } else if (item.name.indexOf("Backstage") >= 0) {
      item.quality = (item.sell_in > 1) * (Math.min(maxQuality, item.quality + (item.sell_in <= 6 ? 3 : item.sell_in <= 11 ? 2 : 1)));
    } else if (item.name.indexOf("Sulfuras") < 0) {      
      item.quality = item.quality - (/Conjured/i.test(item.name) ? 2 : 1) * (item.sell_in > 0 ? 1 : 2);
    }
    if(item.name.indexOf("Sulfuras") < 0){      
      item.quality = Math.max(0, item.quality)
      item.sell_in = item.sell_in - 1
    }    
  }
}

module.exports = {
    items: items,
    update_quality: update_quality
}