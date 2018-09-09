// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b) {
    var num = a + b;
    
    if ( num === 0 ) return '0';
    
    var pow = 0;
    var count = 0;
    while ( count < num ) {
      count = Math.pow(2, pow);
      pow = count <= num ? pow + 1 : pow;
    }
    
    pow--;
    
    var binary = '1';
    var remainder = num - Math.pow(2, pow);
    
    while ( pow > 0 ) {
      pow--;
      if ( pow >= 0 && remainder >= Math.pow(2, pow) ) {
        binary += '1';
        remainder = remainder - Math.pow(2, pow);
      } else {
          binary += '0';
      }
    }
    
    return binary;
  }