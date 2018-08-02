/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but 
 * exactly 4 digits or exactly 6 digits.
 */

function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) return false;
    
    for ( var i = 0; i < pin.length; i++ ) {
      if ( !Number.isInteger( parseInt(pin[i]) ) ) return false;
    }
    
    return true;
}