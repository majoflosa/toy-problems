// merge all arguments into one array
function mergeToArray() {
  
    var merged = [];
    for ( var i = 0; i < arguments.length; i++ ) {
      merged.push( arguments[i] );
    }
    
    return merged;
  
  }
  
  console.log( 'merge all args into an array' );
  console.log( mergeToArray( 'hello', 1, false, {} ) );
  
  // merge items in passed arrays into one array
  function mergeArrays(/* arr1, arr2... arrN */) {
    
    var merged = [];
    for ( var i = 0; i < arguments.length; i++ ) {
       for ( var j = 0; j < arguments[i].length; j++ ) {
         merged.push( arguments[i][j] );
       }
    }
    
    return merged;
    
  }
  
  console.log( 'merge items in passed arrays into one array' );
  console.log( mergeArrays([1,2,3], [4,5,6], [7,8,9]) );
  
  // merge arguments into one array; if arg is array, insert items instead of the array
  function mergeItemsToArray() {
   
    var merged = [];
    for ( var i = 0; i < arguments.length; i++ ) {
       if ( Array.isArray(arguments[i]) ) {
         for ( var j = 0; j < arguments[i].length; j++ ) {
           merged.push( arguments[i][j] );
         }
       } else {
          merged.push( arguments[i] );
       }
    }
    
    return merged;
    
  }
  
  console.log( 'merge arguments or array items into one array' );
  console.log( mergeItemsToArray( 'a', [1, 2, 4], true ) );