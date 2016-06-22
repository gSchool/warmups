// In this warmup you will write a method which returns a quote for 
// a give quantity of items. Stock items are represented as a list 
// of objects. Each item has the following properties:
// - quantity (integer)
// - unit price (decimal)
// - unit margin (decimal)
// As you can see your stock is composed from single type of items. 
// Each batch is bought from a different supplier, so it comes with 
// it's own unit price and unit margin (i.e. your profit). Available 
// items will be passed to constructor of Quoter class as a list.

// Your task is to write getQuote method. It should return the best 
// price for a given quantity of items. However, your boss is rather 
// greedy, so best quote is one that maximises your margin. Note that 
// call to getQuote method should not modify stock passed into Quoter 
// constructor, i.e. multiple call to getQuote should operate on the same stock. 
// Your method should return the following string:
// - "Your order cannot be fulfilled, try lower quantity" if you don't 
// have enough stock
// - "Your best quote for x items is y" is you have enought items in stock

// Some examples to get you started:

// var quoter = new Quoter([]);     
// quoter.getQuote(1); // should return "Your order cannot be fulfilled, try lower quantity"


// var items = [{ quantity: 10, unitPrice: 100, unitMargin: 1 }, { quantity: 10, unitPrice: 110, unitMargin: 1.1 }];   
// var quoter = new Quoter(items);     
// quoter.getQuote(10); //should return "Your best quote for 10 items is 1100.00"

function Quoter(items) {
  this.items = (items || []).sort(function (item_a, item_b) { return item_a.unitMargin < item_b.unitMargin;});
  this.quantity = this._getQuantity();
}

Quoter.prototype._getQuantity = function () {
  return this.items.reduce(function (previous, current) { return previous + current.quantity; }, 0);
}

Quoter.prototype._getQuote = function (quantity) {
  return this.items.reduce(function (previous, current) {
    var units = quantity > current.quantity ? current.quantity : quantity;
    var actual = units * current.unitPrice;
    quantity = quantity - units;
    return previous + actual;
  }, 0);
}

Quoter.prototype.getQuote = function(quantity) {
  if (this.quantity >= quantity) {
    var price = this._getQuote(quantity);
    return 'Your best quote for '+ quantity +' items is ' + Number(price).toFixed(2);
  
  } else {
    return 'Your order cannot be fulfilled, try lower quantity';
  }
}

module.exports = {
 Quoter: Quoter,
 attendance: "much words" 
}