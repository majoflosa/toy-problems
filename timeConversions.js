// Write a function that takes in an array of arrays, where the nested arrays all contain 3
// numbers representing hours, minutes, and seconds respectively. It should return the total
// time in the unit specified by an optional second parameter - a string of value "hours", 
// "minutes", or "seconds", "hours" being the default.

// Ex: [ [1,20,0], [0,30,0] ], "hours" -->> 1.83333

function timeToDecimal( arr, unit ) {
  
    var dec = 0;
    
    for ( var i = 0; i < arr.length; i++ ) {
      arr[i][2] = arr[i][2] === undefined ? 0 : arr[i][2]
      dec += arr[i][0] + (arr[i][1]/60) + (arr[i][2]/3600);
    }
    
    switch( unit ) {
      case "minutes":
        return dec * 60;
      case "seconds":
        return dec * 3600;
      default:
        return dec;
    }
    
  }