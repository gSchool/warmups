var code = require('../convert_to_ES6');


describe('Original version of the functions:', function() {
  it('should swap the two values', function() {
    var arr = [1,2,3];
    code.swap(arr,1,0);
    expect(arr).toEqual([2,1,3]);
  });

  it('it should return an array with the new values', function changeEachElemSpec() {
    var num = Math.floor(Math.random(0,5) * 100);
    var arr = [1,2,num];
    expect(code.changeEachElem(arr,1,0)).toEqual(arr);
  });

  it('it should return an array with squared values', function useArrowsSpec() {
    var num = Math.floor(Math.random(0,5) * 100);
    var arr = [1,2,num];
    var result = [2,4,num*2];
    expect(code.useArrows(arr)).toEqual(result);
  });

  it('it should return a string', function printStringSpec() {
    expect(code.printString('Teddi','How are you?')).toEqual('Teddi says "How are you?"');
  });

  it('it should return an object', function makeObjSpec() {
    expect(code.makeObj(3,4)).toEqual({7: 'Shayna'});
  });

  it('it should return an object', function ObjPropertiesSpec() {
    expect(code.ObjProperties("Lonny", 8, "pink")).toEqual({name: 'Lonny', grade: 8, favColor: 'pink'});
  });
});

describe('Es6 Version:', function allEs6Versions() {
  it('it should swap the values for the given indices', function swapEs6Spec() {
    var arr = [1,2,3];
    code.swapEs6(arr,1,0);
    expect(arr).toEqual([2,1,3]);
  });

  it('it should return an array with the new values', function changeEachElemEs6Spec() {
    var num = Math.floor(Math.random(0,5) * 100);
    var arr = [1,2,num];
    expect(code.changeEachElemEs6(arr,1,0)).toEqual(arr);
  });

  it('it should return an array with squared values', function useArrowsEs6Spec() {
    var num = Math.floor(Math.random(0,5) * 100);
    var arr = [1,2,num];
    var result = [2,4,num*2];
    expect(code.useArrowsEs6(arr)).toEqual(result);
  });

  it('it should return a string', function printStringEs6Spec() {
    expect(code.printStringEs6('Teddi','Yay for ES6!')).toEqual('Teddi says "Yay for ES6!"');
  });

  it('it should return an object', function makeObjEs6Spec() {
    expect(code.makeObjEs6(3,4)).toEqual({7: 'Shayna'});
  });

  it('it should return an object', function ObjPropertiesEs6Spec() {
    expect(code.ObjPropertiesEs6("Lonny", 8, "pink")).toEqual({name: 'Lonny', grade: 8, favColor: 'pink'});
  });
});
