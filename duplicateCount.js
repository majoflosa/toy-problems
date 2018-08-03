/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive 
 * alphabetic characters and numeric digits that occur more than once in the 
 * input string. The input string can be assumed to contain only alphabets 
 * (both uppercase and lowercase) and numeric digits.
 */

function duplicateCount(text) {
    var count = 0;
    var looped = [];
    var inLooped = [];
    var notInLooped = [];
    
    for ( var i = 0; i < text.length; i++ ) {
       if ( looped.indexOf(text[i].toLowerCase()) === -1 ) {
         notInLooped.push( text[i].toLowerCase() );
       } else {
         if ( inLooped.indexOf(text[i].toLowerCase()) === -1 ) {
             inLooped.push( text[i].toLowerCase() );
         }
       }
       looped.push( text[i].toLowerCase() );
    }
    
    return inLooped.length;
  }