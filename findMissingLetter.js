/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

function findMissingLetter(array) {

    const joined = array.join('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        alphabet = alphabet.indexOf(joined[0]) !== -1 ? alphabet : alphabet.toUpperCase();
    
    const start = alphabet.indexOf(joined[0]);
    const end = alphabet.indexOf(joined[joined.length - 1]);
    const complete = alphabet.substring(start, end + 1);
      
    for ( let i = 0; i < joined.length; i++ ) {
      for ( let j = 0; j < complete.length; j++ ) {
        if ( joined.indexOf(complete[j]) === -1 ) return complete[j];
      }
    }
    
  }
  