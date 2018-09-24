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
  
  
  
// sort array of objects by specified property
var objects = [
    { id: 5, name: 'John Doe', age: 25, gender: 'male' },
    { id: 2, name: 'Sarah Smile', age: 27, gender: 'female' },
    { id: 4, name: 'Jack Frost', age: 20, gender: 'male' },
    { id: 1, name: 'Penny Lane', age: 24, gender: 'female' },
    { id: 3, name: 'Jane Doe', age: 26, gender: 'female' }
  ];
  
  function sortByProp( arr, propKey ) {
    return arr.sort( function(a, b) {
    
      var keyA = a[propKey];
      var keyB = b[propKey];
  
      if ( keyA < keyB ) return -1;
      if ( keyA > keyB ) return 1;
      return 0;
  
    });
  }
  