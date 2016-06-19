// Define two functions

// hex_to_bin (hexToBin) and bin_to_hex (binToHex)

// hex_to_bin
// Takes a hexadecimal string as an argument .

// Note:This string can contain upper or lower case characters and start 
// with any amount of zeros.
// Returns the binary representation (without leading zeros) of the 
// numerical value of the hexadecimal string.

// Examples

// hexToBin("00F") -> "1111"
// hexToBin("5") -> "101"
// hexToBin("00000") -> "0"
// hexToBin('04D2') -> '10011010010'
// bin_to_hex
// Takes a binary string (with or without leading zeros) as an argument .

// Returns the hexadecimal representation of the numerical value of 
// the binary string.

// Note: Any none numerical characters should be lower case
// Examples

// binToHex("1111") -> "f"
// binToHex("000101") -> "5"
// binToHex('10011010010') -> '4d2'

function binToHex (binaryString) {
  var decString;
  // recursively strip all leading zeros
  if (binaryString[0] === '0') {
    return binToHex(binaryString.slice(1));
  }
  binaryString = binaryString.toLowerCase();
  // convert binary string to base 10 string
  decString = binaryString.split('').reverse().reduce( function(previousValue, currentValue, i) {
    // currentValue = currentValue * 1;
    return previousValue + (Math.pow(2, i) * currentValue);
  }, 0);
  // convert base 10 string to hexadecimal string and return
  return _decToBinHex(decString, 16).reverse().join('');
}

function hexToBin (hexString) {
  var decString;
  // recursively strip all leading zeros
  if (hexString[0] === '0') {
    return hexToBin(hexString.slice(1));
  }
  hexString = hexString.toLowerCase();
  var digit = {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  }
  // convert hexadecimal string to base 10 string
  decString = hexString.split('').reverse().reduce( function(previousValue, currentValue, i) {
    currentValue = digit[currentValue] || currentValue * 1;
    return previousValue + (Math.pow(16, i) * currentValue);
  }, 0);
  // convert base 10 string to binary string and return
  return _decToBinHex(decString, 2).reverse().join('');
}

// recursively convert base 10 number n, to binary or hexadecimal
// based on radius r
// with minor modifications, could handle other bases
function _decToBinHex(n, r) {
  var divisor = Math.floor(n / r);
  var remainder = n % r;
  var digit = {
    '10' : 'a',
    '11' : 'b',
    '12' : 'c',
    '13' : 'd',
    '14' : 'e',
    '15' : 'f'
  };
  if (n < r) {
    n = n + '';
    n = digit[n] || n;
    return [n];
  }
  remainder = remainder + '';
  remainder = digit[remainder] || remainder;
  return [remainder].concat( _decToBinHex( divisor, r ) );
}

module.exports = {
 hexToBin: hexToBin,
 binToHex: binToHex,
 _decToBinHex: _decToBinHex,
 attendance: "much words" 
}