// [9, 9, 4, 3, 6, 1, 5];

function sortArray( arr ) {
 
    var sorted = [];
    
    for ( var i = 0; i < arr.length; i ++ ) {
        var sortedIndex = 0;
        for ( var j = 0; j < arr.length; j++ ) {
            if ( i === j ) continue;
          
            if ( arr[i] >= arr[j] ) {
                sortedIndex++;
            }
        }
      
        if ( sorted[sortedIndex] === undefined ) {
            sorted[sortedIndex] = arr[i];
        } else {
  //           console.log( 'There\'s already an item there: ', sorted[sortedIndex], ' at ', sortedIndex );
            sorted[sortedIndex - 1] = arr[i];
        }
    }
    
    return sorted;
    
  }
  
  // var unsorted = ['beta', 'alpha', 5, 'echo', 'charle', 'Tango', 'delta', 'alpha'];
  // var unsorted = [5, 'Tango'];
  var unsorted = [0, 9, 4, 3, 6, 0, 0, 5];
  
  console.log( sortArray(unsorted) );
  // console.log( sortArray(unsorted).length );
  
  
  console.log(unsorted.sort());
  
  
  