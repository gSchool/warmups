//     )     )    (         (                        (     
//  ( /(  ( /(    )\ )      )\ )       (       *   ) )\ )  
//  )\()) )\())  (()/( (   (()/( (     )\    ` )  /((()/(  
// ((_)\ ((_)\    /(_)))\   /(_)))\ ((((_)(   ( )(_))/(_)) 
//  _((_)  ((_)  (_)) ((_) (_)) ((_) )\ _ )\ (_(_())(_))   
// | \| | / _ \  | _ \| __|| _ \| __|(_)_\(_)|_   _|/ __|  
// | .` || (_) | |   /| _| |  _/| _|  / _ \    | |  \__ \  
// |_|\_| \___/  |_|_\|___||_|  |___|/_/ \_\   |_|  |___/  
                                                                                                                  
// Number of permutations without repetitions

// Write a function that takes a number or a string and gives back 
// the number of permutations without repetitions that can generated 
// using all its element.; more on permutations here.

// For example, starting with:

// 1
// 45
// 115
// "abc"
// You could respectively generate:

// 1
// 45,54
// 115,151,511
// "abc","acb","bac","bca","cab","cba"
// So you should have, in turn:

// perms(1)==1
// perms(45)==2
// perms(115)==3
// perms("abc")==6

function perms(e){
  // Make e into a string
  e = e +'';
  // work areas
  var list = [], l = [];
  
  // Init to all zeros
  for(var x=0;x<128;x++)
     list[x] = 0;

  // Increment by ascii code
  for(var x=0;x<e.length;x++)
     list[e.charCodeAt(x)]++;
  
  // Move all greater-than-1 to l array
  for(var x=0;x<list.length;x++)
     if (list[x] > 1)
        l.push(list[x]);

  // Factorial function
  var f = function(n){ 
     if (n === 1)  
        return 1;
     else
        return n * f(n-1);
  };
  
  // Bottom
  var b = 1;
  
  // Factorial bottom no.s greater than 1: a!*b!*c!...*n!
  for(var x=0;x<l.length;x++) 
     b *= f(l[x]);

  // Return distinct permutations of e
  return f(e.length) / b;
}


module.exports = {
 perms: perms,
 attendance: "much words" 
}